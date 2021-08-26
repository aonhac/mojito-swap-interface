import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Text, Button } from '../../uikit'
import Column from 'components/Column'
import { AutoRow, RowFlat } from 'components/Row'
import ClaimAirdrop from 'components/ClaimAirdrop/Claim'

const Imgs = {
  AirdropLogo: require('../../assets/images/home/airdrop.png').default,
  AirdropTitle: require('../../assets/images/home/airdrop-title.png').default,
}

const AirdropWarp = styled.div`
  width: 100%;
  height: 496px;
  background: linear-gradient(181.47deg, #ffffff 24.96%, #ffe5c6 97.98%);
  background-position: center center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const AirdropTitle = styled.img`
  width: 478px;
  margin-bottom: 25px;
`

const ImgWarp = styled(RowFlat)`
  flex: 1 1 0%;
`

const AirdropLogo = styled.img`
  width: 417px;
  margin-right: 106px;
`

const AirdropBtn = styled(Button)`
  width: 240px;
  height: 64px;
  background: linear-gradient(90deg, #ffc961 0%, #fc9c47 100%);
  box-shadow: 0px 18px 36px rgba(253, 167, 78, 0.4);
  border-radius: 32px;
  margin-top: 23px;
  font-size: 24px;
  font-weight: 900;
`

const Airdrop: FunctionComponent = (props) => {
  return (
    <AirdropWarp>
      <AutoRow
        justify="center"
        style={{ alignItems: 'flex-end', flexWrap: 'nowrap', maxWidth: '1200px', padding: '0 40px' }}
      >
        <ImgWarp>
          <AirdropLogo src={Imgs.AirdropLogo} />
        </ImgWarp>
        <Column style={{ flex: '1 1 0%' }}>
          <AirdropTitle src={Imgs.AirdropTitle} />
          <RowFlat>
            {/* <Text fontSize="24px" mr="19px">Your MJT Airdrop</Text>
            <Text fontSize="50px" fontWeight="800" color="#FF7B1B" lineHeight="1">300.00 MJT</Text> */}
            <ClaimAirdrop />
          </RowFlat>
        </Column>
      </AutoRow>
    </AirdropWarp>
  )
}

export default Airdrop
