import React, { FunctionComponent } from 'react'
import styled, { useTheme } from 'styled-components'
import { Text, Button } from '../../uikit'
import Column, { AutoColumn } from 'components/Column';
import { AutoRow, RowBetween, RowFixed, RowFlat } from 'components/Row';
import { DarkGreyTitle, GreyTitle, PrimaryTitleMD, GradientBtn } from './styles';

const ImgArrow = require('../../assets/images/home/upArrow.png').default

const UpArrow = styled.img`
  width: 16px;
  margin-left: 6px;
`

const Panel = styled.div`
  background: #FFFEFE;
  box-shadow: 0px 24px 48px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  padding: 24px 32px;
`

const StatusPanel = styled(Panel)`
  width: 527px;
  height: 308px;
  margin-top: 36px;
`
const TvlPanel = styled(Panel)`
  width: 551px;
  height: 142px;
  background: linear-gradient(90deg, #FC9C47 0%, #FFC961 100%);
`

const VolumePanel = styled(TvlPanel)`
  background: white;
`


const Bar: FunctionComponent = (props) => {
  const theme = useTheme()
  const StatItem = (title: string, content: string | number) => {
    return (
      <RowBetween>
        <DarkGreyTitle>{title}</DarkGreyTitle>
        <Text fontSize="14px" color={theme.colors.text}>{content}</Text>
      </RowBetween>
    )
  }
  return (
    <>
      <Text fontWeight="700" fontSize="32px" mt="64px" color={theme.colors.text}>Top Bars</Text>
      <Text fontSize="16px" color={`${theme.colors.textTips}80`}>Select some bars for you.Don’t you come for drink</Text>
      <RowBetween style={{flexWrap: 'wrap'}}>
          <StatusPanel>
            <AutoColumn gap="15px">
              <PrimaryTitleMD style={{color: theme.colors.text}}>MJT Stat</PrimaryTitleMD>
              {StatItem('Market Cap', '$ 120,222,111.00')}
              {StatItem('Total Minted', '146,900.00')}
              {StatItem('Total Burned', '146,900.00')}
              {StatItem('Circulating Supply', '146,900.00')}
              {StatItem('New MJT/block', '1000')}
              {StatItem('Max Supply', '5,000,000.00')}
            </AutoColumn>
          </StatusPanel>
          <AutoColumn gap="24px">
            <TvlPanel style={{marginTop: '36px'}}>
              <AutoColumn gap="sm">
                <PrimaryTitleMD 
                  style={{
                    color: theme.colors.invertedContrast,
                    fontSize: '14px'
                  }}>Total Value Lock (TVL)
                </PrimaryTitleMD>
                <PrimaryTitleMD 
                  style={{
                    color: theme.colors.invertedContrast,
                    fontSize: '32px'
                  }}>$ 300,000.00
                </PrimaryTitleMD>
                <PrimaryTitleMD 
                  style={{
                    color: theme.colors.invertedContrast,
                    fontSize: '14px'
                  }}>Across all LPs and Wine Pools
                </PrimaryTitleMD>
              </AutoColumn>
            </TvlPanel>
            <VolumePanel>
              <AutoColumn gap="sm">
                <PrimaryTitleMD 
                  style={{
                    color: theme.colors.text,
                    fontSize: '14px'
                  }}>Volume (24 h)
                </PrimaryTitleMD>
                <PrimaryTitleMD 
                  style={{
                    color: theme.colors.text,
                    fontSize: '32px'
                  }}>$ 300,000.00
                </PrimaryTitleMD>
                <RowFixed>
                  <PrimaryTitleMD 
                    style={{
                      fontSize: '16px'
                    }}>+15.56%
                  </PrimaryTitleMD>
                  <UpArrow src={ImgArrow}/>
                </RowFixed>
              </AutoColumn>
            </VolumePanel>
          </AutoColumn>
      </RowBetween>
    </>
  ) 
}

export default Bar
