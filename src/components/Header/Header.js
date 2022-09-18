/* eslint-disable */
import React,
{
  // useRef,
  useEffect,
  // useState,
  // createRef
} from 'react'
// import { API, graphqlOperation } from 'aws-amplify'
// import { Link, withRouter } from 'react-router-dom';
import Link from 'next/link'

import Image from 'next/image'
import imageLoader from '../../../imageLoader'

import { Toggle } from '../Toggle/Toggle'

// import IlluIntro from '../../assets/icons/svg/IlluIntro'
// import IlluBxDesign from '../../assets/icons/svg/illus/IlluBxDesign'
// import IlluOverAllInfo from '../../assets/icons/svg/illus/IlluOverAllInfo'
// import IconHome from '../../assets/icons/svg/IconHome'
// import IconSearch from '../../assets/icons/svg/IconSearch'

import {
  TweenMax,
  Sine,
  // Back
} from 'gsap'

// Misc helper functions
// import { 
//   map,
//   generateRandomNumber
// } from '../assets/js/helpers'

// import jwt_decode from "jwt-decode"

// State related
// import { useStoreActions, useStoreState } from '../../store/hooks.tsx'

// import { Drawer, Select } from 'antd';
// import Tag from '../Tag'
// import StartScreen from '../../components/StartScreen'

// import {
//   Header,
//   HeaderName,
//   HeaderNavigation,
//   HeaderMenuItem,
//   // HeaderGlobalBar,
//   HeaderGlobalAction,
//   SkipToContent
// } from 'carbon-components-react'

// import {
//   Close32,
//   // Search20,
//   DocumentAdd20
// } from '@carbon/icons-react'

// Selecting tags related
// const { Option } = Select

