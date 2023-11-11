const Cache_Name = 'v1_cache',
  urlsToCache = [
    './',
    './assets/css/animate.css',
    './assets/css/bootsnav.css',
    './assets/css/bootstrap.min.css',
    './assets/css/flaticon.css',
    './assets/css/font-awesome.min.css',
    './assets/css/owl.carousel.min.css',
    './assets/css/owl.theme.default.min.css',
    './assets/css/responsive.css',
    './assets/css/style.css',
    './assets/download/browney.txt',
    './assets/fonts/Flaticon.eot',
    './assets/fonts/Flaticon.svg',
    './assets/fonts/Flaticon.ttf',
    './assets/fonts/Flaticon.woff',
    './assets/fonts/fontawesome-webfont.eot',
    './assets/fonts/fontawesome-webfont.svg',
    './assets/fonts/fontawesome-webfont.ttf',
    './assets/fonts/fontawesome-webfont.woff',
    './assets/fonts/fontawesome-webfont.woff2',
    './assets/fonts/FontAwesome.otf',
    './assets/fonts/glyphicons-halflings-regular.eot',
    './assets/fonts/glyphicons-halflings-regular.svg',
    './assets/fonts/glyphicons-halflings-regular.ttf',
    './assets/fonts/glyphicons-halflings-regular.woff',
    './assets/fonts/glyphicons-halflings-regular.woff2',
    './assets/fonts/Linearicons-Free.eot',
    './assets/fonts/Linearicons-Free.svg',
    './assets/fonts/Linearicons-Free.ttf',
    './assets/fonts/Linearicons-Free.woff',
    './assets/fonts/Linearicons-Free.woff2',
    './assets/images/about/old.jpg',
    './assets/images/about/profile_image.jpg',
    './assets/images/about/welcome-banner.jpg',
    './assets/images/clients/c1.png',
    './assets/images/clients/c2.png',
    './assets/images/clients/c3.png',
    './assets/images/clients/c4.png',
    './assets/images/clients/c5.png',
    './assets/images/clients/c6.png',
    './assets/images/clients/c7.png',
    './assets/images/portfolio/p1.jpg',
    './assets/images/portfolio/p2.jpg',
    './assets/images/portfolio/p3.jpg',
    './assets/images/portfolio/p4.jpg',
    './assets/images/portfolio/p5.jpg',
    './assets/images/android-icon-36x36.png',
    './assets/images/android-icon-48x48.png',
    './assets/images/apple-icon-57x57.png',
    './assets/images/apple-icon-60x60.png',
    './assets/images/apple-icon-72x72.png',
    './assets/images/apple-icon-76x76.png',
    './assets/images/apple-icon-114x114.png',
    './assets/images/apple-icon-120x120.png',
    './assets/images/apple-icon-144x144.png',
    './assets/images/apple-icon-152x152.png',
    './assets/images/apple-icon-180x180.png',
    './assets/images/apple-icon.png',
    './assets/js/bootsnav.js',
    './assets/js/bootstrap.min.js',
    './assets/js/custom.js',
    './assets/js/jquery.appear.js',
    './assets/js/jquery.js',
    './assets/js/jquery.sticky.js',
    './assets/js/owl.carousel.min.js',
    './assets/js/progressbar.js',
    './assets/logo/favicon.png',
    './assets/logo/logo.png'
  ]

  self.addEventListener('install',e=>
    e.waitUntil
    (
        caches.open(Cache_Name)
        .then(cache=>{
            return cache.addAll(urlsToCache)
            .then(() => {
                self.skipWaiting();
            })

            .catch(err =>
                {
                    console.log('No se registro el cache',err);
                })
        })
    )
);

self.addEventListener('activate', e=>{
    const cacheWitelist=[Cache_Name];
    e.waitUntil(
        caches.keys()
        .then(CacheName =>
            {
                return Promise.all(
                    CacheName.map(CacheName =>
                        {
                            if(cacheWhitelist.indezof(cacheName)=== -1)
                            {
                                return caches.delete(cacheName);
                            }
                        })
                );
            })
            .then(()=>{self.clients.Claim();})
    ); 
});

self.addEventListener('fetch', e=>{
    e.respondWith(
        caches.match(e.request)
        .then(res=>{
            if(res)
            {
                return res;
            }
            return fetch(e.request);
        })
    );
});