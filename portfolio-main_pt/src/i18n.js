// src/i18n.js
const en = require('../locales/en.json');
const pt = require('../locales/pt.json');

const dictionaries = { en, pt };
const SUPPORTED = Object.keys(dictionaries);
const DEFAULT_LANG = 'en';
const COOKIE = 'lang';

function readCookie(req, name) {
    const header = req.headers.cookie || '';
    const match = header.split(';').map((c) => c.trim()).find((c) => c.startsWith(`${name}=`));
    return match ? decodeURIComponent(match.slice(name.length + 1)) : undefined;
}

function fromAcceptLanguage(header = '') {
    const tags = header.split(',').map((t) => t.trim().slice(0, 2).toLowerCase());
    return tags.find((t) => SUPPORTED.includes(t));
}

// Resolves the language (?lang= > cookie > Accept-Language > default) and
// exposes lang, t() and loc() to every view.
function i18n(req, res, next) {
    const requested = typeof req.query.lang === 'string' ? req.query.lang.toLowerCase() : undefined;
    const cookie = readCookie(req, COOKIE);

    let lang = SUPPORTED.includes(requested) ? requested
        : SUPPORTED.includes(cookie) ? cookie
        : fromAcceptLanguage(req.headers['accept-language']) || DEFAULT_LANG;

    if (SUPPORTED.includes(requested)) {
        res.cookie(COOKIE, requested, { maxAge: 365 * 24 * 3600 * 1000, sameSite: 'lax', httpOnly: true });
    }

    const dict = dictionaries[lang];
    res.vary('Cookie');
    res.vary('Accept-Language');
    res.locals.lang = lang;
    res.locals.otherLang = lang === 'en' ? 'pt' : 'en';
    res.locals.t = (key) => key.split('.').reduce((o, k) => (o ? o[k] : undefined), dict) ?? key;
    // Picks the current-language value from a { en, pt } object; plain values pass through.
    res.locals.loc = (value) => (value && typeof value === 'object' && !Array.isArray(value) && lang in value ? value[lang] : value);
    next();
}

module.exports = { i18n, SUPPORTED };
