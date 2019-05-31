/*Ejercicio de horacio
1)en un html hacer una etiqueta button que diga crear parrafo
2)agregar ese nodo en JS
3)registrar un callback a su click
4) el callback del bboton tienen que poder crear la siguiente estructura
<div>
    <p>lorem ipsum</p>
    <button>borrar</button>
</div>
5)el boton tiene que decir borrar y su callback al click debe poder borrar el p de lorem ipsum
con Nodo.RemoveChild(Nodo)
*/

let crear=document.querySelector("button")

function hacerClick(){
    console.log("Creaste Parrafo")
}


let body=document.querySelector("body")
let div=document.querySelector("div")
let p=document.querySelector("p")
body.appendChild(div)


function crearParrafo(){

    function hacerClick(){
        console.log("Hiciste click")
    }

    body.appendChild(div)
}   

crear.addEventListener("click",crearParrafo)

function borrarParrafo(){

    function hacerClick(){
        console.log("Hiciste click")
    }
    
    body.removeChild(div)

}

borrar.addEventListener("click",borrarParrafo)
