import React from 'react'
import Image from '../../assets/images/fundo.png'
import styled from 'styled-components'

const Bg = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: top;
`

const Fundo = () => <Bg src={Image} alt="Fundo" />

export default Fundo