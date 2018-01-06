<?php
  
/**
     *    登录
     * 
     * @return Response
     */
     
header("Access-Control-Allow-Origin: * ");
header("Content-type: text/html; charset=utf-8"); 
$session_key =file_get_contents('https://api.weixin.qq.com/sns/jscode2session?appid=wx64d557e1e7c6dafb&secret=1b68e6f504197e833212ac480455b644&js_code='.$code.'&grant_type=authorization_code')

?>