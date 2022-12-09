import type {
  // GetStaticProps,
  NextPage
} from 'next'

import Header from '../src/components/Header'
import Button from '../src/components/Button'

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
            <h2>This is a description just for demo purpose</h2>
            {i === 1 ? (
                <Button button_text="Click me" type={'secondary'} primary={true} />
              ) : (
                null
              )
            }
          </div>
        </div>
      ))}
    </div>
  )
}

export default PageExample
