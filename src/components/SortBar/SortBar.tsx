/* eslint-disable */
import React, {
  useEffect,
} from 'react'

interface SortBarProps {
  type?: string;
  onClick?: () => void;
}

export const SortBar = ({
  type = '1-by-1',
  ...props
}: SortBarProps) => {
  // const mode = primary ? 'inputfield-wrapper--primary' : 'inputfield-wrapper--secondary';
  return (
    <div
      className={['sort-wrapper ', `sort-wrapper--${type}`].join('')}
    >
      <div name="sort-0" className="btn-behaviour sorter active desc">Az</div>
      <div name="sort-1" className="btn-behaviour sorter active">Country</div> 
    </div>
  )
}
