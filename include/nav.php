              <!-- menu -->
              <nav id="swupMenu">
                <!-- menu list -->
                <ul class="main-menu">
                  <!-- menu item -->
                  <li class="menu-item <?= (@$menu == 'index') ? 'current-menu-item':'' ?>"><a href="index.php">Home</a></li>
                  <!-- menu item -->
                  <li class="menu-item menu-item-has-children <?= (@$menu == 'Projects') ? 'current-menu-item':'' ?>">
                    <a href="projects.php">Projects</a>
                    <!-- sub menu -->
                    <ul class="sub-menu">
                      <li class="menu-item"><a href="portfolio-2-col.html">Bonaventura</a></li>
                      <li class="menu-item"><a href="portfolio-3-col.html">Nosh</a></li>
                      <li class="menu-item"><a href="portfolio-3-col.html">Twake</a></li>
                      <!-- <li class="menu-item"><a href="portfolio-2-col-masonry.html">2 column masonry</a></li>
                      <li class="menu-item"><a href="portfolio-3-col-masonry.html">3 column masonry</a></li>
                      <li class="menu-item"><a href="portfolio-single.html">Single project</a></li>
                      <li class="menu-item"><a href="portfolio-single-2.html">Single project 2</a></li> -->
                    </ul>
                    <!-- sub menu end -->
                  </li>
                  <!-- menu item -->
                  <li class="menu-item <?= (@$menu == 'History') ? 'current-menu-item':'' ?>"><a href="history.php">History</a></li>
                  <!-- menu item -->
                  <li class="menu-item <?= (@$menu == 'Contact') ? 'current-menu-item':'' ?>"><a href="contact.php">Contact</a></li>
                  <!-- menu item -->
                  <!-- <li class="menu-item menu-item-has-children">
                    <a href="#.">Blog</a>
                    <ul class="sub-menu">
                      <li class="menu-item"><a href="blog-2-col.html">2 column</a></li>
                      <li class="menu-item"><a href="blog-3-col.html">3 column</a></li>
                      <li class="menu-item"><a href="blog-post.html">Publication</a></li>
                    </ul>
                  </li>
                  <li class="menu-item"><a href="onepage.html" target="_blank">Onepage</a></li> -->
                </ul>
                <!-- menu list end -->
              </nav>
              <!-- menu end -->