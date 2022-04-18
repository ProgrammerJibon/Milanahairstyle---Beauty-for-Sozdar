<?php 
require_once "functions.php";
$result = array();

if(isset($_POST['home_page'])){
    $result['home_page'] = $info;
}

echo json_encode($result);