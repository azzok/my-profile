<?php
require_once("include/header.php");
$menu="Contact";
?>

  <!-- app -->
  <div class="art-app">

    <!-- mobile top bar -->
    <div class="art-mobile-top-bar"></div>

    <!-- app wrapper -->
    <div class="art-app-wrapper">

      <!-- app container end -->
      <div class="art-app-container">

        <?php require_once('include/info.php'); ?>

        <!-- content -->
        <div class="art-content">

          <!-- curtain -->
          <div class="art-curtain"></div>

          <!-- top background -->
          <div class="art-top-bg" style="background-image: url(img/bg.jpg)">
            <!-- overlay -->
            <div class="art-top-bg-overlay"></div>
            <!-- overlay end -->
          </div>
          <!-- top background end -->

         <!-- swup container -->
         <div class="transition-fade" id="swup">

<!-- scroll frame -->
<div id="scrollbar" class="art-scroll-frame">

  <!-- container -->
  <div class="container-fluid">

    <!-- row -->
    <div class="row p-30-0">

      <!-- col -->
      <div class="col-lg-12">

        <!-- section title -->
        <div class="art-section-title">
          <!-- title frame -->
          <div class="art-title-frame">
            <!-- title -->
            <h4>Contact Information</h4>
          </div>
          <!-- title frame end -->
        </div>
        <!-- section title end -->

      </div>
      <!-- col end -->
      <!-- col -->
      <div class="col-lg-4">
        <!-- contact card -->
        <div class="art-a art-card">
          <div class="art-table p-15-15">
            <ul>
              <li>
                <h6>Country:</h6><span>India</span>
              </li>
              <li>
                <h6>City:</h6><span>Tamilnadu</span>
              </li>

              <!-- <li>
                <h6>Streat:</h6><span>20 Dellbank Rd</span>
              </li> -->
            </ul>
          </div>
        </div>
        <!-- contact card end -->
      </div>
      <!-- col end -->
      <!-- col -->
      <div class="col-lg-4">
        <!-- contact card -->
        <div class="art-a art-card">
          <div class="art-table p-15-15">
            <ul>
              <li>
                <h6>Email:</h6><span>azzok17@gmail.com</span>
              </li>
              <li>
                <h6>Telegram:</h6><span>@azzok005</span>
              </li>
              <!-- <li>
                <h6>Skype:</h6><span>azzok</span>
              </li> -->
            </ul>
          </div>
        </div>
        <!-- contact card end -->
      </div>
      <!-- col end -->
      <!-- col -->
      <div class="col-lg-4">
        <!-- contact card -->
        <div class="art-a art-card">
          <div class="art-table p-15-15">
            <ul>
              <li>
                <h6>Support service:</h6><span>+91 81240 38005</span>
              </li>
              <li>
                <!-- <h6>Office:</h6><span>+78 (098) 326 11 22</span> -->
              </li>
              <li>
                <h6>Personal:</h6><span>+91 81240 38005</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- contact card end -->

      </div>
      <!-- col end -->

      <!-- col -->
      <div class="col-lg-12">

        <!-- section title -->
        <div class="art-section-title">
          <!-- title frame -->
          <div class="art-title-frame">
            <!-- title -->
            <h4>Get in touch</h4>
          </div>
          <!-- title frame end -->
        </div>
        <!-- section title end -->

        <!-- contact form frame -->
        <div class="art-a art-card">

          <!-- contact form -->
          <form id="form" class="art-contact-form">
            <!-- form field -->
            <div class="art-form-field">
              <!-- name input -->
              <input id="name" name="name" class="art-input" type="text" placeholder="Name" required>
              <!-- label -->
              <label for="name"><i class="fas fa-user"></i></label>
            </div>
            <!-- form field end -->
            <!-- form field -->
            <div class="art-form-field">
              <!-- email input -->
              <input id="email" name="email" class="art-input" type="email" placeholder="Email" required>
              <!-- label -->
              <label for="email"><i class="fas fa-at"></i></label>
            </div>
            <!-- form field end -->
            <!-- form field -->
            <div class="art-form-field">
              <!-- message textarea -->
              <textarea id="message" name="text" class="art-input" placeholder="Message" required></textarea>
              <!-- label -->
              <label for="message"><i class="far fa-envelope"></i></label>
            </div>
            <!-- form field end -->
            <!-- button -->
            <div class="art-submit-frame">
              <button class="art-btn art-btn-md art-submit" type="submit"><span>Send message</span></button>
              <!-- success -->
              <div class="art-success">Success <i class="fas fa-check"></i></div>
            </div>
          </form>
          <!-- contact form end -->

        </div>
        <!-- contact form frame end -->

      </div>
      <!-- col end -->

    </div>
    <!-- row end -->

  </div>
  <!-- container end -->

  <!-- container -->
  <div class="container-fluid">

    <!-- row -->
    <div class="row">

      <!-- col -->
      <div class="col-6 col-lg-3">
        <!-- brand -->
        <img class="art-brand" src="img/brands/1.png" alt="brand">
      </div>
      <!-- col end -->

      <!-- col -->
      <div class="col-6 col-lg-3">
        <!-- brand -->
        <img class="art-brand" src="img/brands/2.png" alt="brand">
      </div>
      <!-- col end -->

      <!-- col -->
      <div class="col-6 col-lg-3">
        <!-- brand -->
        <img class="art-brand" src="img/brands/3.png" alt="brand">
      </div>
      <!-- col end -->

      <!-- col -->
      <div class="col-6 col-lg-3">
        <!-- brand -->
        <img class="art-brand" src="img/brands/1.png" alt="brand">
      </div>
      <!-- col end -->

    </div>
    <!-- row end -->

  </div>
  <!-- container end -->

 <?php include('include/copyright.php'); ?>

</div>
<!-- scroll frame end -->

</div>
<!-- swup container end -->

        </div>
        <!-- content end -->

        <!-- menu bar -->
        <div class="art-menu-bar">

          <!-- menu bar frame -->
          <div class="art-menu-bar-frame">

            <!-- menu bar header -->
            <div class="art-menu-bar-header">
              <!-- menu bar button -->
              <a class="art-menu-bar-btn" href="#.">
                <!-- icon -->
                <span></span>
              </a>
              <!-- menu bar button end -->
            </div>
            <!-- menu bar header end -->

            <!-- current page title -->
            <div class="art-current-page"></div>
            <!-- current page title end -->

            <!-- scroll frame -->
            <div class="art-scroll-frame">

                <?php include('include/nav.php'); ?>

              <!-- language change -->
              <ul class="art-language-change">
                <!-- language item -->
                <!-- <li><a href="/tn/index.php">TN</a></li> -->
                <!-- language item -->
                <li class="art-active-lang"><a href="#.">EN</a></li>
              </ul>
              <!-- language change end -->

            </div>
            <!-- scroll frame end -->

          </div>
          <!-- menu bar frame -->

        </div>
        <!-- menu bar end -->

      </div>
      <!-- app container end -->

    </div>
    <!-- app wrapper end -->

    <!-- preloader -->
    <div class="art-preloader">
      <!-- preloader content -->
      <div class="art-preloader-content">
        <!-- title -->
        <h4>Loading...</h4>
        <!-- progressbar -->
        <div id="preloader" class="art-preloader-load"></div>
      </div>
      <!-- preloader content end -->
    </div>
    <!-- preloader end -->

  </div>
  <!-- app end -->

<?php require_once('include/footer.php'); ?>