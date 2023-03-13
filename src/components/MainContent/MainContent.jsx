import LeftSide from './LeftSide'
import MiddleContent from './MiddleContent'
import RightSide from './RightSide'
import './MainContent.css'

export default function MainContent() {

  return (
    <div className='mainContent'>
      <LeftSide />
      <MiddleContent />
      <RightSide />
    </div>
  )
}