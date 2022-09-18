/* eslint-disable */
import React,
{
  // useRef,
  useEffect,
  // useState,
} from 'react'

import Link from 'next/link'

// import IconSearch from '../../assets/icons/svg/IconSearch'

import {
  TweenMax,
  Sine,
  // Back
} from 'gsap'

interface ToggleProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Toggle = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ToggleProps) => {
  
  useEffect(() => {

  }, [])
  
  const mode = primary ? 'inputfield-wrapper--primary' : 'inputfield-wrapper--secondary';

  return (
    <div className="checkbox-wrapper">
      <input type="checkbox" className="switch-std green tinyswitch"></input>
      <div className="switch-decoration">
        <div></div>
      </div> 
    </div>
  )
}

// export default Toggle

// .checkbox-wrapper
//   input(type="checkbox" :id="`ch-${ch.name}-${index}`" class="switch-std green tinyswitch" :checked="ch.checked" @change="changeVal($event)" :name='ch.name')
//   div.switch-decoration
//     div