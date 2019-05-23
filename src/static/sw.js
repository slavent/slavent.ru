importScripts( "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js" )

if ( workbox ) {
    console.log( `Yay! Workbox is loaded 🎉` )
} else {
    console.log( `Boo! Workbox didn't load 😬` )
}

workbox.setConfig( { debug: true } )

workbox.precaching.precacheAndRoute( ["/", "/index.html"] )

workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|svg|gif)$/,
    new workbox.strategies.CacheFirst( {
        cacheName: "image-cache",
        plugins: [
            new workbox.expiration.Plugin( {
                maxEntries: 20,
                // Cache for a maximum of a week.
                maxAgeSeconds: 7 * 24 * 60 * 60
            } )
        ]
    } )
)
