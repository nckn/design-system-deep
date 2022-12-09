/* eslint-disable */
import React, {
  useEffect,
} from 'react'

import { InputRange } from '../InputRange/InputRange'
import { SortBar } from '../SortBar/SortBar'

interface FilterBarProps {
  type?: string;
  onClick?: () => void;
}

export const FilterBar = ({
  type = '1-by-1',
  ...props
}: FilterBarProps) => {
  // const mode = primary ? 'inputfield-wrapper--primary' : 'inputfield-wrapper--secondary';
  return (
    <div
      className={['filter-bar ', `filter-bar--${type}`].join('')}
    >
      <InputRange
        label="Size"
        primary={true}
      />
      <SortBar />
    </div>
  )
}
