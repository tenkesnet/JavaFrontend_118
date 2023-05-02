import React from 'react'


function Todo(props) {
    let pelda = "kljlkjjlk"
    console.log("Az Todo megjelent!")
    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className='action'>
                <button className="btn" onClick={() => { console.log("Click!") }}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Todo