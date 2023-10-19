<header id="header" class="header d-flex align-items-center fixed-top">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <img src="assets/img/logo1.png" alt=""> 
        <h1>GEHU BUS</h1> 
      </a>

      <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
      <nav id="navbar" class="navbar">
        <ul>
          <li><a href="index.php">Home</a></li>
          <li><a href="book_seat.php">Book Seat</a></li>
          <li><a href="services.html">Pricing</a></li>
          <li><a href="pricing.html">Team</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="contact.html" class="active">Welcome, <?php echo $name;?></a></li>
          <li><a class="get-a-quote" href="logout.php"><i class="bi bi-gear-fill" style="font-size: 2rem; color: rgb(0, 0, 128);"></i></a></li>
        </ul>
      </nav><!-- .navbar -->

    </div>
  </header><!-- End Header -->
  <!-- End Header -->
