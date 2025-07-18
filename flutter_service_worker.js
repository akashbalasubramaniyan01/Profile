'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ab9c76ad5a3c8e17fabdfa6973a21d98",
"assets/AssetManifest.bin.json": "ed94154d5e20b4c64b74bf61be89d1da",
"assets/AssetManifest.json": "0e374c291a69d1eaa21239e7ab8aaf98",
"assets/assets/images/alien_icon.png": "3db9eb4f89eb988819dee5ea6a5b7d6b",
"assets/assets/images/androind_icon.png": "a6b6e423b961483adbafb6ba2c9c65aa",
"assets/assets/images/apiary_logo.png": "073eadd58782cb140c9fc1722510a998",
"assets/assets/images/appstore_logo.png": "fe3ef6bfb660706cae9d6317d9205183",
"assets/assets/images/avatar_1.png": "d2109618bc0c323a05d315def5842fc2",
"assets/assets/images/avatar_2.png": "187c8afa753d2e13af2c0c3a28c36d7c",
"assets/assets/images/avatar_3.png": "183a20700b5646f099a86d05ed45bdcd",
"assets/assets/images/avatar_4.png": "3ad88a407871c3161177d595537412f2",
"assets/assets/images/board_image.png": "cf4437b159e0113ddbc78c0d3c57de82",
"assets/assets/images/camp_logo.png": "9998fe98e46584cd894df0c3f3e0e605",
"assets/assets/images/eating_icon.png": "d8e39a4e1ecddec90c1cc64c8b11cb5d",
"assets/assets/images/feature_image_1.png": "cd00f5efbe65cfe4d20e985db726545c",
"assets/assets/images/feature_image_2.png": "7ca597827e09ed835c9a3098d0e57283",
"assets/assets/images/feature_image_3.png": "cf7586bb5e1e7aede4e0aafa644692a1",
"assets/assets/images/ibm_logo.png": "ddf6dbf176d046989e668f365a56190a",
"assets/assets/images/infinity_icon.png": "8b75e2d9fc54ddbd19abc4a63482a420",
"assets/assets/images/jalebi_logo.png": "7ac5c94feb47b3b8d740087ad2fed116",
"assets/assets/images/laptop_image.png": "522f51e2f200a87524741bada849059a",
"assets/assets/images/logo.png": "6ce0f16d3560379df364d2ed5bfed61e",
"assets/assets/images/mobile_intro_page_image.png": "6bc9dff14404a99c9a05924023463e32",
"assets/assets/images/Photos%2520(1).JPG": "afdace69a95ca7bf7814fbc3ddb963fb",
"assets/assets/images/Photos.JPG": "9b47be6b96e289f1729827b75abb7af8",
"assets/assets/images/Resume.pdf": "53f69422739a40a87aad1d75110f48b5",
"assets/assets/images/Screenshot%2520(206).png": "f6b68c677d5549556d425cb9c4ade35a",
"assets/assets/images/Screenshot%2520(208).png": "c112a588f55f1b604da592c18e381db7",
"assets/assets/images/Screenshot%2520(209).png": "fcb8ef001fa9695764a620ad9ada664b",
"assets/assets/images/Screenshot%2520(210).png": "5c36ac908fb4a566bfb0fabc2f0a1da3",
"assets/assets/images/Screenshot%2520(211).png": "6ea082d4c491db0896d24e28ee055de1",
"assets/assets/images/try_prototype.png": "93b744d2180bf3baa579a4a92e9f4077",
"assets/assets/images/web_intro_page_image.png": "a29c787e29923c49192bfa902f61b2a4",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "84e2018f7771cc36d7d26ce4fdccb306",
"assets/NOTICES": "470e731ba59b665c06c27f7fb83d8dbe",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "cdfb02dea76c7baa84be0f84d2214927",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "5e56b93fa6584438c40cda566c217785",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "17275603bf8536a0228c4cebe5107171",
"/": "17275603bf8536a0228c4cebe5107171",
"main.dart.js": "51bc4b9301e31ac00219b2b9e2aa414f",
"manifest.json": "f1ce8c51f38bcd3499495a3a60870d13",
"version.json": "ab3c0b3a5b861d59f8053a2828111880"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
