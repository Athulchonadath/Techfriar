import React from 'react'

export default function Sidebar() {
  return (
    <>
      <div className="container-fluid">
        <div className="sidebar">
          <div className="orange-box">
            <div className="round-frame"></div>
          </div>
          <div className="list">
            <center>
              <ul>
                <li>
                  <a id='ddd' href=""><img src={"./Assets/Group 763747.png"} alt="" /></a>
                </li>
                <li>
                  <a id='ddd' href=""><img src={"./Assets/1.png"} alt="" /></a>
                </li>
                <li>
                  <a id='ddd' href=""><img src={"./Assets/Calendar.png"} alt="" /></a>
                </li>
                <li>
                  <a id='ddd' href=""><img src={"./Assets/Group 763699.png"} alt="" /></a>
                </li>
                <li>
                  <a id='ddd' href=""><img src={"./Assets/3 User.png"} alt="" /></a>
                </li>
                <li>
                  <a id='ddd' href=""><img src={"./Assets/Vector.png"} alt="" /></a>
                </li>
                <li>
                  <a id='bell' href=""><img id="bell" src={"./Assets/Notification.png"} alt="" /></a>
                </li>
                <li>
                  <a href=""><img id='man' src={"./Assets/Pexels Photo by Italo Melo.png"} alt="" /></a>
                </li>
              </ul>
            </center>
          </div>
        </div>
      </div>
    </>
  )
}
