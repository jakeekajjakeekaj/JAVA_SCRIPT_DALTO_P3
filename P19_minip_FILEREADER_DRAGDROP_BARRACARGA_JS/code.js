//FILE READER + DRAG AND DROP

// ----------------- COMIENZAN EFECTOS DE ARRASTRE -------------
zona = document.querySelector(".zona-arrastre");
barra = document.querySelector(".barra-de-carga");

const changeStyle = (obj, colort, colorb)=> {
    obj.style.color = colort;
    obj.style.border = `4px dashed ${colorb}`;
}

zona.addEventListener("dragover", e=> {
    // console.log("drag over activado");
    e.preventDefault(); //Recuerda que esta sentencia es importante para que funcione el drop
    changeStyle(e.srcElement, "#222", "#333");
})

zona.addEventListener("dragleave", e=> {
    // e.preventDefault();
    changeStyle(e.srcElement, "#666", "#777");
})

zona.addEventListener("drop", e=> {
    // console.log("aqui llego 2");
    e.preventDefault();
    changeStyle(e.srcElement, "#666", "#777");
    cargarArchivo(e.dataTransfer.files[0]);
})

// ---------------- FINALIZAN EFECTOS DE ARRASTRE -------------

// ---------------- COMIENZA CARGA DE ARCHIVOS -----------

const cargarArchivo = ar=> {
    // console.log("aqui llego 1");
    const reader = new FileReader();
    // reader.readAsText(ar);   //AsText es para leer la información
    // reader.readAsDataURL(ar);   //AsDataURL es para las imagenes
    reader.readAsArrayBuffer(ar);   //Para los videos
    //---- BARRA INDICADORE DE PROGRESO UPLOAD ------

    reader.addEventListener("progress", e=> {
        // console.log(ar.size);   //Esto indica el tamaño total del archivo
        // console.log(e.loaded);  //Esto indica el tiempo que va pasando para subir el contenido
        let carga = Math.round(e.loaded / ar.size * 100);
        // console.log(carga);
        let cargaConversion = carga * 500 / 100;
        console.log(cargaConversion);
        // barra.textContent = `${carga}%`;
        zona.textContent = `${carga}%`;
        barra.style.width = `${cargaConversion}px`;
    })

    //---- FINALIZACION DE BARRA INDICADORE DE PROGRESO UPLOAD --------
    reader.addEventListener("load", e=> {
        // console.log("aqui llego 0");
        let video = new Blob([new Uint8Array(e.currentTarget.result)], {type: 'video/mp4'}); //Para crear un objeto de tipo Blob, se debe tener un array y options
        let url = URL.createObjectURL(video);   //Esto es para le video
        let img = document.createElement("VIDEO");  //Esto es para el video
        // let url = URL.createObjectURL(ar);   //Esto es para la imagen
        // let img = document.createElement("IMG");    //Esto es para la imagen
        img.setAttribute("src", url);
        img.style.width = "500px";
        // document.querySelector(".resultado").textContent = e.currentTarget.result;   //Esto funciona para cuando se agrega texto
        document.querySelector(".resultado").appendChild(img);
        img.play();  //Esto reproduce el video automáticamente
    })
}