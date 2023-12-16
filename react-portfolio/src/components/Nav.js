import React, { useState } from 'react'

export default function Nav() {

  const [currentTab, setCurrentTab ] = useState('Projects')
  return (
    <nav id="swupMenu">
      {/* <!-- menu list --> */}
      <ul className="main-menu">
        {/* <!-- menu item --> */}
        <li className="menu-item {(currentTab  == 'index') ? 'current-menu-item':''}"><a href="index.php">Home</a></li>
        {/* <!-- menu item --> */}
        {/* <!-- <li className="menu-item menu-item-has-children {(currentTab  == 'Projects') ? 'current-menu-item':''}"> 
          <a href="projects.php">Projects</a>
          <ul className="sub-menu">
            <li className="menu-item"><a href="projects-bonaventura.php">Bonaventura</a></li>
            <li className="menu-item"><a href="projects-bonaventura.php">Nosh</a></li>
            <li className="menu-item"><a href="projects-bonaventura.php">Twake</a></li>
          </ul>
        </li> */}
        {/* <!-- menu item --> */}
        <li className="menu-item {(currentTab  == 'Projects') ? 'current-menu-item':''}"><a href="projects.php">Projects</a></li>
        {/* <!-- menu item --> */}
        <li className="menu-item {(currentTab  == 'History') ? 'current-menu-item':''}"><a href="history.php">History</a></li>
        {/* <!-- menu item --> */}
        <li className="menu-item {(currentTab  == 'Contact') ? 'current-menu-item':''}"><a href="contact.php">Contact</a></li>
        {/* <!-- menu item --> */}
        {/* <!-- <li className="menu-item menu-item-has-children"> 
          <a href="#.">Blog</a>
          <ul className="sub-menu">
            <li className="menu-item"><a href="blog-2-col.html">2 column</a></li>
            <li className="menu-item"><a href="blog-3-col.html">3 column</a></li>
            <li className="menu-item"><a href="blog-post.html">Publication</a></li>
          </ul>
        </li>
        <li className="menu-item"><a href="onepage.html" target="_blank">Onepage</a></li> */}
      </ul>
      {/* <!-- menu list end --> */}
    </nav>
  )
}
