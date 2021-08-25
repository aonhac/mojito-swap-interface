import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Text } from '../../uikit'

const BannerBg = require('../../assets/images/home/background.png').default

const BannerWarp = styled.div`
  width: 100%;
  height: 496px;
  background: url(${BannerBg}) center center no-repeat, #94b7b1;
  background-size: cover;
`

const Banner: FunctionComponent = (props) => {
  return (
    <BannerWarp>
        <Text>123</Text>
    </BannerWarp>
  )
}

export default Banner
