<?php 
require_once "functions.php";
$result = array();



if (isset($_SESSION['user_admin']) && $_SESSION['user_admin'] == "4564654654lkasjdfowaietrjsaoidfjskldtjoidsjglk1dc451fs5d1f564asdf564as5df15ew64r54") {
    if (isset($_POST['change_text_settings']) && isset($_POST['name']) && isset($_POST['value']) && $_POST['name'] != "" && $_POST['value'] != "") {
		if ($_POST['name'] == "password") {


            $password = $_POST['value'];

            $number = preg_match('@[0-9]@', $password);
            $uppercase = preg_match('@[A-Z]@', $password);
            $lowercase = preg_match('@[a-z]@', $password);
            $specialChars = preg_match('@[^\w]@', $password);
            
            if(strlen($password) < 8 || !$number || !$uppercase || !$lowercase || !$specialChars) {
                $result['settings_changed'] = "Password length must be between 8 to 255, must contain at least one number, one upper case letter, one lower case letter and one special character.";
            }else{
                $password = md5($password);
                if (@mysqli_query($connect, "UPDATE `info` SET `value` = '$password' WHERE `info`.`name` = 'password'")) {
                    $result['settings_changed'] = "Password updated!";
                }else{
                    $result['settings_changed'] = "Something went wrong!";
                }
            }
   
		}else{
            if (@mysqli_query($connect, "UPDATE `info` SET `value` = '$_POST[value]' WHERE `info`.`name` = '$_POST[name]'")) {
                $result['settings_changed'] = "Successfully updated!";
            }else{
                $result['settings_changed'] = "Something went wrong!";
            }
        }
	}
    

    if (isset($_FILES['logo_change']['tmp_name'])) {
        if($file_name = upload($_FILES['logo_change']['tmp_name'], "image")){
            if (mysqli_query($connect, "UPDATE `info` SET `value` = '$file_name' WHERE `info`.`name` = 'logo'")) {
                header("Location: /admin?p=3");
                exit;
            }else{
                exit("Can't save to database! Try letter...");
            }
        }       
    }

    
    if (isset($_FILES['beside_prices']['tmp_name'])) {
        if($file_name = upload($_FILES['beside_prices']['tmp_name'], "image")){
            if (mysqli_query($connect, "UPDATE `info` SET `value` = '$file_name' WHERE `info`.`name` = 'beside_prices'")) {
                header("Location: /admin?p=3");
                exit;
            }else{
                exit("Can't save to database! Try letter...");
            }
        }       
    }


    if (isset($_FILES['top_banner_men']['tmp_name'])) {
        if($file_name = upload($_FILES['top_banner_men']['tmp_name'], "image")){
            if (mysqli_query($connect, "UPDATE `info` SET `value` = '$file_name' WHERE `info`.`name` = 'top_banner_men'")) {
                header("Location: /admin?p=3");
                exit;
            }else{
                exit("Can't save to database! Try letter...");
            }
        }       
    }
    if (isset($_FILES['top_banner_women']['tmp_name'])) {
        if($file_name = upload($_FILES['top_banner_women']['tmp_name'], "image")){
            if (mysqli_query($connect, "UPDATE `info` SET `value` = '$file_name' WHERE `info`.`name` = 'top_banner_women'")) {
                header("Location: /admin?p=3");
                exit;
            }else{
                exit("Can't save to database! Try letter...");
            }
        }       
    }
    if (isset($_FILES['intro']['tmp_name'])) {
        if($file_name = upload($_FILES['intro']['tmp_name'], "video")){
            if (mysqli_query($connect, "UPDATE `info` SET `value` = '$file_name' WHERE `info`.`name` = 'intro'")) {
                header("Location: /admin?p=3");
                exit;
            }else{
                exit("Can't save to database! Try letter...");
            }
        }       
    }



    if(isset($_POST['news_letter_email'])){
        $sql_newsletter_mails = "SELECT * FROM `subscribed` ORDER BY `subscribed`.`id` DESC";
        $sql_newsletter_mails = mysqli_query($connect, $sql_newsletter_mails);
        foreach ($sql_newsletter_mails as $sql_newsletter_mail) {
            sent_mail($sql_newsletter_mail['email'], "", addslashes($_POST['news_letter_email']), addslashes($_POST['news_letter_title']));
        }
        header("Location: /admin?p=5&sent=".addslashes($_POST['news_letter_title']));
    }

    if(isset($_POST['delete_newsletter_email'])){
        if(mysqli_query($connect, "DELETE FROM `subscribed` WHERE `subscribed`.`id` = '$_POST[delete_newsletter_email]'")){
            header("Location: /admin?p=5");
        }else{
            $result['add_menu_item']['error'] = mysqli_error($connect);
        }
    }

    if(isset($_POST['delete_books'])){
        if(mysqli_query($connect, "DELETE FROM `booking` WHERE `booking`.`id` = '$_POST[delete_books]'")){

        }
        header("Location: /admin?p=4");
    }

    if(isset($_POST['delete_pricing'])){
        if(mysqli_query($connect, "DELETE FROM `prices_list` WHERE `prices_list`.`id` = '$_POST[delete_pricing]'")){
            header("Location: /admin?p=0");
        }else{
            $result['add_menu_item']['error'] = mysqli_error($connect);
        }
    }

    if(isset($_POST['add_pricing'])){
        if(mysqli_query($connect, "INSERT INTO `prices_list` (`id`, `name`, `price`, `gender`, `time`) VALUES (NULL, '$_POST[name]', '$_POST[price]', '$_POST[sex]', '$time')")){
            header("Location: /admin?p=0");
        }else{
            $result['add_menu_item']['error'] = mysqli_error($connect);
        }
    }


    if(isset($_POST['delete_photo'])){
        if(mysqli_query($connect, "DELETE FROM `photos` WHERE `photos`.`id` = '$_POST[delete_photo]'")){
            header("Location: /admin?p=1");
        }else{
            $result['add_menu_item']['error'] = mysqli_error($connect);
        }
    }

    if(isset($_POST['add_photo'])){
        
        if($pic_url = upload($_FILES['pic']['tmp_name'], "image")){
            if (mysqli_query($connect, "INSERT INTO `photos` (`id`, `title`, `took_date`, `pic`, `time`) VALUES (NULL, '$_POST[desc]', '$_POST[date]', '$pic_url', '$time')")) {
                header("Location: /admin?p=1");
            }else{
                $result['add_photo'] = mysqli_error($connect);
            }
        }else{
            $result['add_photo'] = "Unable to upload photo!";
        }
    }
    

}


