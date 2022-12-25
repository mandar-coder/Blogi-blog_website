import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./topbar.css"

export default function TopBar() {
  const user=true;
  return (
    <div class="top">
        <div className="topLeft">
          <i className="topIcon fa-brands fa-facebook"></i>
          <i className="topIcon fa-brands fa-instagram"></i>
          <i className="topIcon fa-brands fa-square-twitter"></i>
        </div>

        <div className="topcenter">
          <ul className="topList">
            <li className="topListItems"><Link className="link" to='/'>HOME</Link></li>
            <li className="topListItems"><Link className="link" to='/About'>ABOUT</Link></li>
            <li className="topListItems"><Link className="link" to='/Contact'>CONTACT</Link></li>
            <li className="topListItems"><Link className="link" to='/Write'>WRITE</Link></li>
          </ul>
        </div>

        <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src={require('../../assets/images/profileImg.png')} alt=""/>
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
          <i className="topSearchIcon fa-sharp fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
