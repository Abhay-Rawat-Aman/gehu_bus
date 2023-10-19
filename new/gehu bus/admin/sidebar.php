<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index.php" class="brand-link">
      <img src="dist/img/logo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
	  <span class="brand-text font-weight-light">GEHU Bhimtal BUS</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">Welcome, <?php $_SESSION['admin_name']?></a>
        </div>
      </div>

      <!-- SidebarSearch Form -->
      <div class="form-inline">
        <div class="input-group" data-widget="sidebar-search">
          <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <i class="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item">
            <a href="fees.php" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Fees
              </p>
            </a>
          </li>
          <li class="nav-item">
            <a href="notice.php" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
			  Notice
              </p>
            </a>
          </li>
		  <li class="nav-item">
            <a href="request.php" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
			  Request
                <span class="right badge badge-danger">New</span>
              </p>
            </a>
          </li>
		  
		  <li class="nav-item">
            <a href="price.php" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
			  Price
              </p>
            </a>
          </li>
		  
		  <li class="nav-item">
            <a href="action.php" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
			  Action
              </p>
            </a>
          </li>
          
		  <li class="nav-item">
            <a href="bus_manage.php" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
			  Add Bus
              </p>
            </a>
          </li>
          <li class="nav-item">
            <a href="driver_conductor.php" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
			  Driver/ Conductor
              </p>
            </a>
          </li>
          
          <li class="nav-item">
            <a href="./logout.php" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
			  Log Out
              </p>
            </a>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
	