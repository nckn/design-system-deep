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

const Separator = (props) => {
  
  useEffect(() => {

  }, [])

  return ( 
    <div className="separator">      
    </div>
  )
}

export default Separator

// .checkbox-wrapper
//   input(type="checkbox" :id="`ch-${ch.name}-${index}`" class="switch-std green tinyswitch" :checked="ch.checked" @change="changeVal($event)" :name='ch.name')
//   div.switch-decoration
//     div