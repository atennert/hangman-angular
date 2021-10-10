(function() {
  "use strict";
  const CACHE_NAME = "hangman-atennert-%version%";
  const ALL_CACHES = [CACHE_NAME];
  self.addEventListener("install", event => {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(cache => {
          return cache.addAll([
            "index.html",
            "main.js",
            "polyfills.js",
            "runtime.js",
            "icon.svg",
            "manifest.webmanifest"]);
        }));
  });

  self.addEventListener("activate", event => {
    event.waitUntil(
      caches.keys()
        .then(cacheNames => {
          return Promise.all(
            cacheNames.filter(cacheName => {
              return (cacheName.startsWith("hangman-atennert")
                  || cacheName.startsWith("ngsw:"))
                && !ALL_CACHES.includes(cacheName);
            }).map(cacheName => caches.delete(cacheName)));
        }));
  });

  self.addEventListener("fetch", event => {
    const requestUrl = new URL(event.request.url);

    requestUrl.origin !== location.origin || "/" !== requestUrl.pathname
      ? event.respondWith(
        caches.match(event.request)
          .then(response => response || fetch(event.request)))
      : event.respondWith(
        caches.match("index.html")
          .then(response => response || fetch("index.html")))
  });
}());

