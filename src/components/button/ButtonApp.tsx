import React, { useState } from 'react'
import styled from 'styled-components'
import { message } from 'antd'


interface Props {
    color: any
}

const ButtonStyled = styled.button<Props>`
    background-color: ${props => props.color ? '#ebebeb' : '#000000'};
    border: 1px solid #ebebeb;
    padding: 5px 20px;
    border-radius: 25px;
    font-weigh: bold;
    font-size: 1.0rem;
    color: ${props => props.color ? '#000000' : '#ffffff'}
`

const ButtonApp = () => {

    const [ color, setColor ] = useState(false);

    const handleButton = () => {
        message.success("Ha dado click en un boton");
        setColor(!color);
    }

    return (
        <ButtonStyled  
        color={color}
        onClick={ () => handleButton() }>
            Enviar
        </ButtonStyled>
    )
}

export default ButtonApp
