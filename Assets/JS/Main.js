let oscuro = document.getElementById("oscuro");
let body = document.body;

oscuro.addEventListener("click", function(){
    let val = body.classList.toggle("dark")
    localStorage.setItem("oscuro", val)
})

let valor=localStorage.getItem("oscuro")

if (valor=="true") {
    body.classList.add("dark")
} else {
    body.classList.remove("dark")
}