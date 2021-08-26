import React, { useCallback, useEffect } from 'react'
import styled from 'styled-components'

const StyledRangeInput = styled.input<{ size: number }>`
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */
  cursor: pointer;
  border-radius: 10px;

  &:focus {
    outline: none;
  }

  &::-moz-focus-outer {
    border: 0;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: ${({ size }) => size}px;
    width: ${({ size }) => size}px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 100%;
    border: none;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0px 0px 10px ${({ theme }) => theme.colors.primary};
  }

  &::-moz-range-thumb {
    height: ${({ size }) => size}px;
    width: ${({ size }) => size}px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 100%;
    border: none;
    color: ${({ theme }) => theme.colors.primary};
    // &:hover,
    // &:focus {
    //   box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
    //     0px 24px 32px rgba(0, 0, 0, 0.04);
    // }
  }

  &::-ms-thumb {
    height: ${({ size }) => size}px;
    width: ${({ size }) => size}px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 100%;
    color: ${({ theme }) => theme.colors.primary};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-webkit-slider-runnable-track {
    height: 4px;
  }

  &::-moz-range-track {
    height: 4px;
  }

  &::-ms-track {
    width: 100%;
    border-color: transparent;
    color: transparent;
    border-radius: 3px;
    height: 4px;
  }

  &::-ms-fill-lower {
    background: ${({ theme }) => theme.colors.primary};
  }

  &::-ms-fill-upper {
    background: #E4E4E4;
  }
`

interface InputSliderProps {
  value: number
  onChange: (value: number) => void
  step?: number
  min?: number
  max?: number
  size?: number
}

export default function Slider({ value, onChange, min = 0, step = 1, max = 100, size = 18 }: InputSliderProps) {
  
  const initSliderDom = (data: string | number) => {
    const sliderDom = document.getElementById('input-slider') as HTMLInputElement;
    sliderDom.style.background = `linear-gradient(to right, #18BB97 ${ Number(data) }%, #E4E4E4 ${ Number(data) }%, #E4E4E4)` 
  }

  useEffect(() => {
    initSliderDom(value);
  }, [value])

  const changeCallback = useCallback(
    e => {
      onChange(parseInt(e.target.value));
      initSliderDom(parseInt(e.target.value));
    },
    [onChange]
  )

  return (
    <StyledRangeInput
      size={size}
      type="range"
      value={value}
      style={{ width: '100%', margin: '15px 0', background: '#E4E4E4' }}
      onChange={changeCallback}
      aria-labelledby="input slider"
      step={step}
      min={min}
      max={max}
      id="input-slider"
    />
  )
}
