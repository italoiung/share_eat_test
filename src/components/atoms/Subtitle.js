import React from 'react'
import styled from 'styled-components'

const Text = styled.p`
    font: 300 16px/23px Nunito Sans;
    letter-spacing: 0;
    margin-top: 6px;
    color: #FFFFFF;
    opacity: 0.75;
`

const Subtitle = ({ text }) => <Text>{text}</Text>

export default Subtitle