if(isset($_POST['home_page'])){
    $result['home_page'] = $info;
    if($prices_list_query = mysqli_query($connect, "SELECT * FROM `prices_list` ORDER BY `prices_list`.`id` DESC")){
        $result['men_prices'] = array();
        $result['women_prices'] = array();
        foreach ($prices_list_query as $prices_list_result) {
            if(strtolower($prices_list_result['gender']) == "men"){
                $result['men_prices'][] = $prices_list_result;
            }else{
                $result['women_prices'][] = $prices_list_result;
            }
        }
    }
    if($gallery_query = mysqli_query($connect, "SELECT * FROM `photos` ORDER BY `photos`.`id` DESC")){
        $result['gallery_images'] = array();
        foreach ($gallery_query as $gallery_image) {
            $result['gallery_images'][] = $gallery_image;
        }
    }
    if($gallery_query = mysqli_query($connect, "SELECT * FROM `translations` ORDER BY `translations`.`id` DESC")){
        $result['transalations'] = array();
        $result['lang'] = $l;
        foreach ($gallery_query as $gallery_image) {
            $gallery_image_id = $gallery_image['id'];
            unset($gallery_image['id']);
            $result['transalations'][$gallery_image_id] = $gallery_image;
        }
    }
    
}



if(isset($_POST['booking'])){
    if(isset($_POST['date']) && isset($_POST['time']) && isset($_POST['name']) && isset($_POST['email']) && isset($_POST['phone'])){
        $book_date = addslashes(strip_tags(strtolower($_POST['date'])));
        $book_time = addslashes(strip_tags(strtolower($_POST['time'])));
        $book_name = addslashes(strip_tags(ucwords(strtolower($_POST['name']))));
        $book_email = addslashes(strip_tags(strtolower($_POST['email'])));
        $book_phone = addslashes(strip_tags(strtolower($_POST['phone'])));
        if(mysqli_query($connect, "INSERT INTO `booking` (`id`, `book_email`, `book_phone`, `book_name`, `book_time`, `book_date`, `time`, `ip`, `user-agent`) VALUES (NULL, '$book_email', '$book_phone', '$book_name', '$book_time', '$book_date',  '$time', '$ip', '$user_agent')")){
            $booking_email = "Your booking is successfull. Thanks for choosing us. </br> Date: $book_date </br> Time: $book_time </br> </br> ... </br> We will contact with you over $book_phone.";
            sent_mail($book_email, $book_name, $booking_email, "Booking Confirmation");
            $result['booking'] = true;
        }else{
            $result['booking'] = false;
        }
    }else{
        $result['booking'] = false;
    }
}


if(isset($_POST['admin_pass_enter']) && $admin_pass_enter = $_POST['admin_pass_enter']){
    if($info['password'] == md5($admin_pass_enter)){
        $_SESSION['user_admin'] = '4564654654lkasjdfowaietrjsaoidfjskldtjoidsjglk1dc451fs5d1f564asdf564as5df15ew64r54';
        $result['login'] = 'reload';
    }else{
        sleep(3);
        $result['login'] = md5('sozdar');
        // $result['login'] = "Wrong password!";
    }
}

if(isset($_POST['newsletter_subscription'])){
    if(filter_var($_POST['newsletter_subscription'], FILTER_VALIDATE_EMAIL)){
        if(mysqli_num_rows(mysqli_query($connect, "SELECT * FROM `subscribed` WHERE `email` LIKE '$_POST[newsletter_subscription]'")) == 0){
            if(mysqli_query($connect, "INSERT INTO `subscribed` (`id`, `email`, `ip`, `time`) VALUES (NULL, '$_POST[newsletter_subscription]', '$ip', '$time')")){
                $result['newsletter_subscription'] = 1;
            }else{
                $result['newsletter_subscription'] = 2;
            }
        }else{
            $result['newsletter_subscription'] = 3;
        }
    }else{
        $result['newsletter_subscription'] = 4;
    }
    
}

echo json_encode($result);