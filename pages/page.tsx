import type {
  // GetStaticProps,
  NextPage
} from 'next'

const PageExample: NextPage = ( props ) => {
  return (
    <div id="dashboard">
      <h1>This is a bit title</h1>
      <p>This is a description just for demo purpose</p>
    </div>
  )
}

export default PageExample
