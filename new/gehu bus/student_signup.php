<!DOCTYPE html>
<html lang="en">
<?php include "head.php" ?>
<?php include "db.php" ?>
<script>
	function check_form()
	{
		pass=document.getElementById('pass').value;
		repass=document.getElementById('repass').value;
		if(pass!=repass)
		{
			alert('The password is wrong');
			return false;
		}
		if(pass.length<7)
		{
			alert('The password is too small');
			return false;
		}
		return true;
	}
</script>
<body>

  <!-- ======= Header ======= -->
  <?php 
	include "header.php"
  ?>
  

  <main id="main">
	<form method="post" onsubmit="return check_form()">
	<section id="hero" class="hero d-flex align-items-center">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col">
        <div class="card card-registration my-4">
          <div class="row g-0">
            <div class="col-xl-6 d-none d-xl-block">
              <img src="assets/img/gehu_signup2.jpeg"
                alt="Sample photo" class="img-fluid"
                style="border-top-left-radius: .25rem; border-bottom-left-radius: .25rem; height:100%" />
            </div>
            <div class="col-xl-6">
              <div class="card-body p-md-5 text-black" style="font-weight:800">
                <h3 class="mb-5 text-uppercase" style="font-weight:900; font-size:28px; text-align:center">Student registration form</h3>
				
                <div class="form-outline mb-4">
					<label class="form-label" for="form3Example8">Student Id</label>
                  <input type="number" id="form3Example8" name="student_id"class="form-control form-control-lg" required />
                </div>
				
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
						<label class="form-label" for="form3Example1m">First name</label>
						<input type="text" id="form3Example1m" name="fname" class="form-control form-control-lg" required />
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
						<label class="form-label" for="form3Example1n">Last name</label>
						<input type="text" id="form3Example1n" name="lname" class="form-control form-control-lg" required />
                    </div>
                  </div>
                </div>
				
				<div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
						<label class="form-label" for="form3Example1m">Password</label>
						<input type="password" id="pass" name="pass" class="form-control form-control-lg" required />
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
						<label class="form-label" for="form3Example1n">Re-Enter Password</label>
						<input type="password" id="repass" class="form-control form-control-lg" required />
                    </div>
                  </div>
                </div>
				
				
				<div class="form-outline mb-4">
					<label class="form-label" for="form3Example8">Choose</label>
					<select id="form3Example1m" name="choose" class="form-select form-control form-control-lg">
						<option selected>Day Scholar</option>
						<option>Hosteller</option>
					</select>
                </div>
				
				
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
						<label class="form-label" for="form3Example1m">City</label>
						<select id="form3Example1m" name="city" class="form-select form-control form-control-lg">
						<option selected>Haldwani</option>
						<option>Bhimtal</option>
					  </select>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
						<label class="form-label" for="form3Example1n">Location</label>
                        <select id="form3Example1m" name="location" class="form-select form-control form-control-lg">
						<option selected>Block</option>
						<option>Katgariya</option>
					  </select>
					</div>
                  </div>
                </div>

                <div class="form-outline mb-4">
					<label class="form-label" for="form3Example99">Course</label>
					<select id="form3Example1m" name="course" class="form-select form-control form-control-lg">
						<option selected>B. Tech</option>
						<option>BCA</option>
					</select>
				</div>
				
				<div class="form-outline mb-4">
					<label class="form-label" for="form3Example99">Branch</label>
					<select id="form3Example1m" name="branch" class="form-select form-control form-control-lg">
						<option selected>Computer Science</option>
						<option>Mechanical</option>
					</select>
				</div>

				
                <div class="form-outline mb-4">
					<label class="form-label" for="form3Example97">Sem</label>
					<select id="form3Example1m" name="sem" class="form-select form-control form-control-lg">
						<option selected>1</option>
						<option>2</option>
					</select>
                </div>

                <div class="d-flex justify-content-end pt-3">
                  <button type="button" class="btn btn-light btn-lg">Reset all</button>
                  <input type="submit" class="btn btn-warning btn-lg ms-2" value="Sign Up" name="signup">
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
	if(isset($_POST['signup']))
	{
		$fname=$_POST['fname'];
		$id=$_POST['student_id'];
		$lname=$_POST['lname'];
		$pass=$_POST['pass'];
		$choose=$_POST['choose'];
		$city=$_POST['city'];
		$location=$_POST['location'];
		$course=$_POST['course'];
		$branch=$_POST['branch'];
		$sem=$_POST['sem'];
		$location=$location.", ".$city;
		$q="select * from student_ds where student_id=$id";
		$result=mysqli_query($con,$q);
		$row=mysqli_num_rows($result);
		if($row==1)
			echo "<script>alert('This student id is already exist');</script>";
		//echo "<script>alert('$sem');</script>";
		else
		{
			$q="insert into student_ds (student_id,fname,lname,pass,course,branch,sem,stop,fees) values($id,'$fname','$lname','$pass','$course','$branch',$sem,'$location','Not Paid');";
			mysqli_query($con,$q);
			echo "<script>
					alert('You have Successfully Signup');
				</script>";
			echo "<script>window.location.replace('./login.php')</script>";
		}
	}
?>