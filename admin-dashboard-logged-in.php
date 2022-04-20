<?php 
if(isset($_SESSION['user_admin']) && $_SESSION['user_admin'] == "4564654654lkasjdfowaietrjsaoidfjskldtjoidsjglk1dc451fs5d1f564asdf564as5df15ew64r54"){



}else{
    exit();
}


if (isset($_POST['logout'])) {
	unset($_SESSION['user_admin']);
	header("Location: /");
}
if (!isset($_GET['p'])) {
	header("Location: /admin?p=3");
}elseif ($_GET['p'] < 0 || $_GET['p'] > 5) {
	header("HTTP/1.0 404 No settings pages founded");
	exit();
}else{


require_once 'page-header.php';

}
?>
<div class="admin_page">
    <div class="menu_bar">
        <div class="menu_item"
            <?php if($_GET['p'] == 0){echo "style='background:  #acacac; color: white;'";}else{echo " onclick=\"href('?p=0')\"";} ?>>
            Pricing</div>
        <div class="menu_item"
            <?php if($_GET['p'] == 2){echo "style='background:  #acacac; color: white;'";}else{echo " onclick=\"href('?p=2')\"";} ?>>
            Social Url</div>
        <div class="menu_item"
            <?php if($_GET['p'] == 3){echo "style='background:  #acacac; color: white;'";}else{echo " onclick=\"href('?p=3')\"";} ?>>
            General Settings</div>
        <div class="menu_item"
            <?php if($_GET['p'] == 5){echo "style='background:  #acacac; color: white;'";}else{echo " onclick=\"href('?p=5')\"";} ?>>
            Newsletter Emails</div>
        <div class="menu_item"
            <?php if($_GET['p'] == 1){echo "style='background:  #acacac; color: white;'";}else{echo " onclick=\"href('?p=1')\"";} ?>>
            Photos</div>
        <div class="menu_item"
            <?php if($_GET['p'] == 4){echo "style='background:  #acacac; color: white;'";}else{echo " onclick=\"href('?p=4')\"";} ?>>
            Bookings</div>
        <form class="menu_item" method="POST" style="padding: 0; margin: 0;">
            <input type="submit" class="menu_item" name="logout" value="LOGOUT"/>
        </form>
    </div>
    <div class="admin_settings">
        <?php 
			if ($_GET['p'] == 2) {
				require_once 'admin-social-media.php';
			}elseif ($_GET['p'] == 3) {
				require_once 'admin-general-settings.php';
			}elseif ($_GET['p'] == 5) {
				require_once 'admin-newsletter-emails.php';
			}elseif ($_GET['p'] == 1) {
				require_once 'admin-photos.php';
			}elseif ($_GET['p'] == 0) {
				require_once 'admin-prices.php';
			}elseif ($_GET['p'] == 4) {
				require_once 'admin-booking.php';
			}
		 ?>
    </div>
</div>
<script>
    remove_loader();
</script>
<?php require 'page-footer.php'; ?>