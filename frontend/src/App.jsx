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
    </div>
  )
}

export default App
