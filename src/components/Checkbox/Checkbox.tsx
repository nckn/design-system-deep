/* eslint-disable */
import React, {
  useEffect,
} from 'react'


interface CheckboxProps {
  type?: string;
  onClick?: () => void;
}

export const Checkbox = ({
  type = '',
  ...props
}: CheckboxProps) => {
  // const mode = primary ? 'inputfield-wrapper--primary' : 'inputfield-wrapper--secondary';
  return (
    <div
      className={['checkbox--std-wrapper ', `checkbox--std-wrapper--${type}`].join('')}
    >
      <input type="checkbox" id="html" />
      <label htmlFor="html">You can check this</label>
    </div>
  )
}
