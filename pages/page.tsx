import type {
  // GetStaticProps,
  NextPage
} from 'next'

import Header from '../src/components/Header'

import _ from "lodash"

const PageExample: NextPage = ( props ) => {
  return (
    <div id="pageExample">

      <Header />

      {_.times(3, (i) => (
         <div
          className="section"
          key={`section-${i}`}
        >
          <div className="section--inner">
            <h1>This is a big title</h1>
            <p>This is a description just for demo purpose</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PageExample
