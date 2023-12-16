import React from 'react'

export default function Info() {
  return (
    <div className="art-info-bar">

      {/* <!-- menu bar frame --> */}
      <div className="art-info-bar-frame">

        {/* <!-- info bar header --> */}
        <div className="art-info-bar-header">
          {/* <!-- info bar button --> */}
          <a className="art-info-bar-btn" href="#.">
            {/* <!-- icon --> */}
            <i className="fas fa-ellipsis-v"></i>
          </a>
          {/* <!-- info bar button end --> */}
        </div>
        {/* <!-- info bar header end --> */}

        {/* <!-- info bar header --> */}
        <div className="art-header">
          {/* <!-- avatar --> */}
          <div className="art-avatar">
            <a data-fancybox="avatar" href="img/my-face.jpg" className="art-avatar-curtain">
              <img src="img/my-face.jpg" alt="avatar" />
              <i className="fas fa-expand"></i>
            </a>
            {/* <!-- available --> */}
            <div className="art-lamp-light">
              {/* <!-- add class 'art-not-available' if not available--> */}
              <div className="art-available-lamp"></div>
            </div>
          </div>
          {/* <!-- avatar end --> */}
          {/* <!-- name --> */}
          <h5 className="art-name mb-10"><a href="index.php">ASHOKKUMAR P</a></h5>
          {/* <!-- post --> */}
          <div className="art-sm-text">Back-end Developer, <br/>Mobile App Developer,<br/>Open-source coustomizer, </div>
        </div>
        {/* <!-- info bar header end --> */}

        {/* <!-- scroll frame --> */}
        <div id="scrollbar2" className="art-scroll-frame">

          {/* <!-- info bar about --> */}
          <div className="art-table p-15-15">
            {/* <!-- about text --> */}
            <ul>
              {/* <!-- country --> */}
              <li>
                <h6>Qualification:</h6><span>B.E</span>
              </li>
              {/* <!-- country --> */}
              <li>
                <h6>Residence:</h6><span>India</span>
              </li>
              {/* <!-- city --> */}
              <li>
                <h6>City:</h6><span>Tamilnadu</span>
              </li>
              {/* <!-- age --> */}
              <li>
                <h6>Age:</h6><span>27</span>
              </li>
            </ul>
          </div>
          {/* <!-- info bar about end --> */}

          {/* <!-- divider --> */}
          <div className="art-ls-divider"></div>

          {/* <!-- language skills --> */}
          <div className="art-lang-skills p-30-15">

            {/* <!-- skill --> */}
            <div className="art-lang-skills-item">
              <div id="circleprog1" className="art-cirkle-progress"></div>
              {/* <!-- title --> */}
              <h6>Tamil</h6>
            </div>
            {/* <!-- skill end --> */}

            {/* <!-- skill --> */}
            <div className="art-lang-skills-item">
              <div id="circleprog2" className="art-cirkle-progress"></div>
              {/* <!-- title --> */}
              <h6>English</h6>
            </div>
            {/* <!-- skill end --> */}

            {/* <!-- skill --> */}
            {/* <!-- <div className="art-lang-skills-item"> 
              <div id="circleprog3" className="art-cirkle-progress"></div>
              <h6>Spanish</h6>
            </div> --> */}
            {/* <!-- skill end --> */}

          </div>
          {/* <!-- language skills end --> */}

          {/* <!-- divider --> */}
          <div className="art-ls-divider"></div>

          {/* <!-- hard skills --> */}
          <div className="art-hard-skills p-30-15">

            {/* <!-- skill --> */}
            <div className="art-hard-skills-item">
              <div className="art-skill-heading">
                {/* <!-- title --> */}
                <h6>html</h6>
              </div>
              {/* <!-- progressbar frame --> */}
              <div className="art-line-progress">
                {/* <!-- progressbar --> */}
                <div id="lineprog1"></div>
              </div>
              {/* <!-- progressbar frame end --> */}
            </div>
            {/* <!-- skill end --> */}

            {/* <!-- skill --> */}
            <div className="art-hard-skills-item">
              <div className="art-skill-heading">
                {/* <!-- title --> */}
                <h6>CSS</h6>
              </div>
              {/* <!-- progressbar frame --> */}
              <div className="art-line-progress">
                {/* <!-- progressbar --> */}
                <div id="lineprog2"></div>
              </div>
              {/* <!-- progressbar frame end --> */}
            </div>
            {/* <!-- skill end --> */}

            {/* <!-- skill --> */}
            <div className="art-hard-skills-item">
              <div className="art-skill-heading">
                {/* <!-- title --> */}
                <h6>Js</h6>
              </div>
              {/* <!-- progressbar frame --> */}
              <div className="art-line-progress">
                {/* <!-- progressbar --> */}
                <div id="lineprog3"></div>
              </div>
              {/* <!-- progressbar frame end --> */}
            </div>
            {/* <!-- skill end --> */}

            {/* <!-- skill --> */}
            <div className="art-hard-skills-item">
              <div className="art-skill-heading">
                {/* <!-- title --> */}
                <h6>PHP</h6>
              </div>
              {/* <!-- progressbar frame --> */}
              <div className="art-line-progress">
                {/* <!-- progressbar --> */}
                <div id="lineprog4"></div>
              </div>
              {/* <!-- progressbar frame end --> */}
            </div>
            {/* <!-- skill end --> */}

            {/* <!-- skill --> */}
            <div className="art-hard-skills-item">
              <div className="art-skill-heading">
                {/* <!-- title --> */}
                <h6>Wordpress</h6>
              </div>
              {/* <!-- progressbar frame --> */}
              <div className="art-line-progress">
                {/* <!-- progressbar --> */}
                <div id="lineprog5"></div>
              </div>
              {/* <!-- progressbar frame end --> */}
            </div>
            {/* <!-- skill end --> */}

          </div>
          {/* <!-- language skills end --> */}

          {/* <!-- divider --> */}
          <div className="art-ls-divider"></div>

          {/* <!-- knowledge list --> */}
          <ul className="art-knowledge-list p-15-0">
            {/* <!-- list item --> */}
            <li>PHP, MySQL, MongoDB</li>
            {/* <!-- list item --> */}
            <li>React JS, Angular CLI</li>
            {/* <!-- list item --> */}
            <li>NodeJS, ExpressJS</li>
            {/* <!-- list item --> */}
            <li>Ionic</li>
            {/* <!-- list item --> */}
            <li>Laravel, Wordpress</li>
            {/* <!-- list item --> */}
            <li>GIT knowledge, Docker, Jenkins</li>
          </ul>
          {/* <!-- knowledge list end --> */}

          {/* <!-- divider --> */}
          <div className="art-ls-divider"></div>

          {/* <!-- links frame --> */}
          <div className="art-links-frame p-15-15">

            {/* <!-- download cv button --> */}
            <a href="files/azk-sep-it-exc.pdf" className="art-link" download>Download cv PDF <i className="fas fa-download"></i></a>

            {/* <!-- download cv button --> */}
            <a href="files/full_it_resume.docx" className="art-link" download>Download cv DOCX <i className="fas fa-download"></i></a>

          </div>
          {/* <!-- links frame end --> */}

        </div>
        {/* <!-- scroll frame end --> */}

        {/* <!-- sidebar social --> */}
        <div className="art-ls-social">
          {/* <!-- social link --> */}
          <a href="#." target="_blank"><i className="fab fa-linkedin-in"></i></a>
          {/* <!-- social link --> */}
          <a href="https://azzok.herokuapp.com/" target="_blank"><i className="fab fa-dribbble"></i></a>
          {/* <!-- social link --> */}
          <a href="https://stackoverflow.com/users/8682924/azzok" target="_blank"><i className="fab fa-stack-overflow"></i></a>
          {/* <!-- social link --> */}
          <a href="https://github.com/azzok" target="_blank"><i className="fab fa-github"></i></a>
          {/* <!-- social link --> */}
          <a href="#." target="_blank"><i className="fab fa-twitter"></i></a>
        </div>
        {/* <!-- sidebar social end --> */}

      </div>

    </div>
  )
}
