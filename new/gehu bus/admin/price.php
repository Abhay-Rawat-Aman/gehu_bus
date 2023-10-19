<?php
	include "db.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>GEHU Bhimtal Bus | Admin</title>

  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css">
  <!-- overlayScrollbars -->
  <link rel="stylesheet" href="plugins/overlayScrollbars/css/OverlayScrollbars.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="dist/css/adminlte.min.css">
</head>
<body class="hold-transition dark-mode sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
<div class="wrapper">

  <!-- Preloader -->
  <?php
		include "preloader.php";
  ?>
  
  <!-- Navbar -->
	<?php
		include "top_nav.php";
	?>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  

  <?php
		include "sidebar.php";
	?>
  <!-- Content Wrapper. Contains page content -->
  
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Admin Panel - Price</h1>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
	
	<section class="content">
      <div class="container-fluid">
	  
		<div class="row">
          <!-- left column -->
          <div class="col-md-12">
            <!-- jquery validation -->
            <div class="card card-primary">
              <div class="card-header">
                <h2 class="card-title">Add New Location Form</h2>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form id="quickForm" method="post">
                <div class="card-body">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Location</label>
                    <input type="text" name="location" class="form-control" required id="exampleInputEmail1" placeholder="Enter Location">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Price</label>
                    <input type="number" name="price" class="form-control" required id="exampleInputPassword1" placeholder="Enter Price">
                  </div>
				  
                </div>
                <!-- /.card-body -->
                <div class="card-footer">
                  <button type="submit" class="btn btn-primary" name="add_price">Submit</button>
                </div>
              </form>
            </div>
            <!-- /.card -->
            </div>
          <!--/.col (left) -->
          <!-- right column -->
          <div class="col-md-6">

          </div>
          <!--/.col (right) -->
        </div>
        <!-- /.row -->
      
        <div class="row">
          <div class="col-12">
            <div class="card">
			<div class="card-header">
				<h3 class="card-title">Locations with their Prices
				</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="example2" class="table table-bordered table-hover">
                  <thead>
                  <tr>
                    <th>SNo.</th>
                    <th>Loaction</th>
                    <th>Price</th>
					<th>Modify</th>
                  </tr>
                  </thead>
                  <tbody>
				  <?php
					$query="select * from price";
					$result=mysqli_query($con,$query);
					$num=mysqli_num_rows($result);
					for($i=0;$i<$num;$i++)
					{
						$row=mysqli_fetch_array($result);
						echo "aman";
				  ?>
				  <form method="post">
                    <td><?php echo $i+1?></td>
					<td><?php echo $row['location']?></td>
                    <td><?php echo $row['price']?></td>
					<td>
					  <button type="submit" class="btn btn-block btn-warning"  name="edit" value=<?php echo $row['id']?>>Edit</button>
					</td>
				</form>
                  </tr>
				  <?php
					}
				  ?>
                  </tbody>
                 </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->

          </div>
          <!-- /.col -->
		  
        </div>
        <!-- /.row -->
	
		
		<div class="row" style="display:none" id="dnone">
          <!-- left column -->
		  <?php
		if(isset($_POST['edit']))
		{
			$fun=$_POST['edit'];
			$GLOBAL['val']=$fun;
			echo "<script>document.getElementById('dnone').style.display='block';</script>";
			$query="select * from price where id='$fun'";
			$result=mysqli_query($con,$query);
			$rows=mysqli_num_rows($result);
			$ans=mysqli_fetch_array($result);
			$l=$ans['location'];
			$r=$ans['price'];
		}
		?>
          <div class="col-md-12">
            <!-- jquery validation -->
            <div class="card card-secondary">
              <div class="card-header">
                <h2 class="card-title">Edit Location Form</h2>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form id="quickForm" method="post">
                <div class="card-body">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Location</label>
                    <input type="text" name="location_edit" value=<?php echo $l?> class="form-control" required id="exampleInputEmail1" placeholder="Enter Location">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Price</label>
                    <input type="number" name="price_edit" value=<?php echo $r?> class="form-control" required id="exampleInputPassword1" placeholder="Enter Price">
                  </div>
				  
                </div>
                <!-- /.card-body -->
                <div class="card-footer">
                  <button type="submit" class="btn btn-primary" name="edit_price" value=<?php echo $fun?>>Submit</button>
                </div>
              </form>
            </div>
            <!-- /.card -->
            </div>
          <!--/.col (left) -->
          <!-- right column -->
          <div class="col-md-6">

          </div>
          <!--/.col (right) -->
        </div>
        <!-- /.row -->
      
		
      </div>
      <!-- /.container-fluid -->
    </section>
    
	
	<!-- /.content -->
  </div>
  <!-- /.content-wrapper -->

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>
  <!-- /.control-sidebar -->

  <!-- Main Footer -->
  <?php
	include "footer.php";
  ?>
</div>
<!-- ./wrapper -->

<!-- REQUIRED SCRIPTS -->
<!-- jQuery -->
<script src="plugins/jquery/jquery.min.js"></script>
<!-- Bootstrap -->
<script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- overlayScrollbars -->
<script src="plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>
<!-- AdminLTE App -->
<script src="dist/js/adminlte.js"></script>

<!-- PAGE PLUGINS -->
<!-- jQuery Mapael -->
<script src="plugins/jquery-mousewheel/jquery.mousewheel.js"></script>
<script src="plugins/raphael/raphael.min.js"></script>
<script src="plugins/jquery-mapael/jquery.mapael.min.js"></script>
<script src="plugins/jquery-mapael/maps/usa_states.min.js"></script>
<!-- ChartJS -->
<script src="plugins/chart.js/Chart.min.js"></script>

<!-- AdminLTE for demo purposes -->
<script src="dist/js/demo.js"></script>
<!-- AdminLTE dashboard demo (This is only for demo purposes) -->
<script src="dist/js/pages/dashboard2.js"></script>
</body>
</html>


<?php
	if(isset($_POST['add_price']))
	{
		$loc=$_POST['location'];
		$pr=$_POST['price'];
		$query="select count(*) from price";
		$result=mysqli_query($con,$query);
		$row=mysqli_num_rows($result);
		$query="insert into price values ($row+1,'$loc',$pr);";
		mysqli_query($con,$query);
		echo "<script>alert('The location is success fully add');</script>";
		echo "<script>window.location.replace('price.php')</script>";
	}
?>

<?php
	if(isset($_POST['edit_price']))
	{
		$x=$_POST['edit_price'];
		$loc=$_POST['location_edit'];
		$pr=$_POST['price_edit'];
		//echo "<script>alert('$x')</script>";
		$query="update price set location='$loc',price='$pr' where id=$x";
		mysqli_query($con,$query);
		echo "<script>window.location.replace('price.php')</script>";
	}
?>