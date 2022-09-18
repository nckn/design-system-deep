/* eslint-disable */
import React, {
  useEffect,
} from 'react'
// import Link from 'next/link'
import _ from "lodash"

interface SidebarProps {
  type?: string;
  onClick?: () => void;
}

export const Sidebar = ({
  type = '1-by-1',
  ...props
}: SidebarProps) => {
  // const mode = primary ? 'inputfield-wrapper--primary' : 'inputfield-wrapper--secondary';
  return (
    <div
      className={['sidebar ', `sidebar--${type}`].join('')}
    >
      <ul>
        {_.times(3, (i) => (
          <li
            key={`sidebar-item-${i}`}
          >
            {`line ${1}`}
          </li>
        ))}
      </ul>
    </div>
  )
}
