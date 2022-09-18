/* eslint-disable */
import React, {
  useEffect,
} from 'react'

import Link from 'next/link'

interface HeaderDashboardProps {
  type?: string;
  onClick?: () => void;
}

export const HeaderDashboard = ({
  type = '1-by-1',
  ...props
}: HeaderDashboardProps) => {
  // const mode = primary ? 'inputfield-wrapper--primary' : 'inputfield-wrapper--secondary';
  return (
    <div
      className={['header--dashboard ', `header--dashboard--${type}`].join('')}
    >
      <Link href="/">
        <a className="link">Home 🛠</a>
      </Link>
    </div>
  )
}
