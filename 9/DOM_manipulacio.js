const container = document.getElementById("container")
const emailInput = document.getElementById("email")

const body = document.getElementsByTagName("body")

const labels = document.getElementsByTagName("label")
const formGroups = document.getElementsByClassName("form-group")

console.log(container)
console.log(emailInput)
console.log(labels)
console.log(formGroups[0])
console.log(body)

container.style.background = "lightblue"
//container.className = "container bg-primary"
container.classList.add("bg-danger")
container.classList.remove("container")

labels[0].innerText = "<h1>Email cím</h1>"