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

const Toggle = (props) => {
  
  useEffect(() => {

  }, [])

  return (
    
    <div className="checkbox-wrapper">
      <input type="checkbox" className="switch-std green tinyswitch"></input>
      <div className="switch-decoration">
        <div></div>
      </div> 
    </div>
  )
}

export default Toggle

// .checkbox-wrapper
//   input(type="checkbox" :id="`ch-${ch.name}-${index}`" class="switch-std green tinyswitch" :checked="ch.checked" @change="changeVal($event)" :name='ch.name')
//   div.switch-decoration
//     div