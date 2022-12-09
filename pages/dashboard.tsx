import type { GetStaticProps, NextPage } from 'next'

// import Head from 'next/head'
// import Image from 'next/image'
// import Link from 'next/link'
// import imageLoader from '../imageLoader'

import { HeaderDashboard } from '../src/components/HeaderDashboard/HeaderDashboard'
import { FilterBar } from '../src/components/FilterBar/FilterBar'
import { Sidebar } from '../src/components/Sidebar/Sidebar'
import { CardGrid } from '../src/components/CardGrid/CardGrid'

const Dashboard: NextPage = ( props ) => {
  return (
    <div id="dashboard">
      <HeaderDashboard />
      <FilterBar />
      <Sidebar type="dashboard" />
      <CardGrid type={"auto"} amount={14}/>
    </div>
  )
}

export default Dashboard
