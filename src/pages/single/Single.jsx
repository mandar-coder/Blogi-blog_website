import './single.css'
import Sidebar from '../../Components/sidebar/SideBar'
import SinglePost from '../../Components/Singlepost/SinglePost'

export default function single() {
  return (
    <div>
        <div className="single">
          <SinglePost/>
          <Sidebar/>
        </div>
    </div>
  )
}