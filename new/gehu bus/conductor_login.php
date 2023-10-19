<?php
	session_start();
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
  

  <main id="main">
		
	<form method="post">
	<section id="hero" class="hero d-flex align-items-center">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col">
        <div class="card card-registration my-4">
          <div class="row g-0">
            <div class="col-xl-6 d-none d-xl-block">
              <img src="assets/img/main.png"
                alt="Sample photo" class="img-fluid"
                style="border-top-left-radius: .25rem; border-bottom-left-radius: .25rem; height:100%; width:100%" />
            </div>
			
            <div class="col-xl-6">
              <div class="card-body p-md-5 text-black" style="font-weight:800">
                <h3 class="mb-5 text-uppercase" style="font-weight:900; font-size:28px; text-align:center">Conductor Login Form</h3>

                <div class="form-outline mb-4">
				<label class="form-label" for="form3Example8">Conductor Id</label>
                  <input type="number" id="form3Example8" class="form-control form-control-lg" name="id" required />
                </div>
				
				
                <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example8">Password</label>
                  <input type="password" id="form3Example8" class="form-control form-control-lg" name="pass" required />
                </div>
				
				
                <div class="d-flex justify-content-end pt-3">
                  <button type="button" class="btn btn-light btn-lg">Reset</button>
                  <input type="submit" class="btn btn-warning btn-lg ms-2" name="login" value="Login" >
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
	
	</form>
  </main><!-- End #main -->

  <!-- ======= Footer ======= -->
	<?php include "footer.php"?>
  <!-- End Footer -->

  <?php include "end.php"?>
</body>
</html>

<?php
	if(isset($_POST['login']))
	{
		$id=$_POST['id'];
		$pass=$_POST['pass'];
		$q="select * from student_ds where student_id=$id and pass='$pass'; ";
		$result=mysqli_query($con,$q);
		$rows=mysqli_num_rows($result);
		if($rows==0)
			die("<script>alert('Please enter the correct username or password');window.location('login.php');</script>");
		
		$var=mysqli_fetch_array($result);
		$_SESSION['id']=$id;
		$_SESSION['name']=$var['fname']." ".$var['lname'];
		$_SESSION['name']=strtoupper($_SESSION['name']);
		//echo "<script>alert('",$_SESSION['name'],"');</script>";
		echo "<script>window.location.replace('student/index.php');</script>";
		mysqli_close($con);
	}
?>