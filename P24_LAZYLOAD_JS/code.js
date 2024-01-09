// Ejemplo Lazy Load, que básicamente es como lo que utiliza facebook, para ir cargando las publicaciones mientras se va scrolleando

"use strict";

const publicaciones = document.querySelector(".publicaciones");
let contador = 0;

const createPublicationCode = (name, content)=> {
    const container = document.createElement("DIV");
    const nombre = document.createElement("H3");
    const contenido = document.createElement("P");
    const comentarios = document.createElement("DIV");
    const comentario = document.createElement("INPUT");
    const btnComentario = document.createElement("INPUT");
    
    // console.log("1");

    container.classList.add("publicacion");
    comentarios.classList.add("comentarios");
    comentario.classList.add("comentario");
    btnComentario.classList.add("enviar");

    // console.log("2");

    comentario.setAttribute("placeholder", "Introduce un comentario");
    btnComentario.setAttribute("type", "submit");
    nombre.textContent = name;
    contenido.textContent = content;

    // console.log("3");

    comentarios.appendChild(comentario);
    comentarios.appendChild(btnComentario);

    // console.log("4");

    container.appendChild(nombre);
    container.appendChild(contenido);
    container.appendChild(comentarios);
    
    return container;

    // console.log("5")
}

const cargarMasPublis = entrada=> {
    if(entrada[0].isIntersecting) cargarPublicaciones(4);
}

const observer = new IntersectionObserver(cargarMasPublis);

let content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aliquam officia explicabo, porro perferendis laboriosam eaque enim voluptatem cupiditate delectus odio odit quidem hic, dignissimos velit fugiat atque maiores ut.";

// publicaciones.appendChild(createPublicationCode("jakeekajjakeekaj", content));   //De estamanera ya se imprimiría lo que es una publicación, sin embargo nosotros vamos a hacerlo asíncrono

const cargarPublicaciones = async num=> {
    const request = await fetch("content1.txt");
    const content = await request.json();
    const arr = content.content;
    // console.log(arr);
    const documentFragment = document.createDocumentFragment();
    for(let i = 0; i < num; i++) {
        if (arr[contador] != undefined) {
            const newPublicacion = createPublicationCode(arr[contador].nombre, arr[contador].contenido);
            documentFragment.appendChild(newPublicacion);
            contador++;
            if(i == num-1) observer.observe(newPublicacion);
        } else {
            if (publicaciones.lastElementChild.id !== "nomore") {
                let noMore = document.createElement("H3");
                noMore.textContent = "No hay más publicaciones";
                noMore.id = "nomore";
                documentFragment.appendChild(noMore);
                publicaciones.appendChild(documentFragment);
                break;
            }
        }
    }
    publicaciones.appendChild(documentFragment)
}

cargarPublicaciones(2);