import React from 'react'

export default function Index() {
  return (
    <>
      <div className="container-fluid">
        <div className="row" style={{ width: "100%", marginLeft: "90px" }}>
          <div className="col-2"><span id='h2'>People</span><div className="black-plus"><center>+</center></div></div>
          <div className="col-7"></div>
          <div className="col-3" id='inpt'><center><input type="text" placeholder='Search' name="" id="search" /><button id='filter'><img src={"./Assets/Vector (1).png"} alt="" />  Filter</button></center></div>
          {/* <div className="col-3">d</div> */}
        </div>
        <img id='three-segment' src={"./Assets/Segments - 3 items.png"} alt="" />
        <center>
          <div className="main-div">
            <div className="first-one"></div>
            <div className="first-two">
              <div className="child-box"><img id='Grp' src={"./Assets/Group.png"} alt="" /><div className="white-b"><img id='person1' src={"./Assets/image 79.png"} alt="" /></div><center><span id='seth'>Seth Williams</span><br /><span id="managing">Managing director</span></center></div>
            </div>
            <div className="first-box"><img id='Grp' src={"./Assets/Group.png"} alt="" /><div className="white-b"><img id='person1' src={"./Assets/image 77.png"} alt="" /></div><center><span id='seth'>Dave Cooper</span><br /><span id="managing">Regional Director</span></center></div>
          </div>
          <div className="main-div-second">
            {/* <div className="second-one">
        <div className="child-two-left">child-left</div>
        </div>
        <div className="second-two">
          <div className="child-two-right">child</div>
         
        </div>
        <div className="second-box">test</div> */}
            <div className="sub-div">
              <div className="child-sub-div"></div>
              <div className="child-sub-div"></div>
              <div className="content"><img id='brazil' src={"./Assets/image 260.png"} alt="" /> <span style={{ fontWeight: "500", fontSize: "13px", marginTop: "5px" }}>Brazil</span></div>
              <div className="content2"><div className="white-b"><img id='person1' src={"./Assets/unsplash_nHIb0s-BZMA.png"} alt="" /></div>
                <div className="sub-part">
                  <center>
                    <p id='seth'>Ramon Harris</p>
                    <p id='managing'>Regional Director</p>
                  </center>
                </div>
              </div>
            </div>
            <div className="sub-div">
              <div className="child-sub-div"></div>
              <div className="child-sub-div"></div>
              <div className="content"><img id='brazil' src={"./Assets/image 262.png"} alt="" /> <span style={{ fontWeight: "500", fontSize: "13px", marginTop: "5px" }}>Usa</span></div>
              <div className="content2"><div className="white-b"><img id='person1' src={"./Assets/image 79 (1).png"} alt="" /></div>
                <div className="sub-part">
                  <center>
                    <p id='seth'>Dan Morgan</p>
                    <p id='managing'>Regional Director</p>
                  </center>
                </div>
              </div>
            </div>
            <div className="sub-div">
              <div className="child-sub-div"></div>
              <div className="child-sub-div"></div>
              <div className="content"><img id='brazil' src={"./Assets/image 263.png"} alt="" /> <span style={{ fontWeight: "500", fontSize: "13px", marginTop: "5px" }}>Italy</span></div>
              <div className="content2"><div className="white-b"><img id='person1' src={"./Assets/image 99.png"} alt="" /></div>
                <div className="sub-part">
                  <center>
                    <p id='seth'>Stella Nelson</p>
                    <p id='managing'>Regional Director</p>
                  </center>
                </div>
              </div>
            </div>
          </div>
          <div className="main-div-three">
            {/* <div className="second-one">
        <div className="child-two-left">child-left</div>
        </div>
        <div className="second-two">
          <div className="child-two-right">child</div>
         
        </div>
        <div className="second-box">test</div> */}
            <div className="sub3-div">
              <div className="child3-sub-div"></div>
              <div className="child3-sub-div"></div>
              <div className="content3"><div className="white-b"><img id='person1' src={"./Assets/image 100.png"} alt="" /></div>
                <div className="sub-part">
                  <center>
                    <p id='seth'>Janet Parks</p>
                    <p id='managing'>CEO</p>
                    <img src={"./Assets/Group 763767.png"} alt="" />
                    <img id='frame' src={"./Assets/Frame 90.png"} alt="" />
                  </center>
                </div>
              </div>
            </div>
            <div className="sub3-div">
              <div className="child3-sub-div"></div>
              <div className="child3-sub-div"></div>
              <div className="content3"><div className="white-b"><img id='person1' src={"./Assets/image 103.png"} alt="" /></div>
                <div className="sub-part">
                  <center>
                    <p id='seth'>Ivan Toney</p>
                    <p id='managing'>CEO</p>
                    <img src={"./Assets/Group 763767.png"} alt="" />
                    <img id='frame' src={"./Assets/Frame 90.png"} alt="" />
                  </center>
                </div>
              </div>
            </div>
            <div className="sub3-div">
              <div className="child3-sub-div"></div>
              <div className="child3-sub-div"></div>
              <div className="content3"><div className="white-b"><img id='person1' src={"./Assets/image 81.png"} alt="" /></div>
                <div className="sub-part">
                  <center>
                    <p id='seth'>Miles Clark</p>
                    <p id='managing'>Chief Administrator</p>
                    <img src={"./Assets/Group 763767.png"} alt="" />
                    <img id='frame' src={"./Assets/Frame 90.png"} alt="" />
                  </center>
                </div>
              </div>
            </div>
          </div>
        </center>
      </div>
      <img id='btno' src={"./Assets/Group 763620.png"} alt="" />
    </>
  )
}
