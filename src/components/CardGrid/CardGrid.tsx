/* eslint-disable */
import React, {
  useEffect,
} from 'react'
// import Link from 'next/link'
import _ from "lodash"

import { Card } from '../Card/Card'

// import './card.module.scss'

interface CardGridProps {
  type?: string;
  onClick?: () => void;
}

export const CardGrid = ({
  type = '1-by-1',
  ...props
}: CardGridProps) => {
  
  // const mode = primary ? 'inputfield-wrapper--primary' : 'inputfield-wrapper--secondary';

  return (
    <div
      className={['cardgrid ', `cardgrid--${type}`].join('')}
    >
      {_.times(3, (i) => (
        <Card />
      ))}
    </div>
  )
}

// export default Toggle

// .checkbox-wrapper
//   input(type="checkbox" :id="`ch-${ch.name}-${index}`" class="switch-std green tinyswitch" :checked="ch.checked" @change="changeVal($event)" :name='ch.name')
//   div.switch-decoration
//     div