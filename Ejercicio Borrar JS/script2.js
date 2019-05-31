let crear=document.querySelector("#crear")
let body=document.querySelector("body")

crear.addEventListener("click",crearParrafo)

function crearParrafo() {

    let div=document.createElement("div")
    let p=document.createElement("p")
    let button=document.createElement("button")

    p.innerText="lorem ipsum"
    button.innerText="Borrar"
    div.appendChild(p)
    div.appendChild(button)
    body.appendChild(div)

    button.addEventListener("click",borrarParrafo)

    function borrarParrafo(){

        body.removeChild(div)
        
    }
}