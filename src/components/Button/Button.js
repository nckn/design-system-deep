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

const Button = (props) => {
  
  useEffect(() => {

  }, [])

  return (
    <button
    className={['button ', `${props.type}`].join('')}
      id={props.name}
    >
      {props.button_text}
    </button>
  )
}

export default Button
