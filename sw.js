let cacheName = "cache-v1"
self.addEventListener('install', (event) => {
  async function buildCache() {
    const cache = await caches.open(cacheName);
    return cache.addAll([
		"/cat.jpg",
		"/logo.webp",
        "/images/sololearn.webp",
        "/images/BestLang.webp",
        "/images/nodeserver.webp",
        "/images/light-theme.svg",
        "/images/php-folder.svg",
        "/twitter.svg",
        "/heart.svg",
        "/github.svg"
    ]);
  }
  event.waitUntil(buildCache());
});

self.addEventListener('fetch', (event) => {
  async function cachedFetch(event) {
    const cache = await caches.open(cacheName);
    let response = await cache.match(event.request);
    if (response) return response;
    response = await fetch(event.request);
    return response;
  }
  event.respondWith(cachedFetch(event));
});