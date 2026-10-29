// public/js/main.js
(function () {
    var root = document.documentElement;
    root.classList.add('js');

    // Theme toggle: remember the choice when storage is available.
    function systemTheme() {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    try {
        var saved = localStorage.getItem('theme');
        if (saved === 'light' || saved === 'dark') root.setAttribute('data-theme', saved);
    } catch { /* storage unavailable */ }

    var button = document.getElementById('theme-toggle');
    if (button) {
        button.addEventListener('click', function () {
            var current = root.getAttribute('data-theme') || systemTheme();
            var next = current === 'dark' ? 'light' : 'dark';
            root.setAttribute('data-theme', next);
            try { localStorage.setItem('theme', next); } catch { /* ignore */ }
        });
    }

    // Avatar: play / pause the video introduction.
    var avatar = document.querySelector('[data-avatar]');
    if (avatar) {
        var audio = avatar.querySelector('video'); // the video carries the voice
        var toggle = avatar.querySelector('.avatar-btn');
        var setPlaying = function (playing) {
            avatar.classList.toggle('is-playing', playing);
            toggle.setAttribute('aria-pressed', String(playing));
            toggle.setAttribute('aria-label', playing ? toggle.dataset.labelPause : toggle.dataset.labelPlay);
        };
        toggle.addEventListener('click', function () {
            if (audio.paused) {
                audio.play().catch(function () { setPlaying(false); });
            } else {
                audio.pause();
            }
        });
        audio.addEventListener('play', function () { setPlaying(true); });
        audio.addEventListener('pause', function () { setPlaying(false); });
        audio.addEventListener('ended', function () { setPlaying(false); });

        // Start the introduction by itself a few seconds after the visitor arrives.
        // Browsers may refuse sound before the visitor interacts with the page; in that
        // case the avatar asks for a click instead of failing silently.
        var hint = avatar.querySelector('.avatar-hint');
        var originalHint = hint ? hint.textContent : '';
        var delay = Number(avatar.dataset.autoplayDelay) || 0;
        var usedControls = false;
        var autoplayed = false;
        try { autoplayed = sessionStorage.getItem('introAutoplayed') === '1'; } catch { /* storage unavailable */ }

        toggle.addEventListener('click', function () { usedControls = true; });
        audio.addEventListener('play', function () {
            avatar.classList.remove('needs-click');
            if (hint) hint.textContent = originalHint;
        });

        var tryAutoplay = function () {
            // Skip if the visitor already used the play/pause button, or the intro already played in this visit.
            if (autoplayed || usedControls || !audio.paused || audio.ended) return;
            if (document.hidden) {
                document.addEventListener('visibilitychange', function onVisible() {
                    if (document.hidden) return;
                    document.removeEventListener('visibilitychange', onVisible);
                    tryAutoplay();
                });
                return;
            }
            var attempt = audio.play();
            if (attempt && attempt.then) {
                attempt.then(function () {
                    try { sessionStorage.setItem('introAutoplayed', '1'); } catch { /* ignore */ }
                }).catch(function () {
                    avatar.classList.add('needs-click');
                    if (hint && avatar.dataset.hintBlocked) hint.textContent = avatar.dataset.hintBlocked;
                });
            }
        };
        if (delay > 0) window.setTimeout(tryAutoplay, delay);
    }

    // Reveal-on-scroll. Without IntersectionObserver everything simply shows.
    var items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
        items.forEach(function (el) { el.classList.add('is-visible'); });
        return;
    }
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    items.forEach(function (el) { observer.observe(el); });
})();
