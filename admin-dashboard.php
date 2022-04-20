<?php 
if (!isset($_SESSION['user_admin'])) {
	require 'page-header.php';
	echo '<div class="require_pass">Please wait...</div>';
	require 'page-footer.php';
}elseif (isset($_SESSION['user_admin']) && $_SESSION['user_admin'] != "4564654654lkasjdfowaietrjsaoidfjskldtjoidsjglk1dc451fs5d1f564asdf564as5df15ew64r54") {
	unset($_SESSION['user_admin']);
    header("Reload: 0");
}elseif (isset($_SESSION['user_admin']) && $_SESSION['user_admin'] == "4564654654lkasjdfowaietrjsaoidfjskldtjoidsjglk1dc451fs5d1f564asdf564as5df15ew64r54") {
	require_once 'admin-dashboard-logged-in.php';
}else{
	require 'page-footer.php';
	echo '<div class="require_pass">Please wait...</div>';
	require 'page-footer.php';
}