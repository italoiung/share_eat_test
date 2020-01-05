import React from 'react'
import styled from 'styled-components'
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom"
import { AnimatedSwitch } from 'react-router-transition';
import { useStore } from '../../store'

import Place from '../molecules/Place'
import Fundo from '../atoms/Fundo'
import Logo from '../atoms/Logo'
import Title from '../atoms/Title'
import Subtitle from '../atoms/Subtitle'
import PagePlace from '../organisms/Place'
import Form from '../organisms/Form'

const Container = styled.div`
    padding: 18px 24px 32px;
    background-color: #292929;
    min-height: 100vh;
    @media (min-width: 768px) {
        padding: 18px 120px 32px;
    }
    @media (min-width: 992px) {
        padding: 18px 240px 32px;
    }
    @media (min-width: 1200px) {
        padding: 18px 360px 32px;
    }
`

const Places = () => {
    const [{ places }] = useStore()
    const placesRoutes = []
    const formsRoutes = []

    places.map((place, i) => {
        placesRoutes.push(
            <Route exact key={i + "Place"} path={`/${place.name.toLowerCase().replace(/[^A-Z0-9]+/ig, "_")}`}>
                <PagePlace place={place} />
            </Route>
        )
        formsRoutes.push(
            <Route exact key={i + "Form"} path={`/${place.name.toLowerCase().replace(/[^A-Z0-9]+/ig, "_")}/adicionar_prato`}>
                <Form place={place} />
            </Route>
        )
        return 0
    })

    const mappedPlaces = places.map((place, i) => <Place key={i + "Place"} place={place} />)

    const subtitle = places.length > 1 ? `${places.length} lugares cadastrados` : "1 lugar cadastrado"

    return (
        <Router>
            <AnimatedSwitch
                atEnter={{ opacity: .25 }}
                atLeave={{ opacity: .5 }}
                atActive={{ opacity: 1 }}
                className="switch-wrapper"
            >
                {placesRoutes}
                {formsRoutes}
                <Route exact path="/">
                    <Container>
                        <Logo />
                        <Fundo />
                        <Title text="Lugares" />
                        <Subtitle text={subtitle} />
                        {mappedPlaces}
                    </Container>
                </Route>
            </AnimatedSwitch>
        </Router>
    )
}

export default Places