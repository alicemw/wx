<?php

header("Access-Control-Allow-Origin: * ");
header("Content-type: text/html; charset=utf-8");   
  $id = $_GET['id'];
  $db = new mysqli('120.27.160.109','m_0832pifu_com','bMbe4A49PbMbreV4QA47SV','m_0832pifu_com');
	if(mysqli_connect_errno())
	{
	    echo mysqli_connect_error();
	}else{
    $data =array();
			if($id ==111 ||$id == 412){
		  	$sql ='select * from dede_addondoctor where aid = '.$id;
			}else if($id == 42){
				$sql ='select * from dede_addonequipment where aid = '.$id;
			}else{
	      $sql = "Select dede_addonedisease.typeid,dede_addonedisease.body,dede_arctype.id,dede_arctype.typename From dede_addonedisease,dede_arctype where dede_addonedisease.aid = '" . $id . "' and dede_arctype.id = dede_addonedisease.typeid";
			}
    $result = $db->query($sql);
    if($result){
			
			while($row = $result->fetch_assoc()){
				$rows[]=$row;
			}

     echo json_encode($rows); 
			
		}else {
      echo 2;
    }
		
	}
?>