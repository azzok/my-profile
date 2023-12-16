import logo from './logo.svg';
import './App.css';
import Info from './components/Info';
import Banner from './sections/Banner';
import Counts from './sections/Counts';

import Service from './sections/Service';
import Recommendations from './sections/Recommendations';
import Works from './sections/Works';
import History from './sections/History';
import Contact from './sections/Contact';
import Brand from './sections/Brand';
import Copyright from './sections/Copyright';


import Nav from './components/Nav';
import Language from './components/Language';


function App() {
  return (
    <div className="art-app">
      {/* <!-- mobile top bar --> */}
      <div className="art-mobile-top-bar"></div>
      {/* <!-- app wrapper --> */}
      <div className="art-app-wrapper">
          {/* <!-- app container end --> */}
          <div className="art-app-container">
            <Info />
            {/* <!-- content --> */}
            <div className="art-content">
                {/* <!-- curtain --> */}
                <div className="art-curtain"></div>
                {/* <!-- top background --> */}
                <div className="art-top-bg" style={{ backgroundImage: `url('./assets/img/bg.jpg')`}}>
                  {/* <!-- overlay --> */}
                  <div className="art-top-bg-overlay"></div>
                  {/* <!-- overlay end --> */}
                </div>
                {/* <!-- top background end --> */}
                {/* <!-- swup container --> */}
                <div className="transition-fade" id="swup">
                  {/* <!-- scroll frame --> */}
                  <div id="scrollbar" className="art-scroll-frame">
          

                  <Banner />
                  <Counts />
                  <Service />
                  <Recommendations />
                  <Works />
                  <History />
                  <Contact />
                  <Brand />
                  <Copyright />

        
                  </div>
                  {/* <!-- scroll frame end --> */}
                </div>
                {/* <!-- swup container end --> */}
            </div>
            {/* <!-- content end --> */}
            {/* <!-- menu bar --> */}
            <div className="art-menu-bar">
                {/* <!-- menu bar frame --> */}
                <div className="art-menu-bar-frame">
                  {/* <!-- menu bar header --> */}
                  <div className="art-menu-bar-header">
                      {/* <!-- menu bar button --> */}
                      <a className="art-menu-bar-btn" href="#.">
                        {/* <!-- icon --> */}
                        <span></span>
                      </a>
                      {/* <!-- menu bar button end --> */}
                  </div>
                  {/* <!-- menu bar header end --> */}
                  {/* <!-- current page title --> */}
                  <div className="art-current-page"></div>
                  {/* <!-- current page title end --> */}
                  {/* <!-- scroll frame --> */}
                  <div className="art-scroll-frame">
                      <Nav />
              
                      <Language />

                  </div>
                  {/* <!-- scroll frame end --> */}
                </div>
                {/* <!-- menu bar frame --> */}
            </div>
            {/* <!-- menu bar end --> */}
          </div>
          {/* <!-- app container end --> */}
      </div>
      {/* <!-- app wrapper end --> */}
      {/* <!-- preloader --> */}

      {/* <div className="art-preloader">
          <div className="art-preloader-content">
            <h4>Loading...</h4>
            <div id="preloader" className="art-preloader-load"></div>
          </div>
      </div> */}

      {/* <!-- preloader end --> */}
    </div>
  );
}

export default App;
