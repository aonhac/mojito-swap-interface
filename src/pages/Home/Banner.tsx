import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Text } from '../../uikit'
import Column from 'components/Column';
import { AutoRow, RowFlat } from 'components/Row';

const Imgs = {
  BannerBg: require('../../assets/images/home/background.png').default,
  BannerLogo: require('../../assets/images/home/logo.png').default,
  Cow: require('../../assets/images/cow.png').default,
}

const BannerWarp = styled(RowFlat)`
  width: 100%;
  height: 496px;
  background: url(${Imgs.BannerBg}) center center no-repeat, #94b7b1;
  background-size: cover;
`

const BannerContent = styled(AutoRow)`
  max-width: 1200px;
  padding: 0 40px;
  justify-content: center;
  margin: 0 auto;
`

const BannerLogo = styled.img`
  width: 243px;
  height: 81px;
  margin-bottom: 50px;
`

const ImgWarp = styled(RowFlat)`
  flex: 1 1 0%;
`

const BannerCow = styled.img`
  margin-left: 5px;
  width: 100%;
`

const Banner: FunctionComponent = (props) => {
  return (
    <BannerWarp>
      <BannerContent>
        <Column style={{flex: '1 1 0%'}}>
          <BannerLogo src={Imgs.BannerLogo}/>
          <Text fontSize="24px">MOJITO.finance</Text>
          <Text fontSize="24px">Future finance leader,The future of trading.</Text>
        </Column>
        <ImgWarp>
          <BannerCow src={Imgs.Cow}/>
        </ImgWarp>
      </BannerContent>
    </BannerWarp>
  )
}

export default Banner
