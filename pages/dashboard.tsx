import type { GetStaticProps, NextPage } from 'next'

// import Head from 'next/head'
// import Image from 'next/image'
// import Link from 'next/link'
// import imageLoader from '../imageLoader'

import { HeaderDashboard } from '../src/components/HeaderDashboard/HeaderDashboard'
import { Sidebar } from '../src/components/Sidebar/Sidebar'

const Dashboard: NextPage = ( props ) => {
  return (
    <div id="dashboard">
      <HeaderDashboard />
      <Sidebar />
    </div>
  )
}

export default Dashboard
