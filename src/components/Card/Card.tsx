/* eslint-disable */
import React, {
  useEffect,
} from 'react'
// import Link from 'next/link'

import { Separator } from '../Separator/Separator'

// import './card.module.scss'

interface CardProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  imageSrc: string;
  onClick?: () => void;
}

export const Card = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  imageSrc = '',
  ...props
}: CardProps) => {
  
  const mode = primary ? 'inputfield-wrapper--primary' : 'inputfield-wrapper--secondary';

  const images = [
    "images/lifestyle-1.jpg",
    "images/lifestyle-2.jpg",
    "images/lifestyle-3.jpg",
    "images/lifestyle-4.jpg"
  ]

  const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'

  return (
    <div className="card card--outer">
      <div className="card--inner">
        {
          imageSrc !== '' ? (
            // <img className="image-thumbnail" src={imageSrc} alt="" />
            <img className="image-thumbnail" src={images[ Math.floor(Math.random() * images.length) ]} alt="" />
          ) : (
            null
          )
        }
        {/* <label className="card__text card__text__label">label</label> */}
        <h3 className="card__text card__text__title">Title</h3>
        <Separator
          primary={true}
          type={"separator--margin-no"}
        />
        <p className="card__text card__text__description">{description}</p>
      </div> 
    </div>
  )
}

// export default Toggle

// .checkbox-wrapper
//   input(type="checkbox" :id="`ch-${ch.name}-${index}`" class="switch-std green tinyswitch" :checked="ch.checked" @change="changeVal($event)" :name='ch.name')
//   div.switch-decoration
//     div