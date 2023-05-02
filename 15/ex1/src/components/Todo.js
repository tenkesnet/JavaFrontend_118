import React from 'react'


function Todo(props) {
    let pelda = "kljlkjjlk"
    console.log("Az Todo megjelent!")
    return (
        <div className="card">
            <h2>{props.text}</h2>
            <h3>{pelda}</h3>
        </div>
    )
}

export default Todo