const Header = (props) => {
  // Get global store items
  // This is where the global states are loaded in.
  // const {
  //   setUserType,
  //   setCurPillarName
  // } = useStoreActions( store => store)
  // const { userType, curPillarUrl } = useStoreState( store => store )

  // const [visibleIntro, setVisibleIntro] = useState(true) // Show the start screen
  // // const [visibleIntro, setVisibleIntro] = useState(false) // Hide the start screen
  // const [visibleSearchTag, setVisibleSearchTag] = useState(false)
  // const [sections, setSections] = useState([])
  // const [tags, setTags] = useState([])

  // const [windowLocationPathname, setWindowLocationPathname] = useState('')

  // should be placed for each element that should be animated
  // ref={element => {animRef.current[0] = element;}}
  // let animRef = useRef([]);
  // let illuRef = useRef([]);

  // Need to document what this does
  // const { location, tokenUsername } = props;

  useEffect(() => {

    let header = document.getElementById('header')

    window.onscroll = function (e) {
      // console.log(window.scrollY); // Value of scroll Y in px

      if (window.scrollY > 50) {
        header.classList.add('header-shrunk')
      }
      else {
        header.classList.remove('header-shrunk')
      }
    };

    // window.addEventListener("scroll", (e) => {

    //   console.log(e)

    //   // var scrolled = document.scrollTop;
    //   // var position = header.offsetTop;
    
    //   if (document.body.scrollTop > 50) {
    //     header.classList.add('header-shrunk')
    //   }
    //   else {
    //     header.classList.remove('header-shrunk')
    //   }

    // });
    // fetchTags()
    // console.log('here we log whether there are any sub directories')
    // let locationPathname = window.location.pathname.split('/')
    // setWindowLocationPathname(locationPathname)
    // console.log(locationPathname.length)

    // setInitialStyleStartScreen()
    // animationStartScreen()
    // setVisibleIntro(false)
    // setTimeout(() => {
    //   animationStartScreen()
    // }, 100)
  }, [])

  // const setInitialStyleStartScreen = () => {
  //   TweenMax.staggerTo(animRef.current, 0.3, {
  //     autoAlpha: 0,
  //     y: 40
  //   }, 0.15)
  //   // TweenMax.set(animRef.current, {
  //   //   autoAlpha: 0,
  //   //   y: 40
  //   // })
  // }

  // const animationStartScreen = () => {
  //   TweenMax.to(illuRef.current, 1, { 
  //     autoAlpha: 1
  //   })
  //   TweenMax.staggerFrom(animRef.current, 0.3, { 
  //     scaleY: 0,
  //     ease: "back.out(1.4)"
  //   }, 0.15)
  //   // TweenMax.staggerFrom(animRef.current, 0.3, { 
  //   //   rotateZ: 8,
  //   //   ease: "back.out(1.4)"
  //   // }, 0.15)
  //   // TweenMax.staggerTo(animRef.current, 0.35, { 
  //   //   y: -20,
  //   //   ease: Sine.easeOut
  //   // }, 0.15)
  //   TweenMax.staggerTo(animRef.current, 0.3, {
  //     autoAlpha: 1,
  //   }, 0.1)
  // }

  // Get the tags in order to display them in tag search
  // async function fetchTags () {
  //   // console.log('tag function: ')
  //   try {
  //     // List Tags
  //     const tagData = await API.graphql(graphqlOperation(listTags))
  //     // console.log('tag data: ')
  //     // console.log(tagData)
  //     // return
  //     const tags = tagData.data.listTags.items
  //     setTags(tags)
  //   } catch (err) {
  //     console.log('error fetching all tags from BruceBanner')
  //   }
  // }

  // The intro
  // function onShowIntroScreen() {
  //   // console.log('open intro')
  //   setVisibleIntro( true )
  //   // animationStartScreen()
  //   setTimeout(() => {
  //     animationStartScreen()
  //   }, 100)
  // };

  // The intro
  function onCloseIntro() {
    // console.log('close intro')
    // setVisibleIntro( false )
    // setInitialStyleStartScreen()
  };

  function onShowSearchTag() {
    // setVisibleSearchTag( true )
  };

  function onCloseSearchTag() {
    // setVisibleSearchTag( false )
    // setVisibleIntro( false )
  };

  // // Nav item Pillar was clicked
  // function navItemWasClickedPillar(e, name, value) {
  //   // console.log('navItemWasClickedPillar: ', e)
  //   // const target = e.target
  //   // console.log('target: ', target)
  //   // console.log('value: ', value)
  //   setVisibleIntro( false )
  //   // Reset the start screen animation
  //   setInitialStyleStartScreen()
  //   // Set the Url level 2, 3 and 4, first path of the domain
  //   setCurPillarName( name )
  //   setCurPillarUrl( value )
  //   // Reset the others
  //   setCurSubjectUrl( '' )
  //   setCurSubjectID( '' )
  //   setCurChapterUrl( '' )
  //   setCurChapterID( '' )
  //   setCurSectionUrl( '' )
  //   setCurSectionID( '' )
  //   // Set the curPillarID
  //   // console.log('Nav item Pillar was clicked')
  //   if (value === 'building-experience-design') {
  //     setCurPillarID( '311ad220-d8e3-4dba-87c3-208eb6e4796d' )
  //   }
  //   else if (value === 'overall-information') {
  //     setCurPillarID( '7830e877-6851-47cc-823a-54089820c6de' )
  //   }
  //   // Scroll to top
  //   window.scrollTo(0,0)
  //   // console.log(value)
  //   // setCurPillarID( value )
  // };

  function handleChange(value) {
    // console.log(`selected ${value}`);
  }

  // Animation when hover a pillar card
  // const hoverCardForPillar = (which) => {
  //   // let whichItem = which === 'bxdesign' ? '.illu-shape--bxdesign' ? 
  //   let whichItem = (
  //     which === 'bxdesign' ? '.illu-shape--bxdesign' : // if 
  //     which === 'overalli' ? '.illu-shape--overalli' : // else if 
  //     null // else 
  //   )
  //   // console.log('hover Card For Pillar')
  //   // TweenMax.staggerTo(whichItem, 0.25, {
  //   TweenMax.to(whichItem, 0.2, {
  //     scale: 1.05,
  //     transformOrigin:"50% 50%",
  //     ease: Sine.easeOut,
  //     rotateZ: map(generateRandomNumber(10, 20), 10, 20, -8, 8)
  //   }, 0.05)
  // }

  // Animation when mouse leaving a pillar card
  // const leaveCardForPillar = (which) => {
  //   // let whichItem = which === 'bxdesign' ? '.illu-shape--bxdesign' ? 
  //   let whichItem = (
  //     which === 'bxdesign' ? '.illu-shape--bxdesign' : // if 
  //     which === 'overalli' ? '.illu-shape--overalli' : // else if 
  //     null // else 
  //   )
  //   // console.log('leave Card For Pillar')
  //   // TweenMax.staggerTo(whichItem, 0.25, {
  //   TweenMax.to(whichItem, 0.2, {
  //     scale: 1,
  //     transformOrigin:"50% 50%",
  //     ease: Sine.easeOut,
  //     rotateZ: 0
  //   }, 0.05)
  // }

  // console.log('useeeeer type: ', this.props.user_type)
  // if (location.pathname.match('HomeScreen') || location.pathname.match('steps')){
  //   return null;
  // }

  function onToggle(val) {
    console.log('onToggle')

    document.body.classList.toggle('body--dark')
  }

  return (
    <div className='header' id="header">
      
      <div className='header__inner'>

        <div className="header_inner__block header_inner__block--one">
          <Link className="link" href="/">
            {/* Home */}
            {/* <a>Typography</a> */}
            {/* <div className='link back-link'></div> */}
            <Image
              loader={imageLoader}
              src="./images/mstile-150x150.png"
              alt="Vercel Logo"
              width={64}
              height={64}
            />

          </Link>
        </div>

        <div className="header_inner__block header_inner__block--two">
          <Link href="/dashboard">
            Dashboard example
          </Link>
          <Link href="/page">
            Page example
          </Link>
          <Link href="/">
            Documentation
          </Link>
          <Link href="/">
            Github
          </Link>
          <Link href="/">
            About
          </Link>

          <Toggle
            button_text="Click me"
            primary={true}
            onToggle={onToggle}
          />
        </div>
        {/* header - end */}

      </div>
      {/* header_inner - end */}

    </div>
  )
}

// export default withRouter(Header)
export default Header
