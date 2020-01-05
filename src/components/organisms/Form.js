import React, { useState } from 'react'
import CurrencyInput from 'react-currency-input'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { useStore } from '../../store'
import { addMeal } from '../../actions'

import Title from '../atoms/Title'
import Logo from '../atoms/Logo'
import Back from '../atoms/Back'

const Container = styled.div`
    padding: 18px 24px 32px;
    background-color: #464646;
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
    min-height: calc(100vh - 50px)
`
const Input = styled.input`
    background-color: #FFFFFF;
    padding: 8px 17px;
    color: #121212;
    width: 100%;
    border-radius: 4px;
    font: normal 16px/22px Nunito Sans;
    margin-bottom: 16px;
    border: 0;
`
const PriceInput = styled(CurrencyInput)`
    background-color: #FFFFFF;
    padding: 8px 17px;
    color: #121212;
    width: 111px;
    border-radius: 4px;
    font: normal 16px/22px Nunito Sans;
    margin-bottom: 16px;
    border: 0;
`
const Textarea = styled.textarea`
    background-color: #FFFFFF;
    padding: 8px 17px;
    color: #121212;
    width: 100%;
    border-radius: 4px;
    font: normal 16px/22px Nunito Sans;
    height: 136px;
`
const Label = styled.label`
    display: block;
    font: bold 14px/19px Nunito Sans;
    letter-spacing: 0;
    color: #FFFFFFDE;
    margin-bottom: 4px;
`
const Warning = styled.p`
    font: normal 14px/19px Nunito Sans;
    letter-spacing: 0;
    color: #FFFFFFDE;
    margin-top: 5px;
`
const Submit = styled.button`
    position: absolute;
    bottom: 0;
    text-align: center;
    font: bold 16px/25px Poppins;
    letter-spacing: 0;
    color: #121212;
    background-color: #F3AA00;
    width: 100%;
    padding: 16px 0;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    @media (max-height: 512px) {
        position: relative;
        margin-top: 16px;
    }
`
const StyledForm = styled.form`
    margin-top: 22px;
`

const Form = ({ place, history }) => {

    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [price, setPrice] = useState(0)
    const [maskedPrice, setMaskedPrice] = useState(0)

    const handleNameChange = event => {
        setName(event.target.value)
    }
    const handleDescriptionChange = event => {
        setDescription(event.target.value)
    }
    const handlePriceChange = (maskedvalue, floatvalue) => {
        setPrice(floatvalue)
        setMaskedPrice(maskedvalue)
    }

    const [state, dispatch] = useStore()
    const handleSubmit = event => {
        event.preventDefault()

        const obj = { name: name, description: description, price: price }
        place.menuItems.push(obj)

        setName('')
        setDescription('')
        setPrice(0)
        setMaskedPrice(0)

        dispatch(addMeal(place))
        history.goBack()
    }
    
    return (
        <Container>
            <Wrapper>
                <Back />
                <Logo />
                <Title text={place.name} />
                <StyledForm onSubmit={handleSubmit}>
                    <Label htmlFor="Prato">Nome do prato</Label>
                    <Input id="Prato" placeholder="Prato" name="name" required
                        value={name} onChange={handleNameChange} />
                    <Label htmlFor="Valor">Valor</Label>
                    <PriceInput id="Valor" decimalSeparator="," thousandSeparator="." prefix="R$ " required
                        value={maskedPrice} onChange={handlePriceChange} />
                    <Label htmlFor="Descricao">Descrição do prato</Label>
                    <Textarea id="Descricao" placeholder="Insira uma descrição" name="description" maxLength="200" required
                        value={description} onChange={handleDescriptionChange} />
                    <Warning>*A descrição deve conter até 200 caracteres.</Warning>
                    <Submit>Salvar</Submit>
                </StyledForm>
            </Wrapper>
        </Container>
    )
}

export default withRouter(Form)
