import React from 'react'
import styled from 'styled-components'

import MealCard from '../atoms/MealCard'
import MealPlus from '../atoms/MealPlus'
import Fundo from '../atoms/Fundo'
import Logo from '../atoms/Logo'
import Back from '../atoms/Back'
import Title from '../atoms/Title'
import Subtitle from '../atoms/Subtitle'

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
const Wrapper = styled.div`
    position: relative;
`

const Place = ({ place }) => {
    const meals = place.menuItems.map((meal, i) => <MealCard key={"Meal" + i} name={meal.name} price={meal.price} description={meal.description} />)

    const subtitle = place.menuItems.length > 1 ? `${place.menuItems.length} pratos` : "1 prato"

    return (
        <Container>
            <Fundo />
            <Wrapper>
                <Back />
                <Logo />
                <Title text={place.name} />
                <Subtitle text={subtitle} />
                {meals}
                <MealPlus name={place.name} />
            </Wrapper>
        </Container>
    )
}

export default Place