<?php
	session_start();
	//print_r($_SESSION);
	if(!isset($_SESSION['id']) || $_SESSION['id']=='')
		die("<script>alert('Invalid URL');window.location.replace('../')</script>");
	$id=$_SESSION['id'];
	$name=$_SESSION['name'];
?>

<!DOCTYPE html>
<html lang="en">
<?php include "head.php" ?>
<?php include "db.php" ?>
<body>

  <!-- ======= Header ======= -->
  <?php 
	include "header.php"
  ?>
  <!-- ======= Hero Section ======= -->
  <section id="hero" class="hero d-flex align-items-center">
    <div class="container">
      <div class="row gy-4 d-flex justify-content-between">
        <div class="d-flex flex-column justify-content-center">
		  <h2 data-aos="fade-up">Select Your Seat</h2>
		  <br>

	<?php include "bus1.php" ?>
        
			
			
          <div class="row gy-3" data-aos="fade-up" data-aos-delay="400">

            <div class="col-lg-4 col-6">
              <div class="stats-item text-center w-100 h-100">
                <span data-purecounter-start="0" data-purecounter-end="40" data-purecounter-duration="3" class="purecounter"></span>
                <p>Total Sheet</p>
              </div>
            </div><!-- End Stats Item -->

            <div class="col-lg-4 col-6">
              <div class="stats-item text-center w-100 h-100">
                <span data-purecounter-start="0" data-purecounter-end="30" data-purecounter-duration="3" class="purecounter"></span>
                <p>Seat Booked</p>
              </div>
            </div><!-- End Stats Item -->

            <div class="col-lg-4 col-6">
              <div class="stats-item text-center w-100 h-100">
                <span data-purecounter-start="0" data-purecounter-end="10" data-purecounter-duration="3" class="purecounter"></span>
                <p>Seat Left</p>
              </div>
            </div><!-- End Stats Item -->

          </div>
        </div>

      </div>
    </div>
  </section><!-- End Hero Section -->

  <main id="main">

    
    
    
  </main><!-- End #main -->

  <!-- ======= Footer ======= -->
	<?php include "footer.php"?>
  <!-- End Footer -->

  
  <?php include "end.php"?>
</body>

</html>

