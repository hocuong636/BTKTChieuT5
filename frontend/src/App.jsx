import './App.css'
import logo from "./assets/image/logo.gif"
import slogan from "./assets/image/slogan.gif"
import btn1 from "./assets/image/btn_1.gif"
import btn1Over from "./assets/image/btn_1_over.gif"
import btn2 from "./assets/image/btn_2.gif"
import btn2Over from "./assets/image/btn_2_over.gif"
import btn3 from "./assets/image/btn_3.gif"
import btn3Over from "./assets/image/btn_3_over.gif"
import btn4 from "./assets/image/btn_4.gif"
import btn4Over from "./assets/image/btn_4_over.gif"
import btn5 from "./assets/image/btn_5.gif"
import btn5Over from "./assets/image/btn_5_over.gif"
import slogan2 from "./assets/image/slogan2.gif"
import welcome from "./assets/image/img_welcome.jpg"
import img_prod from "./assets/image/img_prod.jpg"
import img_prod_13 from "./assets/image/img_prod-13.jpg"
import img_prod_14 from "./assets/image/img_prod-14.jpg"
function App() {

  return (
    <div id="container">
      <div id="topLine"></div>
      <div id="logoPan"> <img src={logo} width="192" height="92" alt="" id="logo" /> <img src={slogan} width="297" height="46" alt="" id="slogan" /> </div>
      <div id="menuPan">
        <ul class="menu">
          <li class="btn_1"><a href="#">home page</a></li>
          <li class="line"></li>
          <li class="btn_2"><a href="#">about us</a></li>
          <li class="line"></li>
          <li class="btn_3"><a href="#">bouquets</a></li>
          <li class="line"></li>
          <li class="btn_4"><a href="#">specials</a></li>
          <li class="line"></li>
          <li class="btn_5"><a href="#">contacts</a></li>
        </ul>
      </div>
      <div id="header"> <img src={slogan2} width="192" height="70" alt="" id="slogan2" /></div>
      <div id="content">
        <div id="leftPan">
          <div id="welcome">
            <h2></h2>
            <img src={welcome} width="172" height="56" alt="" />
            <p class="headline">Nam eu nulla. Donec lobortis purus vel urna. Nunc laoreet lacinia nunc. </p>
            <p>Nam eu nulla. Donec lobortis purus vel urna. Nunc laoreet lacinia nunc. In volutpat sodales ipsum. Sed vestibulum. Integer in ante. Sed Nunc laoreet lacinia nunc. In volutpat sodales </p>
          </div>
        </div>
        <div id="rightPan">
          <div id="featured">
            <h2></h2>
            <p class="headline">Nam eu nulla. Donec lobortis purus vel urna. Nunc laoreet lacinia nunc.Nam eu nulla. Donec lobortis purus vel urna. Nunc laoreet lacinia nunc. In volutpat sodales ipsum. </p>
            <div class="featItem" id="i01"> <img src={img_prod} width="116" height="125" alt="" />
              <p><span class="headline2">Morbi volutpat leo in</span><br />
                <a href="#">Nam eu nulla. Donec</a><br />
                lobortis purus vel urna. Nunc laoreet lacinia nunc</p>
            </div>
            <div class="featItem" id="i02"> <img src={img_prod_13} width="116" height="125" alt="" />
              <p><span class="headline2">Morbi volutpat leo in</span><br />
                <a href="#">Nam eu nulla. Donec</a><br />
                lobortis purus vel urna. Nunc laoreet lacinia nunc</p>
            </div>
            <div class="featItem" id="i03"> <img src={img_prod_14} width="116" height="125" alt="" />
              <p><span class="headline2">Morbi volutpat leo in</span><br />
                <a href="#">Nam eu nulla. Donec</a><br />
                lobortis purus vel urna. Nunc laoreet lacinia nunc</p>
            </div>
            <div class="clear"></div>
          </div>
        </div>
        <div class="clear" id="end"></div>
      </div>
      <div id="footer">
        <p><a href="#">HOME PAGE</a> | <a href="#">ABOUT US</a> | <a href="#">BOUTQUETS</a> | <a href="#">SPECIALS</a> | <a href="#">NEWS</a> | <a href="#">CONTACTS</a><br />
          Copyright &copy; Cuong Company | Design by <a href="http://freshtemplates.com/">Website Templates</a></p>
      </div>
      <div style={{ textAlign: "center" }}>This template  downloaded form <a href='http://all-free-download.com/free-website-templates/'>free website templates</a></div>
    </div>
  )
}

export default App
