<?php 
if (!isset($info)) {
	exit();
}
 ?>
<div class="settings_main">
	<div class="settings_item">
		<div class="settings_title">
			Change Logo:
		</div>
		<div class="settings_img_change" onclick="document.querySelector('input#logo_change').click()">
			<img src="<?php echo $info['logo']; ?>">
		</div>
		<div>
			<form method="POST" enctype="multipart/form-data" action="/json.php">
				<input id="logo_change" type="file" oninput ="if (this.value != null) {document.querySelector('input#hit_logo_change').click()}" name="logo_change" accept="image/*" hidden>
				<input type="submit" id="hit_logo_change" hidden name="">
			</form>
		</div>
	</div>
	<div class="settings_item">
		<div class="settings_title">
			Change men banner:
		</div>
		<div class="settings_img_change" onclick="document.querySelector('input#top_banner_men').click()">
			<img src="<?php echo $info['top_banner_men']; ?>">
		</div>
		<div>
			<form method="POST" enctype="multipart/form-data" action="/json.php">
				<input id="top_banner_men" type="file" oninput ="if (this.value != null) {document.querySelector('input#hit_top_banner_men').click()}" name="top_banner_men" accept="image/*" hidden>
				<input type="submit" id="hit_top_banner_men" hidden name="">
			</form>
		</div>
	</div>
	<div class="settings_item">
		<div class="settings_title">
			Change women banner:
		</div>
		<div class="settings_img_change" onclick="document.querySelector('input#top_banner_women').click()">
			<img src="<?php echo $info['top_banner_women']; ?>">
		</div>
		<div>
			<form method="POST" enctype="multipart/form-data" action="/json.php">
				<input id="top_banner_women" type="file" oninput ="if (this.value != null) {document.querySelector('input#hit_top_banner_women').click()}" name="top_banner_women" accept="image/*" hidden>
				<input type="submit" id="hit_top_banner_women" hidden name="">
			</form>
		</div>
	</div>
	<div class="settings_item">
		<div class="settings_title">
			Change pic besides prices:
		</div>
		<div class="settings_img_change" onclick="document.querySelector('input#beside_prices').click()">
			<img src="<?php echo $info['beside_prices']; ?>">
		</div>
		<div>
			<form method="POST" enctype="multipart/form-data" action="/json.php">
				<input id="beside_prices" type="file" oninput ="if (this.value != null) {document.querySelector('input#hit_beside_prices').click()}" name="beside_prices" accept="image/*" hidden>
				<input type="submit" id="hit_beside_prices" hidden name="">
			</form>
		</div>
	</div>
	<div class="settings_item">
		<div class="settings_title">
			Change Contack us page video:
		</div>
		<div class="settings_img_change" onclick="document.querySelector('input#intro').click()">
			<video controls muted autoplay src="<?php echo $info['intro']; ?>">
		</div>
		<div>
			<form method="POST" enctype="multipart/form-data" action="/json.php">
				<input id="intro" type="file" oninput ="if (this.value != null) {document.querySelector('input#hit_intro').click()}" name="intro" accept="video/*" hidden>
				<input type="submit" id="hit_intro" hidden name="">
			</form>
		</div>
	</div>
	
	<div class="settings_item">
		<div class="settings_title">
			Change Website Title:
		</div>
		<div>
			<input type="text" onchange="change_text_settings(this, 'div.changing_site_title', 'title')" class="change_text" value="<?php echo $info['title']; ?>">
		</div>
		<div class="changing_site_title result_change_text"></div>
	</div>
	
	<div class="settings_item">
		<div class="settings_title">
			Change Phone Number:
		</div>
		<div>
			<input type="text" onchange="change_text_settings(this, 'div.changing_phone', 'phone')" class="change_text" value="<?php echo $info['phone']; ?>">
		</div>
		<div class="changing_phone result_change_text"></div>
	</div>
	<div class="settings_item">
		<div class="settings_title">
			Change Address:
		</div>
		<div>
			<input type="text" onchange="change_text_settings(this, 'div.changing_site_address', 'address')" class="change_text" value="<?php echo $info['address']; ?>">
		</div>
		<div class="changing_site_address result_change_text"></div>
	</div>
	<div class="settings_item">
		<div class="settings_title">
			Change Email:
		</div>
		<div>
			<input type="email" onchange="change_text_settings(this, 'div.changing_site_email', 'email')" class="change_text" value="<?php echo $info['email']; ?>">
		</div>
		<div class="changing_site_email result_change_text"></div>
	</div>
	<div class="settings_item">
		<div class="settings_title">
			Change Admin Password:
		</div>
		<div>
			<input type="password" onchange="if(confirm(`Are you sure to change your password to: ${this.value}`)){change_text_settings(this, 'div.changing_password', 'password', 'pass')}else{this.value = null;return false;}" class="change_text" placeholder="Password">
		</div>
		<div class="changing_password result_change_text"></div>
	</div>		
</div>
<script type="text/javascript">
	document.querySelector("title").innerHTML = "Website General Settings";
</script>