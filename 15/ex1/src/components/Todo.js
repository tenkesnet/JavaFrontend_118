import React, { useState } from 'react'
import Modal from './Modal'


function Todo(props) {
    const [showModal, setShowModal] = useState(false)

    console.log("Az Todo megjelent!")

    const clickHandler = () => { setShowModal(false) }

    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className='action'>
                <button className="btn" onClick={() => { setShowModal(true) }}>
                    Delete
                </button>
            </div>
            {showModal && <Modal text="Biztosan bezárod?" onClose={clickHandler} />}

        </div>
    )
}

export default Todo