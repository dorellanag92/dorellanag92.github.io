'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "0fe5da67999b2219e23c896e7e8aa598",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"dorellanag92.github.io/.git/config": "dff83dbb3b948e2c2b36bd97e7b70fc4",
"dorellanag92.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"dorellanag92.github.io/.git/FETCH_HEAD": "8db703dfcdd9841b0f282a368d6c110f",
"dorellanag92.github.io/.git/HEAD": "245839e9db95c9b7473250a2ae41bef6",
"dorellanag92.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"dorellanag92.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"dorellanag92.github.io/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"dorellanag92.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"dorellanag92.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"dorellanag92.github.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"dorellanag92.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"dorellanag92.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"dorellanag92.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"dorellanag92.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"dorellanag92.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"dorellanag92.github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"dorellanag92.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"dorellanag92.github.io/.git/index": "ba3af5ef4ee56f6dade564f8d2be5d44",
"dorellanag92.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"dorellanag92.github.io/.git/logs/HEAD": "d1ac727408db1361de1262c88b9e03b4",
"dorellanag92.github.io/.git/logs/refs/heads/DO_Web_31-05-2022": "3f52d4c9d23620d9c07a4d8ccf9e70dc",
"dorellanag92.github.io/.git/logs/refs/heads/main": "ff3558ef043d96e4cfdf3f437fc0b710",
"dorellanag92.github.io/.git/logs/refs/remotes/origin/DO_Web_31-05-2022": "4d143b06cbf3a20768878ae52f418792",
"dorellanag92.github.io/.git/logs/refs/remotes/origin/HEAD": "ff3558ef043d96e4cfdf3f437fc0b710",
"dorellanag92.github.io/.git/objects/pack/pack-d0505916e894c81906471018263574afbe4ddc8a.idx": "7679fe81537faa3c2468756aa3c54871",
"dorellanag92.github.io/.git/objects/pack/pack-d0505916e894c81906471018263574afbe4ddc8a.pack": "f0cac18fa86d5b30f4c4fd7906f0b6af",
"dorellanag92.github.io/.git/packed-refs": "db979d5ef2987ec46b81be64f3767388",
"dorellanag92.github.io/.git/refs/heads/DO_Web_31-05-2022": "29caeeb7a47867c09193568edfae1698",
"dorellanag92.github.io/.git/refs/heads/main": "29caeeb7a47867c09193568edfae1698",
"dorellanag92.github.io/.git/refs/remotes/origin/DO_Web_31-05-2022": "29caeeb7a47867c09193568edfae1698",
"dorellanag92.github.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"dorellanag92.github.io/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"dorellanag92.github.io/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"dorellanag92.github.io/assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"dorellanag92.github.io/assets/NOTICES": "0fe5da67999b2219e23c896e7e8aa598",
"dorellanag92.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"dorellanag92.github.io/canvaskit/canvaskit.js": "3725a0811e16affbef87d783520e61d4",
"dorellanag92.github.io/canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"dorellanag92.github.io/canvaskit/profiling/canvaskit.js": "491df729e7b715d86fc167feabea031a",
"dorellanag92.github.io/canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"dorellanag92.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"dorellanag92.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"dorellanag92.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"dorellanag92.github.io/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"dorellanag92.github.io/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"dorellanag92.github.io/index.html": "4afbea9fbf95753751c0a8073e805837",
"/": "9c01cd486cdae71bd79122309ad1a60a",
"dorellanag92.github.io/main.dart.js": "83211d357cf3f9f0ea16a1b08685f0a1",
"dorellanag92.github.io/manifest.json": "e235c43e31efd6ada85d20ccda0f58bb",
"dorellanag92.github.io/version.json": "05f257e883517c55810c9e0427122e7d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9c01cd486cdae71bd79122309ad1a60a",
"main.dart.js": "7c220c2a9f08e3beb41e021a651c23a7",
"manifest.json": "e235c43e31efd6ada85d20ccda0f58bb",
"version.json": "05f257e883517c55810c9e0427122e7d",
"web/.git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
"web/.git/config": "079c40b930f95ba6ceeffce4193a50c3",
"web/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"web/.git/FETCH_HEAD": "0231003e4904981a69439a134931aa26",
"web/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"web/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"web/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"web/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"web/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"web/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"web/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"web/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"web/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"web/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"web/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"web/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"web/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"web/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"web/.git/index": "5600e3cc5d2e958089f61b010030b906",
"web/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"web/.git/logs/HEAD": "0a18c52511b77251fd0a6bd1930a0fef",
"web/.git/logs/refs/heads/main": "0a18c52511b77251fd0a6bd1930a0fef",
"web/.git/logs/refs/remotes/origin/main": "a4db0e233ce40aed2361fa6653614c6c",
"web/.git/objects/6f/9509c88bed7080d496fc5e1d87a9315e30549d": "c02716d7aaed30ce1c5697a2fb40d317",
"web/.git/objects/b6/0812852b0efddd5786fd3123c9a405a6263d83": "d08623e689f92421f4d76606520e24de",
"web/.git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
"web/.git/refs/heads/main": "f6c5459631b2cf6994b10cd8076c8135",
"web/.git/refs/remotes/origin/main": "f6c5459631b2cf6994b10cd8076c8135"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
