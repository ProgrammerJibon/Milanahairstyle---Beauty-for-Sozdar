<?php 
require_once "functions.php";
$result = array();

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
}

echo json_encode($result);