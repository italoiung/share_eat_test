import React from 'react'
import Image from '../../assets/images/logo.png'
import styled from 'styled-components'

const Centered = styled.div`
    margin: auto;
    margin-bottom: 27px;
    width: 98px;
`
const Hidden = styled.h1`
    display: none;
`

const Logo = () =>
    <Centered>
        <Hidden>Share Eat</Hidden>
        <img src={Image} alt="Logo" />
    </Centered>

export default Logo