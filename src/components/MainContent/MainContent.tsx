import LeftSide from './LeftSide'
import MiddleContent from './MiddleContent'
import RightSide from './RightSide'
import React from 'react'
import './MainContent.css'

const MainContent: React.FC = () => {

  return (
    <div className='mainContent flex flex-col items-center sm:flex-row sm:items-start pt-3 px-2 gap-5'>
      <LeftSide />
      <MiddleContent />
      <RightSide />
    </div>
  )
}
export default MainContent