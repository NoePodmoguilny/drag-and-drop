const parrafos = document.querySelectorAll(".parrafo");

const secciones = document.querySelectorAll(".divContainer");

const tacho=document.querySelector(".papelera");


parrafos.forEach(parr => { 
    parr.addEventListener("dragstart", event =>{
        // console.log("Arrastrando el parrafo: " + parr.innerText); //me refiero a cada elemento individual "parr"
        parr.classList.add("dragging");
        event.dataTransfer.setData("id", parr.id);
        //imagen "fantasma" para cambiar el estilo por defecto
        const elem_ghost = document.querySelector(".img-ghost");
        //setDragImagen(elemento, x , y)
        event.dataTransfer.setDragImage(elem_ghost,0,0);
    })

    parr.addEventListener("dragend", () => {
        parr.classList.remove("dragging");
    })  
});

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault(); //para que el drop se pueda ejecutar por consola, prevenimos el comp por defecto del dragover.
        //para cambiar imagen por defecto que aparece debajo del cursor "dropEffect="nombre-efecto""
        event.dataTransfer.dropEffect="move";
    })

    seccion.addEventListener("drop", event => {
        const id_Parrafo = event.dataTransfer.getData("id");
        const parrafo = document.getElementById(id_Parrafo);
        //para cambiar de posición los elementos(parrafos)
        seccion.appendChild(parrafo);
    })
});

//Evento para eliminar un párrafo en la papelera:

tacho.addEventListener("dragover", event =>{
    event.preventDefault();
    
})

tacho.addEventListener("drop", event => {
    const id_Parrafo = event.dataTransfer.getData("id");
    const parrafo = document.getElementById(id_Parrafo);
    parrafo.remove(tacho);
});
