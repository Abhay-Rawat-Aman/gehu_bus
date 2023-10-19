<?php
	session_start();
	unset($_SESSION['id']);
	unset($_SESSION['name']);
	session_destroy();
	echo "<script>window.location.replace('../');</script>";
?>