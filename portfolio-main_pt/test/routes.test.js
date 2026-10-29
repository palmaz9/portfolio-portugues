const test = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');

const app = require('../src/server');

test('GET / renders the home page in English by default', async () => {
    const res = await request(app).get('/');
    assert.equal(res.status, 200);
    assert.match(res.text, /<html lang="en">/);
    assert.match(res.text, /I turn business data into decisions/);
});

test('?lang=pt renders Portuguese and remembers the choice', async () => {
    const first = await request(app).get('/?lang=pt');
    assert.equal(first.status, 200);
    assert.match(first.text, /<html lang="pt">/);
    assert.match(first.text, /Transformo dados de negócio em decisões/);

    const cookie = first.headers['set-cookie'];
    assert.ok(cookie, 'language cookie should be set');
    const next = await request(app).get('/projects').set('Cookie', cookie);
    assert.match(next.text, /<html lang="pt">/);
    assert.match(next.text, /Problema/);
});

test('Accept-Language selects Portuguese when no cookie is present', async () => {
    const res = await request(app).get('/').set('Accept-Language', 'pt-BR,pt;q=0.9');
    assert.match(res.text, /<html lang="pt">/);
});

test('an unsupported ?lang falls back to English', async () => {
    const res = await request(app).get('/?lang=xx');
    assert.match(res.text, /<html lang="en">/);
    assert.equal(res.headers['set-cookie'], undefined);
});

test('GET /projects lists every project', async () => {
    const res = await request(app).get('/projects');
    assert.equal(res.status, 200);
    for (const id of ['audit-automation', 'legal-dashboards', 'hospital-app', 'ml-projects', 'chess-engine']) {
        assert.ok(res.text.includes(`id="${id}"`), `missing project ${id}`);
    }
});

test('GET /certifications renders the credentials page', async () => {
    const res = await request(app).get('/certifications');
    assert.equal(res.status, 200);
    assert.match(res.text, /available upon request/);
});

test('/references redirects permanently to /certifications', async () => {
    const res = await request(app).get('/references');
    assert.equal(res.status, 301);
    assert.equal(res.headers.location, '/certifications');
});

test('unknown routes return the 404 page', async () => {
    const res = await request(app).get('/nope');
    assert.equal(res.status, 404);
    assert.match(res.text, /Page not found/);
});

test('security headers are set and x-powered-by is hidden', async () => {
    const res = await request(app).get('/');
    assert.ok(res.headers['content-security-policy']);
    assert.equal(res.headers['x-powered-by'], undefined);
});

test('home lists the Agrio Frutas role in both languages', async () => {
    const en = await request(app).get('/?lang=en');
    assert.match(en.text, /Agrio Frutas/);
    assert.match(en.text, /Data Analyst &amp; Systems Developer/);
    assert.match(en.text, /06\/2026 – Present/);

    const pt = await request(app).get('/?lang=pt');
    assert.match(pt.text, /Analista de Dados e Desenvolvedor de Sistemas/);
    assert.match(pt.text, /06\/2026 – Atual/);
});

test('credentials page lists the certifications from the CV', async () => {
    const res = await request(app).get('/certifications');
    assert.match(res.text, /Salesforce Associate Certified/);
    assert.match(res.text, /CITI Program Certified/);
});

test('hero mentions the developer role in both languages', async () => {
    const en = await request(app).get('/?lang=en');
    assert.match(en.text, /Salesforce Administrator, Data Analyst &amp; Developer/);
    const pt = await request(app).get('/?lang=pt');
    assert.match(pt.text, /Analista de Dados e Desenvolvedor/);
});

test('skills follow the CV and the Agrio logo is shown', async () => {
    const res = await request(app).get('/?lang=en');
    assert.match(res.text, /Flow Builder/);
    assert.match(res.text, /LLM APIs \(Claude\)/);
    assert.doesNotMatch(res.text, /Google Apps Script|scikit-learn|MongoDB/);
    assert.match(res.text, /agrio-logo\.webp/);
});

test('CSS and JS URLs are versioned so changes are never served stale', async () => {
    const res = await request(app).get('/');
    assert.match(res.text, /styles\.css\?v=[0-9a-f]{8}/);
    assert.match(res.text, /main\.js\?v=[0-9a-f]{8}/);
});



test('the home avatar is set to start its introduction 7 seconds after arrival', async () => {
    const en = await request(app).get('/?lang=en');
    assert.match(en.text, /data-autoplay-delay="7000"/);
    assert.match(en.text, /data-hint-blocked="Press play to hear my introduction"/);
    const pt = await request(app).get('/?lang=pt');
    assert.match(pt.text, /data-hint-blocked="Toque no play para ouvir minha apresentação"/);
});




test('the hero plays a lip-synced video of the caricature in the selected language', async () => {
    for (const [lang, alt, note] of [['en', /Cartoon caricature of Lucas Palma/, /voice created from my own voice/], ['pt', /Caricatura em desenho animado de Lucas Palma/, /voz criada a partir da minha própria voz/]]) {
        const res = await request(app).get(`/?lang=${lang}`);
        assert.match(res.text, new RegExp(`<video class="avatar-video" src="/video/intro-${lang}\\.mp4\\?v=[0-9a-f]{8}" poster="/video/intro-${lang}\\.jpg\\?v=[0-9a-f]{8}"`));
        assert.match(res.text, note);
        assert.doesNotMatch(res.text, /Profile_Pic|<audio/);
        assert.ok(alt);
    }
});

test('the intro videos and posters are served with the right types', async () => {
    for (const lang of ['en', 'pt']) {
        const video = await request(app).get(`/video/intro-${lang}.mp4`);
        assert.equal(video.status, 200);
        assert.match(video.headers['content-type'], /video\/mp4/);
        const poster = await request(app).get(`/video/intro-${lang}.jpg`);
        assert.equal(poster.status, 200);
        assert.match(poster.headers['content-type'], /image\/jpeg/);
    }
});
