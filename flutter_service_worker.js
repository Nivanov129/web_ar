'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "AgoraRtcWrapper.bundle.js": "7607e24d385c392f197707cc57a38cf6",
"version.json": "80478359c0487b900046712e30b8e750",
"index.html": "b56ecf4f9c107a707c558382096d4dbb",
"/": "b56ecf4f9c107a707c558382096d4dbb",
"main.dart.js": "5ea7f513972bddb59540add4a3d06de2",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6e553a83cd2887ab2da6f1e1c732c009",
"assets/AssetManifest.json": "370c870cb20054749da56fc4f22681c8",
"assets/NOTICES": "98efea9e0a5c2ccfcfa3a4021756d3ab",
"assets/FontManifest.json": "b34315e5c3d71dc4db93818f568d6edd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/simple_fontellico_progress_dialog/fonts/Fontelico.ttf": "50eecc2595113e22435b28f0079d6dfc",
"assets/packages/agora_rtc_engine/assets/AgoraRtcWrapper.bundle.js": "996d34547d48e4e92c002d1e0de0d061",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/OpenSans-Semibold.ttf": "33f225b8f5f7d6b34a0926f58f96c1e9",
"assets/fonts/OpenSans-Light.ttf": "1bf71be111189e76987a4bb9b3115cb7",
"assets/fonts/OpenSans-Italic.ttf": "c7dcce084c445260a266f92db56f5517",
"assets/fonts/OpenSans-ExtraBold.ttf": "8bac22ed4fd7c8a30536be18e2984f84",
"assets/fonts/OpenSans-LightItalic.ttf": "6943fb6fd4200f3d073469325c6acdc9",
"assets/fonts/icons/CancelIcon.ttf": "41300a04a58f319861e6c67727dddeeb",
"assets/fonts/icons/SaveIcon.ttf": "4e2ec0d36b5491d59353534c3da90ac9",
"assets/fonts/icons/ShareIcon.ttf": "3760ceea5670f7b3612fb4e6576126ef",
"assets/fonts/icons/EyesIcon.ttf": "bd19e7f314a47978ea79d6666037b541",
"assets/fonts/icons/CloseCircleIcon.ttf": "3a9276aa3e97ff403316a323e2cb97d2",
"assets/fonts/icons/CloseIcon.ttf": "8147863a4c1b04fb356e3ca1ad955b67",
"assets/fonts/OpenSans-Bold.ttf": "50145685042b4df07a1fd19957275b81",
"assets/fonts/OpenSans-SemiboldItalic.ttf": "73f7301a9cd7a086295401eefe0c998f",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/OpenSans-ExtraBoldItalic.ttf": "73d6bb0d4f596a91992e6be32e82e3bc",
"assets/fonts/OpenSans-Regular.ttf": "629a55a7e793da068dc580d184cc0e31",
"assets/fonts/OpenSans-BoldItalic.ttf": "78b08a68d05d5fabb0b8effd51bf6ade",
"assets/assets/svg/cancelLight.svg": "e03828617a43eb5a2c76c3facae405d8",
"assets/assets/svg/cancel.svg": "e5cdbf52c53a91a22f3426ff7835251d",
"assets/assets/svg/videoCall.svg": "fb07aa11313a5bb00b47a21f2df8f29a",
"assets/assets/svg/shareBottom.svg": "5d291f890e25b872ee9a4ee720f01c42",
"assets/assets/svg/qrBottom.svg": "3a9e0e2e4d3de17fb47db420a4fdcc63",
"assets/assets/svg/share.svg": "1348d36f0fc68bb5a9d5a5ca0d25a266",
"assets/assets/svg/switch.svg": "703cae7a7977b180e8fd54bbd5b61454",
"assets/assets/svg/error.svg": "08dcc9e91c3383074aeb74328153ba61",
"assets/assets/svg/done.svg": "df567cc4b5daba5f52eaea9175a1c9bd",
"assets/assets/images/moreOn.png": "edd7da20b68824fdd7391524568b2d07",
"assets/assets/images/recovery.png": "3754d307b72fa2996a48f3b20f53e83d",
"assets/assets/images/micOn.png": "b57a9b627dafa9ae54be4b20410b5610",
"assets/assets/images/shield.png": "ba3fc1e7464b4e9f9ef87541be5ffee8",
"assets/assets/images/settings.png": "646c347ca5bc78da4aaee184133c8dd2",
"assets/assets/images/broadcastOn.png": "cce9b7041d7b4477093fb3fdaa81f821",
"assets/assets/images/broadcastOff.png": "2fb451ee553d5b143e70f9cbf4f4fd1a",
"assets/assets/images/vk.png": "c14cd6e8693207d30bbb9869e5b00f2a",
"assets/assets/images/moreOff.png": "608769874a3c34f521184c3f1551c466",
"assets/assets/images/videoOff.png": "3fb91591ada258b719deb87ef87dcd96",
"assets/assets/images/person.png": "d359f05f41d70309edffbb8c6a5ab704",
"assets/assets/images/photoCircle.png": "325de94500e54cf12a20b08539f8186f",
"assets/assets/images/brandLogo.png": "02976cc433df1d13ea278e57d9817154",
"assets/assets/images/photo.png": "684006404bcf2139fc7d961b24648601",
"assets/assets/images/apple.png": "df6a0a867e76ef1d84573af5a1db3c05",
"assets/assets/images/audioOff.png": "43bc3ffa87a597beeb99fba0a1f7c8bd",
"assets/assets/images/logo.png": "5579615f8ea2c084d88093694b876cf7",
"assets/assets/images/videoOn.png": "b1a1659d7a6af294c346cd6a348c2de6",
"assets/assets/images/audioOn.png": "1d810abfbaf1539c38fa40e18a535d54",
"assets/assets/images/profile.png": "6c14c6b161c6e98ee2c7b3fa9ec30fc2",
"assets/assets/images/mainImage.png": "b0e36e3591058c85500b0d8cdc43fd40",
"assets/assets/images/exit.png": "779df754a709fa41bb46bafb6765b4dc",
"assets/assets/images/write.png": "168cd141848f5921e23dadec4642d6e0",
"assets/assets/images/trash.png": "38ebdafc016633380eb0078f40f9584b",
"assets/assets/images/shadow.png": "1aeac25b270ed0dd3e61c2d601623ab1",
"assets/assets/images/google.png": "8b05648e7dfd8d28821614a44842ef69",
"assets/assets/images/facebook.png": "0ac9a8a0b0c76a41bdd9d0b35410a71a",
"assets/assets/images/nextCall.png": "e6724fe26fbcf5cfa77c2a7042332379",
"assets/assets/images/attenders.png": "7c3288bd747b47a5b770ac443f4d74b5",
"assets/assets/images/micOff.png": "7d6bb2c98bac54a615c2158097ea4908",
"assets/assets/animations/loading.json": "a9c2e217c9c87ac67d2145e4dfd277e4",
"assets/assets/animations/launch.json": "af6e830072f2d766a727e2efc895d696",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
