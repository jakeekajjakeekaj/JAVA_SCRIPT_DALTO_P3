// Historial

// console.log(history);   //De esta manera obtenemos el objeto

// history.back(); //Sirve para retroceder en la página, es como darle en la fecha de atrás dela página

// history.forward();  //Sirve para adelantar la página, es como darle en la flecha de adeltante de la página

// history.go();    //Recarga la página
// Este último tiene parámetros, por ejemplo
// history.go(1);   //Recarga la página en el elemento de adelante
// history.go(-1);  //Recarga la página pero en el elemento de atrás
// history.go(0);   //Recarga la página en donde se encuentra actualmente

// console.log(location.href); //De esta manera se puede observar la ruta actual, esto es para poder visualizar el cambio ya que a continuación se trabajará con pushState

// history.pushState({nombre: "pedro"}, "", "?esto es nuevo"); //Los parámetros son: "el nombre del objeto", el título (se suele dejar en blanco ya que no suele funcionar), "lo que se anexará en la url del historial" (ES IMPORTANTE MENCIONAR que se tiene que escribir con una interrogación en el principio)

// history.state;  //Esto arroja el estado que nosotros agregamos al utilizar el pushState

addEventListener("popstate", e=> {  //Recordemos que si no se agrega algo al inicio, significa que va a window, ese decir en este addEventListener, está apuntando a la window
    console.log(e.state);   // Se imprime al estado, en este caso por ejemplo sería nombre: 'pedro'
})

// history.replaceState({nombre: "pedro"}, "", "?nuevo");  //A diferencia el pushState, esta no deja rastro en el historial, si hace todos los cambios pero no deja nada, de hecho el popstate no tiene efecto sobre este