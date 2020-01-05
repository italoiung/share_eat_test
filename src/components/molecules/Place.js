import React from 'react'
import styled from 'styled-components'

import PlaceCard from '../atoms/PlaceCard'
import PlacePlus from '../atoms/PlacePlus'

const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
`

const Place = ({ place }) =>
    <Box>
        <PlaceCard name={place.name} meals={place.menuItems.length} />
        <PlacePlus name={place.name} />
    </Box>

export default Place