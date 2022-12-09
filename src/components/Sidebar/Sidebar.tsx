/* eslint-disable */
import React, {
  useEffect,
} from 'react'
// import Link from 'next/link'
import _ from "lodash"
import { SearchFieldDeep } from '../SearchFieldDeep/SearchFieldDeep';
import { Separator } from '../Separator/Separator';
import { Checkbox } from '../Checkbox/Checkbox';

interface SidebarProps {
  type?: string;
  listItems?: Array;
  itemTypes?: string;
  onClick?: () => void;
}

export const Sidebar = ({
  type = '1-by-1',
  listItems = null,
  itemTypes = 'items',
  ...props
}: SidebarProps) => {

  const handleClick = (e) => {
    console.log('clicking yes')
    const target = e.target
    const targetID = target.getAttribute('data-name')
    console.log(targetID)
    // ref.current?.scrollIntoView({behavior: 'smooth'});
    const elemWeWantToScrollTo = document.getElementById(`hook-${targetID}`)
    // console.log(elemWeWantToScrollTo)
    // elemWeWantToScrollTo?.scrollIntoView({
    //   behavior: 'smooth',
    //   block: 'middle',
    // });
    const yOffset = -120; 
    // const element = document.getElementById(id);
    const y = elemWeWantToScrollTo.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({top: y, behavior: 'smooth'});
  };

  // const mode = primary ? 'inputfield-wrapper--primary' : 'inputfield-wrapper--secondary';
  return (
    <div
      className={['sidebar ', `sidebar--${type}`].join('')}
    >
      <SearchFieldDeep />

      <h4 className="m-top">List of {itemTypes}</h4>

      <Separator
        primary={true}
        type={"separator--margin-top"}
      />
      
      <ul>
        {/* If we have list items to show */}
        {
          listItems !== null ? (
            Object(listItems).map((item, index) => (
              <li className="sidebar__list-item" onClick={handleClick} data-name={item.name.toLowerCase()}>{item.name}</li>
            ))
            
          ) : (
            _.times(10, (i) => (
              <li
                key={`sidebar-item-${i}`}
              >
                {`line ${i + 1}`}
              </li>
            ))
          )
        }

        <Separator
          primary={true}
          type={""}
        />

        {/* If this Sidebar instance is in the dashboard */}
        {
          type === "dashboard" ? (
            <li><Checkbox /></li>
          ) : (
            null
          )
        }
      </ul>
    </div>
  )
}
