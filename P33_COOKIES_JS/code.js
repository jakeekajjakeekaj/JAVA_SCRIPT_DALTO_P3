// Cookies
// Existen múltiples tipos de cookies, que básicamente recabana información del usuario, un ejemplo de estas cookies es por ejemplo:
/* 
EXCEPTUADAS:
    - Cookies de entrada de usuario
    - Cookies de identificación o autenticación del usuario (únicamente de sesión)
    - Cookies de seguridad del usuario
    - Cookies de reproductor multimedia
    - Cookies de sesión para equilibrar tu carga
    - Cookies de personalización de la interfaz del usuario
    - Cookies de complemento (plug-in) para intercambiar contenidos sociales
NO EXCEPTUADAS:
    - El resto de cookies
*/

// document.cookie = "user=jakeekajjakeekaj";  // De esta manera si nos dirigimos a las herramientas de desarrollador, en la sección de application, y nos dirigimos a cookies, podremos observar nuestra cookie creada, que en este caso sería un user con el nombre de 'jakeekajjakeekaj'

const newFechaUTC = dias=> {
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + dias*1000*60*60*24);
    return fecha.toUTCString();
}   //De esta manera se hace la conversión para indicar el tiempo en que la cookie expirará, es decir que si se indica un número de 2, pues se realizará la suma de lo que corresponde para que sea el día de hoy mas 2 y que así expire en ese tiempo

const crearCookie = (name, dias)=> {
    expires = newFechaUTC(dias);
     document.cookie =`${name};expires=${expires}`; // Se realiza el almacenado de las cookies
};

// crearCookies("usuario=jakeekajjakeekaj", "2");   // Este es el ejemplo de llenado, de esta manera dentro de la cookie, en el nombre aparecerá usuario=jakeekajjakekaj y también indica que la expiración será dentro de 2 días

const obtenerCookie = cookieName=> {
    let cookies = document.cookie;
    // console.log(cookies);
    cookies = cookies?.split(';');
    for (i = 0; cookies.length > i; i++) {
        let cookie = cookies[i].trim(); // .trim() funciona para remover los espacios en blanco, ya que a veces en las cookies se les agrega un espacio en blanco
        if (cookie.startsWith(cookieName)) {
            return  cookie.split("=")[1];
        }
    }
    return "no hay cookies con ese nombre";
}

// Para modificar una cookie la sintaxis sería:
// document.cookie = "nombre=jakeekaj2";

// Para borrar una cookie, la sintaxis sería:
// document.cookie = "nombre=0;max-age=0";
// De aquí lo que importa es el max-age, ya que al indicar 0 se provoca que la cookie se borre en 0 segundos, osea ya

// *** PARA USAR COOKIES ES IMPORTANTE INVESTIGARSE sOBRE EL AVISO DE COOKIES, LA RGPD Y LA EPRIVACY DE LAS COOKIES ***