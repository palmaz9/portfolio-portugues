// src/server.js
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

const { i18n } = require('./i18n');
const content = require('../data/content');

const app = express();
const PORT = process.env.PORT || 3000;
const ROOT = path.join(__dirname, '..');

app.set('view engine', 'ejs');
app.set('views', path.join(ROOT, 'views'));
app.disable('x-powered-by');

app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'"],
            styleSrc: ["'self'"],
            imgSrc: ["'self'", 'data:'],
            objectSrc: ["'none'"],
            frameAncestors: ["'self'"],
        },
    },
}));

// CSS/JS URLs carry a content hash (?v=...), so a changed file is never served stale.
function assetVersion(file) {
    try {
        return crypto.createHash('md5').update(fs.readFileSync(path.join(ROOT, 'public', file))).digest('hex').slice(0, 8);
    } catch {
        return '0';
    }
}
const versions = {};
['css/styles.css', 'js/main.js', 'video/intro-en.mp4', 'video/intro-pt.mp4', 'video/intro-en.jpg', 'video/intro-pt.jpg'].forEach((file) => {
    versions[`/${file}`] = assetVersion(file);
});
app.locals.asset = (file) => (versions[file] ? `${file}?v=${versions[file]}` : file);

app.use(express.static(path.join(ROOT, 'public'), { maxAge: '1d' }));

app.use(i18n);

// Values shared by every page.
app.use((req, res, next) => {
    const base = (process.env.SITE_URL || '').replace(/\/$/, '');
    res.locals.site = content.site;
    res.locals.contactEmail = process.env.CONTACT_EMAIL || '';
    res.locals.hasResume = fs.existsSync(path.join(ROOT, 'public', 'downloads', 'resume.pdf'));
    res.locals.year = new Date().getFullYear();
    res.locals.path = req.path;
    res.locals.canonical = base ? `${base}${req.path}` : '';
    res.locals.siteUrl = base;
    next();
});

app.get('/', (req, res) => {
    res.render('index', { pageTitle: res.locals.t('meta.homeTitle'), pageDescription: res.locals.t('meta.homeDescription'), ...content });
});

app.get('/projects', (req, res) => {
    res.render('projects', { pageTitle: res.locals.t('meta.projectsTitle'), pageDescription: res.locals.t('meta.projectsDescription'), projects: content.projects });
});

app.get('/certifications', (req, res) => {
    res.render('certifications', {
        pageTitle: res.locals.t('meta.credentialsTitle'),
        pageDescription: res.locals.t('meta.credentialsDescription'),
        publications: content.publications,
        certifications: content.certifications,
    });
});

// The old "References" page was replaced by Credentials.
app.get('/references', (req, res) => res.redirect(301, '/certifications'));

app.use((req, res) => {
    res.status(404).render('404', { pageTitle: res.locals.t('meta.notFoundTitle'), pageDescription: '' });
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).render('404', { pageTitle: res.locals.t('meta.errorTitle'), pageDescription: '', errorPage: true });
});

// Vercel imports the app (see api/index.js); only listen when run directly.
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

module.exports = app;
