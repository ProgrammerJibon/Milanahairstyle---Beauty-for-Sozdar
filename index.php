<?php 
require_once 'functions.php';
if (isset($_GET['page']) && $_GET['page'] != "" && $page = $_GET['page']) {
	if($page == "admin"){
		require_once 'admin-dashboard.php';
	}else{
		require_once 'page-home.php';
	}
}else{
	require_once 'page-home.php';
}