let version = "version 3";

self.addEventListener("install", e=> {
    console.log("Instalando service worker");
    caches.open(version).then(cache=> {
        cache.add("index.html").then(res=> {
            console.log("Información cacheada");
        }).catch(e=> {
            console.log(e);
        })
    });
}); //De esta manera se agrega al cachpe la versión querida

self.addEventListener("activate", ()=> {
    caches.keys().then(key=> {
        return Promise.all(
            key.map(cache=> {
                if (cache!==version) {
                    console.log("caché antiguo, eliminado");
                    return caches.delete(cache);
                }
            })
        )
    })
}); // De esta manera se verifica si el service worker se encuentra activado, aparte de que con el contenido se indica que el contenido del mismo se elimina si la versión es diferente al caché

self.addEventListener("fetch", e=> {
    e.respondWith(async function ()=> {
        const respuestaEnCache = await caches.match(e.request);
        if(respuestaEnCache) return respuestaEnCache;
        return e.request;
    });
}); // De esta manera se trabaja con peticiones de por medio