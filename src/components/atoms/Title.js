import React from 'react'
import styled from 'styled-components'

const Text = styled.h2`
    font: bold 36px/51px Poppins;
    letter-spacing: 0.36px;
    color: #F3AA00;
`

const Title = ({ text }) => <Text>{text}</Text>

export default Title