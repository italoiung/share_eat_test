import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Image from '../../assets/images/dark_plus.png'

const Rounded = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 30px;
    right: 24px;
    @media (min-width: 768px) {
        right: 120px;
    }
    @media (min-width: 992px) {
        right: 240px;
    }
    @media (min-width: 1200px) {
        right: 360px;
    }
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: #F3AA00;
`

const MealPlus = ({ name }) =>
    <Link to={`/${name.toLowerCase().replace(/[^A-Z0-9]+/ig, "_")}/adicionar_prato`}>
        <Rounded>
            <img src={Image} alt="Adicionar prato" title="Adicionar prato" />
        </Rounded>
    </Link>

export default MealPlus