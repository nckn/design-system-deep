import * as Figma from 'figma-js'

// const fetchFigmaVariables = () => {
class FetchFigmaVariables {
  constructor() {
    // Figma - start

    this.accessToken = process.env.ACCESS_TOKEN
    this.client = Figma.Client({
      personalAccessToken: this.accessToken
    })

    this.init()
  }

  init() {
    console.log('fetching figma variables')

    // this.fetchFigmaFile()

    // this.figmaFileFetch()

    // this.figmaGetStyles()
  }

  async figmaGetStyles() {
    let _this = this
    let fileId = '2F4AraRspiIhO6uWLsRP8EVD'
    // let fileId = '2FM0GRfjcIleAgPBOvBi4ELh'
    let queryString = 'https://api.figma.com/v1/files/' + fileId + '/styles/'

    console.log('queryString')
    console.log(queryString)

    // var handleError = function (err) {
    //   console.warn(err);
    //   return new Response(JSON.stringify({
    //     code: 400,
    //     message: 'Stupid network Error'
    //   }));
    // };

    let result = await fetch(queryString, {
      method: 'GET',
      headers: {
        // 'X-Figma-Token': FigmaAPIKey
        'X-Figma-Token': this.accessToken
      }
    }).catch(err => {
      console.log('logging them errors');
      console.log(err.response.data);
    })


    let figmaStyles = await result.json()

    console.log('figmaStyles')
    console.log(figmaStyles)

    // // add this -->
    // let figmaFrames = figmaFileStruct.document.children // 1
    //     .filter(child => child.type === 'CANVAS')[1].children // 2
    //     .filter(child => child.type === 'FRAME') // 3
    //     .map(frame => { // 4
    //         return {
    //             name: frame.name,
    //             id: frame.id
    //         }
    //     })

    // // return figmaFrames
    // console.log(figmaFrames)
  }

  async figmaFileFetch() {
    let _this = this
    let fileId = '4AraRspiIhO6uWLsRP8EVD'
    // let fileId = '2FM0GRfjcIleAgPBOvBi4ELh'
    let result = await fetch('https://api.figma.com/v1/files/' + fileId, {
      method: 'GET',
      headers: {
        // 'X-Figma-Token': FigmaAPIKey
        'X-Figma-Token': this.accessToken
      }
    })

    let figmaFileStruct = await result.json()

    console.log(figmaFileStruct)

    // add this -->
    let figmaFrames = figmaFileStruct.document.children // 1
      .filter(child => child.type === 'CANVAS')[1].children // 2
      .filter(child => child.type === 'FRAME') // 3
      .map(frame => { // 4
        return {
          name: frame.name,
          id: frame.id
        }
      })

    // return figmaFrames
    console.log(figmaFrames)
  }

  fetchFigmaFile() {
    let _this = this

    // _this.client.projectFiles()
    // _this.client.Figma.currentFile()

    _this.client.file('4AraRspiIhO6uWLsRP8EVD').then(({ data }) => {
      // Store the data
      _this.figmaData = data

      // console.log(JSON.stringify( _this.figmaData ))
    })
  }

}

const fetchFigmaVariables = new FetchFigmaVariables()
// export fetchFigmaVariables