/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "91c4810e7db65c8201e5e0ff533c3da4"
  },
  {
    "url": "assets/css/0.styles.4919c6c6.css",
    "revision": "70e210bc1eb704bc140a139e5b2955cb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.77d623d1.js",
    "revision": "72fad40b96b550725717fb0a1a0529fd"
  },
  {
    "url": "assets/js/11.ed47a8a2.js",
    "revision": "fcedb551384050c04e75d9b1fc6320d8"
  },
  {
    "url": "assets/js/12.b8c4c692.js",
    "revision": "1073b205f7184056c0a3824bc4c6b63a"
  },
  {
    "url": "assets/js/13.3a38be39.js",
    "revision": "ccb73b7d5a0d4da4d47327feb5e93d9a"
  },
  {
    "url": "assets/js/14.6213e5f7.js",
    "revision": "a6e1f72916dbc9ffa624bac20e2f9004"
  },
  {
    "url": "assets/js/15.31de5bc4.js",
    "revision": "87495b50950e9d9b19652522a3164a63"
  },
  {
    "url": "assets/js/16.ec18f60f.js",
    "revision": "3a4da7f4aeebae6221019f5e541f2564"
  },
  {
    "url": "assets/js/17.558202b9.js",
    "revision": "c8ecc1a6cd8236782fb02dd713e89a51"
  },
  {
    "url": "assets/js/2.229ffa8a.js",
    "revision": "b38832ed653b3836a5bbdf17e7a2e97e"
  },
  {
    "url": "assets/js/3.fdfad8be.js",
    "revision": "37ffb1d7d2041a62e84f3c189a5ee478"
  },
  {
    "url": "assets/js/4.237db3f1.js",
    "revision": "60247dd3be84370dc720612c3a05aafe"
  },
  {
    "url": "assets/js/5.a03455d7.js",
    "revision": "54cf5780d4873eac30849645832e50f7"
  },
  {
    "url": "assets/js/6.f4344879.js",
    "revision": "7e6f641756043f6033f1b1e01fccb6b1"
  },
  {
    "url": "assets/js/7.42838c95.js",
    "revision": "e36ad9285019cdf9b2ebdc16a74a0dae"
  },
  {
    "url": "assets/js/8.9e4decbf.js",
    "revision": "c53d9622f164d2580098486721cc7e8b"
  },
  {
    "url": "assets/js/9.e8124ed9.js",
    "revision": "aa49ee63477331810b34af01567502d8"
  },
  {
    "url": "assets/js/app.187bbd43.js",
    "revision": "6c3b790a69b7bb4b7681573b6d42dee0"
  },
  {
    "url": "config/index.html",
    "revision": "1bca048d882561a83eeba3ea2f8d31d7"
  },
  {
    "url": "data/mydata.html",
    "revision": "a8af9bf3a5a4bec73b72ffd2d7e026f7"
  },
  {
    "url": "guide/index.html",
    "revision": "7eb045ea8e48681037111bc810df26e6"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "04d79bd3ebb2c5e9b2039e7e64aa8b02"
  },
  {
    "url": "images/maskable_icon_x128.png",
    "revision": "3efb27691294b081f6b5e3de552cb181"
  },
  {
    "url": "images/maskable_icon_x192.png",
    "revision": "ef8082f2f2b13ed00faeccb9e290cf0c"
  },
  {
    "url": "images/maskable_icon_x384.png",
    "revision": "6cb38020d6542cea43ecf44a3b6a3dd2"
  },
  {
    "url": "images/maskable_icon_x48.png",
    "revision": "d305a1b17751d6d8001aec0382660b4b"
  },
  {
    "url": "images/maskable_icon_x512.png",
    "revision": "21cf4c794e0e46c4ae7ac7426c29174f"
  },
  {
    "url": "images/maskable_icon_x72.png",
    "revision": "660309aed4d8fdad541c46e28fd779f1"
  },
  {
    "url": "images/maskable_icon_x96.png",
    "revision": "1cc1731bb5da7da8631f4f59359677ad"
  },
  {
    "url": "images/maskable_icon.png",
    "revision": "21cf4c794e0e46c4ae7ac7426c29174f"
  },
  {
    "url": "index.html",
    "revision": "44ed72c6c6298952a0bbde3ef50569bb"
  },
  {
    "url": "intro.html",
    "revision": "b31dffad35b8082998443aceb9960a7b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
