import React, { FunctionComponent } from 'react'
import styled, { useTheme } from 'styled-components'
import { Text } from '../../uikit'
import { AutoRow, RowBetween, RowFlat } from 'components/Row';
import { DarkGreyTitle, GreyTitle, PrimaryTitleMD, GradientBtn } from './styles';
import Column from 'components/Column';

const ImgArrow = require('../../assets/images/home/upArrow.png').default

const Panel = styled.div`
  background: #FFFEFE;
  box-shadow: 0px 24px 48px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  padding: 32px;
  margin-top: 24px;
`

const LeftPanel = styled(Panel)`
  width: 702px;
  height: 269px;
`

const RightPanel = styled(Panel)`
  width: 390px;
  height: 269px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const UpArrow = styled.img`
  width: 28px;
  margin-left: 12px;
`

const Column33 = styled(Column)`
  width: 33.3%;
`

const Trade: FunctionComponent = (props) => {
  const theme = useTheme()
  const PanelData = (title: string, total: number | string, convert: number | string) => {
    return( 
      <Column33>
        <DarkGreyTitle mb="4px">{title}</DarkGreyTitle>
        <PrimaryTitleMD fontSize="36px" fontWeight="700" lineHeight="1.2">{total}</PrimaryTitleMD>
        <GreyTitle mt="6px">≈ $ {convert}</GreyTitle>
      </Column33>
    )
  }
  return (
    <>
      <Text fontWeight="700" fontSize="32px" color={theme.colors.text}>Get MJT</Text>
      <RowBetween style={{flexWrap: 'wrap'}}>
        <LeftPanel>
          <RowBetween style={{alignItems: 'flex-start'}}>
            <Column>
              <DarkGreyTitle mb="4px">Invested MJT</DarkGreyTitle>
              <Text fontSize="36px" fontWeight="700" lineHeight="1.2">1,132,231.17</Text>
              <GreyTitle mt="8px">≈ $ 123,234.89</GreyTitle>
            </Column>
            <Column33>
              <DarkGreyTitle mb="8px">24h Price Change</DarkGreyTitle>
              <AutoRow>
                <Text fontSize="32px" fontWeight="700" lineHeight="1.2" color={theme.colors.primary}>1,132,231.17</Text>
                <UpArrow src={ImgArrow}/>
              </AutoRow>
            </Column33>
          </RowBetween>
          <RowBetween style={{marginTop: '30px'}}>
            {PanelData('Total MJT', '12,321.17', '123,2')}
            {PanelData('Wallet MJT', '12,321.17', '123,234,2')}
            {PanelData('MJT to Harvest', '12,321,123.17', '123,23')}
          </RowBetween>
        </LeftPanel>
        <RightPanel>
          <DarkGreyTitle mb="4px">MJT to Harvest</DarkGreyTitle>
          <Text fontSize="32px" fontWeight="700" lineHeight="1.2">1,132,231.17</Text>
          <GreyTitle mt="6px">≈ $123,234</GreyTitle>
          <GreyTitle mt="24px" mb="15px">*to collect from 3 farm, 1 pools</GreyTitle>
          <GradientBtn style={{width: '326px', height: '60px', fontSize: '24px'}}>Harvest All</GradientBtn>
        </RightPanel>
      </RowBetween>
    </>
  )
}

export default Trade
