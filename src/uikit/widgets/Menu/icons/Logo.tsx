import React from 'react'
import styled from 'styled-components'

const LogoWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 155px;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  margin-left: 20px;
`

const LogoIcon = styled.img`
  width: 47px;
  height: auto;
`

const LogoText = styled.img`
  margin-left: 10px;
  height: 40px;
  width: 93px;
`

const Logo: React.FC<any> = (props: any) => {
  const textColor = props.isDark ? '#FFFFFF' : '#000000'
  return (
    <LogoWrapper>
      <LogoIcon src={require('../../../../assets/images/logo-icon.svg').default} />
      <LogoText src={require('../../../../assets/images/logo.svg').default} />
    </LogoWrapper>
  )
}

export default React.memo(Logo)
