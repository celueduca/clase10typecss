import React from 'react'
import ButtonApp from '../button/ButtonApp'
import FormApp from '../form/FormApp'

const Content = () => {
    return (
        <div className="content">
            <div className="panel panel1">
                <h1>Hola Mundo 1</h1>
                <FormApp />
            </div>
            <div className="panel panel2">
                <h1>Hola Mundo 2</h1>
                <ButtonApp />
            </div>
            <div className="panel panel3">
                <h1>Hola Mundo 3</h1>
                <ButtonApp />
            </div>
            <div className="panel panel4">
                <h1>Hola Mundo 4</h1>
                <ButtonApp />
            </div>
            <div className="panel panel5">
                <h1>Hola Mundo 5</h1>
                <ButtonApp />
            </div>
        </div>
    )
}

export default Content
