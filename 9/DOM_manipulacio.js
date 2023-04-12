const container = document.getElementById("container")
const emailInput = document.getElementById("email")

const body = document.getElementsByTagName("body")

const labels = document.getElementsByTagName("label")
const formGroups = document.getElementsByClassName("form-group")
const submitButton = document.querySelector("input[type='submit']")


emailInput.focus()
console.log(submitButton)

submitButton.setAttribute("data", "name:Ede")

submitButton.addEventListener("mouseenter", enterMouse)
submitButton.addEventListener("mouseleave", (event) => {
    event.target.classList.add("btn-success")
    event.target.classList.remove("btn-danger")
})
submitButton.addEventListener("click", (event) => {
    event.preventDefault()

})

emailInput.addEventListener("keypress", (evt) => {
    if (evt.key == "Enter") {
        if (evt.target.value.includes("@")) {
            document.querySelector("#password").focus()
        } else {
            const errDiv = document.querySelector("#error")
            errDiv.innerText = "Hibás emailcím"
            setTimeout(function () {
                errDiv.innerText = ""
            }, 5000)
        }

        //evt.target.style.width = "100px"
    }
})



document.querySelector("#password").addEventListener("keypress", (evt) => {
    if (evt.key == "Enter") {
        const newEl = document.createElement("h3")
        newEl.innerText = emailInput.value
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        newEl.style.background = '#' + randomColor
        document.querySelector("#userlist").appendChild(newEl)
    }
})




function enterMouse(event) {
    event.target.classList.add("btn-danger")
    event.target.classList.remove("btn-success")
    //console.log(event)
}
// console.log(container)
// console.log(emailInput)
// console.log(labels)
// console.log(formGroups[0])
// console.log(body)

container.style.background = "lightblue"
//container.className = "container bg-primary"
//container.classList.add("bg-danger")
//container.classList.remove("container")

//labels[0].innerText = "<h1>Email cím</h1>"
