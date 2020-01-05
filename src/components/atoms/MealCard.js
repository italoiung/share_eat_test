import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
    background-color: #464646;
    background-origin: border-box;
    box-shadow: 0px 4px 16px #00000029;
    padding: 12px 20px 21px 13px;
    border-radius: 8px;
    border-left: 6px solid #F3AA00;
    margin-top: 16px;
`
const Title = styled.h3`
    font: bold 16px/23px Poppins;
    letter-spacing: 0;
    color: #FFFFFF;
    display: flex;
    justify-content: space-between;
`
const Subtitle = styled.p`
    margin-top: 9px;
    font: 300 16px/20px Nunito Sans;
    padding-right: 21px;
    letter-spacing: 0;
    color: #FFFFFF;
    opacity: 0.75;
`

const MealCard = ({ name, price, description }) =>
    <Box>
        <Title><span>{name}</span><span>R$ {price.toFixed(2).toString().replace('.',',')}</span></Title>
        <Subtitle>{description}</Subtitle>
    </Box>

export default MealCard