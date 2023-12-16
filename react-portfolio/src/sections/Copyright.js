import React from 'react'

export default function Copyright() {
  return (
    <div className="container-fluid">
        {/* <!-- footer --> */}
        <footer>
            {/* <!-- copyright --> */}
            <div>©{ new Date().toDateString() } Ashokkumar P - Web developer</div>
            {/* <!-- author ( Please! Do not delete it. You are awesome! :) --> */}
            <div>&#160; <a href="https://grinfotech.com/" target="_blank">GR Infotech</a></div>
        </footer>
        {/* <!-- footer end --> */}
    </div>
  )
}
