import React, { Component } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

const BackButton = styled.svg`
    position: absolute
    top: -6px;
    left: -6px;
    width: 32px;
    height: 32px;
    -ms-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
    fill: #FFFFFF;
    cursor: pointer;
`

class Back extends Component {
    render() {
        return (
            <BackButton xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onClick={this.props.history.goBack}>
                <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.41z" />
            </BackButton>
        )
    }
}

export default withRouter(Back)