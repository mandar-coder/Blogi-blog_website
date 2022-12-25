import './home.css'
import Header from '../../Components/Header/Header'
import Posts from '../../Components/posts/Posts'
import SideBar from '../../Components/sidebar/SideBar'

export default function Home() {
  return (
    <>
     <Header/>
    <div className='home'>
      <Posts/>
      <SideBar/>
    </div>
    </>
  )
}
