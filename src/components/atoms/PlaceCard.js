import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Box = styled(Link)`
    background-color: #333333;
    padding: 12px 17px 17px;
    box-shadow: 0px 4px 16px #00000029;
    border-radius: 8px;
    width: 100%;
    margin-right: 20px;
`
const Title = styled.h3`
    font: bold 16px/23px Poppins;
    letter-spacing: 0;
    color: #FFFFFF;
`
const Subtitle = styled.p`
    font: 300 16px/23px Nunito Sans;
    letter-spacing: 0;
    color: #FFFFFF;
    opacity: 0.75;
`

const PlaceCard = ({ name, meals }) =>
    <Box to={`/${name.toLowerCase().replace(/[^A-Z0-9]+/ig, "_")}`}>
        <Title>{name}</Title>
        <Subtitle>{meals === 1 ? `${meals} prato` : `${meals} pratos`}</Subtitle>
    </Box>

export default PlaceCard