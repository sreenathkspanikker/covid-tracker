import React, { useRef } from 'react'
import * as Modules from "../modules";
import PerfectScrollbar from 'react-perfect-scrollbar'
import { useWindowWidth } from '@react-hook/window-size'


export const Content = (props) => {
  const { menu } = props
  const ps = useRef()
  const onlyWidth = useWindowWidth()
  
  const scrollReset = e => {
    const curr = ps.current
    if (curr && e)  ps.current.scrollTop = 0
  }

  const renderMenu = (e) => {
    scrollReset(true)
    switch (e) {
      case 'list':
        return <Modules.CountryList  />
      case 'vaccine':
        return <Modules.Vaccine scrollReset={e => scrollReset(e)} />
      case 'info':
        return <Modules.CovidInfo  />
      case 'about':
        return <Modules.About />
      default:
        return <Modules.TotalCount  />
    }
  }
  
  return (
    <div className='app-content'>
        <div className='app-components'>
          {onlyWidth < 576 ? renderMenu(menu) : (
          <PerfectScrollbar containerRef={el => (ps.current = el)}>
            {renderMenu(menu)}
          </PerfectScrollbar>
          )}
        </div>
    </div>
  )
}
