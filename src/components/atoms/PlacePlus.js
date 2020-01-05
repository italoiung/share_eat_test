import React from 'react'
import Image from '../../assets/images/plus.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Rounded = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #FFFFFF98;
    width: 36px;
    height: 36px;
    border-radius: 50%;
`

const PlacePlus = ({ name }) =>
    <Link to={`/${name.toLowerCase().replace(/[^A-Z0-9]+/ig, "_")}/adicionar_prato`}>
        <Rounded>
            <img src={Image} alt="Adicionar prato" title="Adicionar prato" />
        </Rounded>
    </Link>

export default PlacePlus