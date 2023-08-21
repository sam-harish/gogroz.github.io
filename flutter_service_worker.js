'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "1d186ff674eca07d2618667da718e556",
"/": "1d186ff674eca07d2618667da718e556",
"assets/NOTICES": "b1b7cad72cdb74a686c42561d5778a72",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/assets/icons/twitter_logo.png": "4523220a9a83756e427015f83663f009",
"assets/assets/icons/messages.png": "afa97de9ae5709842a30358c59ef2fba",
"assets/assets/icons/flash_deal.png": "1ccf85ccdbfdd47b12c0cd355fe2862b",
"assets/assets/icons/profile.png": "531bb1c7a7dc201d1e77e8448358812b",
"assets/assets/icons/placeholder.png": "4ee9d2e7f0e4ddc539dfb8c1b8ce5baf",
"assets/assets/icons/rice.png": "c1f6c920fea6b5c4efbb75e5afbcf7d4",
"assets/assets/icons/campaigns.png": "8e63abb3cc43572e841bb23d14743362",
"assets/assets/icons/facebook_logo.png": "33122dd8eb260b9331c75dd5096852fe",
"assets/assets/icons/snacks.png": "e7f73663159f2337c540130eb59b5c15",
"assets/assets/icons/app_logo.png1": "13df7809c0aff834ed8a2ff356dd551b",
"assets/assets/icons/minus.png": "870a335bb675505e1f888f1147bb1d02",
"assets/assets/icons/more.png": "28cb68b300f86edd0e914a019d2adda6",
"assets/assets/icons/soap.png": "fe41a405ffa03bf41fe86373e97de3f2",
"assets/assets/icons/favoriteseller.png": "d8b6fac18d053ec00873c66d150d8d96",
"assets/assets/icons/changed_password.png": "25d6dfc9bf591a069c939baab1f48e8b",
"assets/assets/icons/flash_deal11.png": "5256db483725bd663e53744463392f4b",
"assets/assets/icons/coupon.png": "3eee47933233d898ead37345a5234104",
"assets/assets/icons/daal.png": "5833c96961b85d1c02aed41e7b94bf90",
"assets/assets/icons/wholesale.png": "d0bb0f2ceea25aef2704516d6893a237",
"assets/assets/icons/todays_deal.png": "38e37cd0902d3d17c849a668402bcaee",
"assets/assets/icons/brands.png": "d85019b02f84ae1577687fae4e1d843a",
"assets/assets/icons/blog.png": "74827b65be30da2731a5ade9f7241d6a",
"assets/assets/icons/wallet.png": "f5ea00f3e66258407fd3de7e088c7fc9",
"assets/assets/icons/bell.png": "1a1be341ea030918e6cbf996f5cf51a9",
"assets/assets/icons/plus.png": "042954477fb46729980bb2eca0ac2e9e",
"assets/assets/icons/order.png": "4268c502251ef35d24afc32892de5ef9",
"assets/assets/icons/grocery.png": "12104d07b3997afe3916c3b50795aa0b",
"assets/assets/icons/clubpoint.png": "c320ea241a01682c5e0a4ee2f4afe4c6",
"assets/assets/icons/png.png": "471a6e3e69f44f639e3754e9e4df7d18",
"assets/assets/icons/placeholder_rectangle.png": "a364b79d7d4ec9f2193789116a80819b",
"assets/assets/icons/cart.png": "90b3e501aa1111ba852f6fd43ad64a55",
"assets/assets/icons/chat.png": "e81525480b3e390aea3314342d209574",
"assets/assets/icons/trash.png": "22c33a5ddb5a72c989f04dfaf74d8191",
"assets/assets/icons/add.png": "ac37821b1be524a375b9d04f511c16f1",
"assets/assets/icons/o-hamburger.png": "75540fbab9b867af5542e3173c23389a",
"assets/assets/icons/splash_login_registration_background_image.png": "7fd62d66f6ca61185880ff80b00f0eb5",
"assets/assets/icons/login.png": "6c7893480109324093f545ff19097efe",
"assets/assets/icons/download.png": "50dbf0c281bcbb8d65714c84764073fa",
"assets/assets/icons/shop.png": "170ac8257dcd4b2622ce8a8f37ea2921",
"assets/assets/icons/apple_logo.png": "ea25af9fd9fdcadfa92a4e2a3155d491",
"assets/assets/icons/wheat.png": "5256db483725bd663e53744463392f4b",
"assets/assets/icons/edit.png": "145c3c063e8f174a4635ea3a59095e85",
"assets/assets/icons/go_groz.png": "a809eaf7d725205d6b923f3529fab2a6",
"assets/assets/icons/google_logo.png": "172e9ccfd77faf97892546b5192c398a",
"assets/assets/icons/refund.png": "1d98ce7706455927116746d6009c4c20",
"assets/assets/icons/orders.png": "3639b858d6c5730b8e6705b62324772c",
"assets/assets/icons/white_tick.png": "4fdeadb857ec534766eac21d7d3de881",
"assets/assets/icons/app_": "8ec367980396b897863dd84b9e0edbf6",
"assets/assets/icons/millets.png": "b175b5d76e7fe78a0bc0404903088b29",
"assets/assets/icons/square_logo.png": "94138d75ae14373f4b5a6b7875b45f06",
"assets/assets/icons/headphone.png": "43015d0091d19bc188cd1da31021a5a9",
"assets/assets/icons/search.png": "c7cbc84f63ead800deb77cae175a1b8c",
"assets/assets/icons/points.png": "82988f05d354341ebce130b6cae90ec2",
"assets/assets/icons/heart.png": "2ff2d5c3ea1b82f37a4d9d3f8c2794b0",
"assets/assets/icons/top_categories.png": "f390e29b08742ec060e6e190ed200595",
"assets/assets/icons/home.png": "82b15439ecb4d4a776836d6d16f87d8b",
"assets/assets/icons/bg1.png": "a809eaf7d725205d6b923f3529fab2a6",
"assets/assets/icons/logout.png": "8c7b7b1ae8a3d6d6b43315e45840c5e6",
"assets/assets/icons/top_sellers.png": "d1ba492409bd709c2a7784360a5a10f5",
"assets/assets/icons/categories.png": "3ee9b41a7bddf1e8bc86548f97f73358",
"assets/assets/icons/arrow.png": "9e26b92eab0f00359ba8ac023dcfecd2",
"assets/assets/icons/oil.png": "73fd39f4e07cb22f56c46d1082985f22",
"assets/assets/icons/app_logo.png": "72e2bd08723c135539f1cb8cacd568d5",
"assets/assets/logo.png": "0b926d2fb965d73239fb223b5b2564f8",
"assets/assets/images/ss4.jpg": "fba32b243b7f57164c195437c7755d09",
"assets/assets/images/slider_4.png": "99915343a551230613dcce18db5ec0d5",
"assets/assets/images/slider_3.png": "8ac6717cbe88dffa9dad3f73a46b9c9a",
"assets/assets/images/fc4.jpeg": "96e513a66577c63d8e9d5efedbac393f",
"assets/assets/images/fc6.jpeg": "e204f2a4c81d47c8282b58d40a858a11",
"assets/assets/images/s4.jpg": "439721fb1ffa3a74347cfc46597cbd51",
"assets/assets/images/ss2.jpg": "8d4e0e490136ae6f13a2156055e9a8cd",
"assets/assets/images/fc1.jpeg": "19a9211afd60430246a8118f61e939d0",
"assets/assets/images/slider_2.png": "5a60daa426532f87197f782502ffed8b",
"assets/assets/images/fc8.jpeg": "40b875a214e8593f0c442d64a8cdd693",
"assets/assets/images/fc2.jpeg": "bca2c6546de68d10df8ed9c44a9278a7",
"assets/assets/images/ss3.jpg": "fde8bf3e093a128ad736884e0f23a3f4",
"assets/assets/images/verify_1.jpg": "7108c3639b3868b96c6f2b613cee104c",
"assets/assets/images/fc9.jpeg": "00fb10c1c988509108529112a81c8e0c",
"assets/assets/images/fc7.jpeg": "7ede6cbaf8411360cd7c18aef91e6d83",
"assets/assets/images/s6.jpg": "74d85e1347b5b461e4d6c9e62722cd77",
"assets/assets/images/s3.jpg": "4a568f5f407a9a7788e50ed563f26a8a",
"assets/assets/images/slider_1.png": "39e73a4be4964a574b1b2c2afe9abff0",
"assets/assets/images/cod.png": "ded4fb9f51d2cb2b3aadc86024670f65",
"assets/assets/images/rozarpay.png": "e5a527dc341d45de0a0f257fa3dc89c9",
"assets/assets/images/wheat.png": "5256db483725bd663e53744463392f4b",
"assets/assets/images/fc5.jpeg": "af901da9f118f243285d9418a3e58088",
"assets/assets/images/ss1.jpg": "3d9851109a521a368fd1d036562ab773",
"assets/assets/images/fc3.jpeg": "0e5c85f3f4987e48262f4977ad05ef59",
"assets/assets/images/s5.jpg": "57703d0c0668c1e8034c74a3ce7eeedc",
"assets/assets/images/s2.jpg": "6b5e196d2354299683e2ced71fd9122e",
"assets/assets/images/s1.jpg": "a5e47b01dd1ae81dbf629bd99098a728",
"assets/assets/fonts/sans_semibold.ttf": "ae9703e4b4c70169e32fee2647ddf51e",
"assets/assets/fonts/sans_regular.ttf": "d2d3b740e46522981f945573253b0a1a",
"assets/assets/fonts/sans_bold.ttf": "e2ebf780f846271f822b52d26d24af1d",
"assets/packages/new_app_version_alert/assets/Update-pana.png": "d15ce97a11be4c8bf460f348fb498ea3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/AssetManifest.json": "e141e2e8345d3ff7e4641ac04e0ad3db",
"assets/FontManifest.json": "4f271a1478aaf73157d28a50c93fb67a",
"assets/lib/services/category_model.json": "1f15d48aa445e11e4f4899266f5e4b3a",
"assets/AssetManifest.bin": "43192d1e9737279261676a82b2afe136",
"assets/fonts/MaterialIcons-Regular.otf": "02c95b740329ffb69ee096894fffe516",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"manifest.json": "b8e2fb551d6271e6a3b1a781bb9969b7",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "332276fe40840675d1537c7e9ad20100",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"version.json": "26507c5ee1120ed4c2f5951018f69a1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
