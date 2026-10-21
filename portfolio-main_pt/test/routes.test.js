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
