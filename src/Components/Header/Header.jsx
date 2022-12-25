import "./header.css"

export default function header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Nodejs</span>
        <span className="headerTitleLg">Bolgs</span>
      </div>
      <img className="headerImg" src={require('../../assets/images/MasterBG.jpg')} alt="" />
    </div>
  )
}
