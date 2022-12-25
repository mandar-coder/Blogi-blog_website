import "./topbar.css"

export default function TopBar() {
  return (
    <div class="top">
        <div className="topLeft">
          <i className="topIcon fa-brands fa-facebook"></i>
          <i className="topIcon fa-brands fa-instagram"></i>
          <i className="topIcon fa-brands fa-square-twitter"></i>
        </div>

        <div className="topcenter">
          <ul className="topList">
            <li className="topListItems">HOME</li>
            <li className="topListItems">ABOUT</li>
            <li className="topListItems">CONTACT</li>
            <li className="topListItems">WRITE</li>
            <li className="topListItems">LOGOUT</li>
          </ul>
        </div>

        <div className="topRight">
          <img src={require('../../assets/images/profileImg.png')} alt="" className="topImg" />
          <i className="topSearchIcon fa-sharp fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
