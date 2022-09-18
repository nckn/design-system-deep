/* eslint-disable */
import React, {
  useEffect,
} from 'react'
// import Link from 'next/link'

// import './card.module.scss'

interface CardProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Card = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: CardProps) => {
  
  const mode = primary ? 'inputfield-wrapper--primary' : 'inputfield-wrapper--secondary';

  return (
    <div className="card card--outer">
      <div className="card--inner">
        <label className="card__text card__text__label">label</label>
        <h3 className="card__text card__text__title">Title</h3>
        <p className="card__text card__text__description">label</p>
      </div> 
    </div>
  )
}

// export default Toggle

// .checkbox-wrapper
//   input(type="checkbox" :id="`ch-${ch.name}-${index}`" class="switch-std green tinyswitch" :checked="ch.checked" @change="changeVal($event)" :name='ch.name')
//   div.switch-decoration
//     div