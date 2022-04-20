<form method="POST" action="/json.php" class="settings_main" enctype="multipart/form-data">
    <h1>Add photo</h1>
    <div class="settings_item">
		<div class="settings_title">
		    Taken Date:
		</div>
		<div>
			<input required name="date" value="<?php echo date("Y-m-d"); ?>" type="date" class="change_text">
		</div>
	</div>
    <div class="settings_item">
		<div class="settings_title">
		    Pick a photo:
		</div>
		<div>
			<input required name="pic" placeholder="Ex: Celebrating 31st night" type="file" accept="image/*" class="change_text">
		</div>
	</div>
    <div class="settings_item">
		<div class="settings_title">
		    Photo Short Description:
		</div>
		<div>
			<input required name="desc" placeholder="Ex: On los angels events" type="text" class="change_text">
		</div>
	</div>
    <div class="settings_item">
		<div>
			<button  type="submit"  name="add_photo" class="change_text">Add Photo</button>
		</div>
	</div>
</form>

<div class="photos">
            <view></view>
            <h1>Photos Gallery</h1>
            <div class="photos-grid"><?php 
if($query = mysqli_query($connect, "SELECT * FROM `photos` ORDER BY `photos`.`id` DESC")){
    foreach ($query as $key) {
        ?>
                <div class="photos-item" title="Double click to download" oncontextmenu="if(confirm('Date: <?php echo $key['took_date'];?>.\n<?php echo $key['title'];?>.\nPress OK to download.')){forceDownload('<?php echo $key['pic'];?>')}; return false;">
                    <div class="photo">
                        <img src="<?php echo $key['pic'];?>" alt="">
                    </div>
                    <div class="date">
                        <span><?php echo $key['took_date'];?></span>
                    </div>
                    <div class="title">
                        <span><?php echo $key['title'];?></span>
                    </div>
                    <form class="delete_photo" method="POST" action="/json.php">
                        <button name="delete_photo" value="<?php echo $key['id'];?>"><i class="fa-solid fa-trash"></i></button>
                    </form>
                </div>
         
        <?php
    }
}
?>
            </div>
        </div>