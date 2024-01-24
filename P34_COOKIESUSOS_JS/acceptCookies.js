const newFechaUTC = dias=> {
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + dias*1000*60*60*24);
    return fecha.toUTCString();
}

const crearCookie = (name, dias)=> {
    expires = newFechaUTC(dias);
    document.cookie = `${name};expires=${expires}`;
}

const obtenerCookie = cookieName=> {
    let cookies = document.cookie;
    console.log(cookies);
    cookies = cookies.split(";");   //Separa cada que encuentra ;
    for (i = 0; cookies.length > i; i++) {
        let cookie = cookies[i].trim(); //Remueve espacios
        if(cookie.startsWith(cookieName)) { //Si empieza con la palabra indicada actúa
            return cookie.split("=")[1];
        }
    }
    return "No hay cookies con ese nombre";
}

if (obtenerCookie("acceptedCookies") !== "si") {
    setTimeout(()=> {
        document.querySelector(".bg-modal").style.zIndex = "10";
        document.querySelector(".bg-modal").style.opacity = "1";
        document.getElementById("accept").addEventListener("click", ()=> {
            crearCookie("acceptedCookies=si", 30);
            document.querySelector(".bg-modal").style.opacity = "0";
            setTimeout(()=> {
                document.querySelector(".bg-modal").style.zindex = "-1";
            }, 1000);
        });
        document.getElementById("deny").addEventListener("click", ()=> {
            crearCookie("acceptedCookies=no", 30);
            document.querySelector(".bg-modal").style.opacity = "0";
            setTimeout(()=> {
                document.querySelector(".bg-modal").style.zindex = "-1";
            }, 1000);
        });
    }, 200);
}