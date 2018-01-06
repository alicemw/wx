<?php
	header("Access-Control-Allow-Origin: * ");
	header("Content-type: text/html; charset=utf-8"); 
	$db = new mysqli('120.27.160.109','m_0832pifu_com','bMbe4A49PbMbreV4QA47SV','m_0832pifu_com');
	if(mysqli_connect_errno())
	{
	    echo mysqli_connect_error();
	}else{
    $data =array();
    $sql = "Select id,typename,typedir From dede_arctype where topid = 47 limit 0,10";
	$sql2 = 
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