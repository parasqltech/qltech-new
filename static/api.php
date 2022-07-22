
<?php  
header("Access-Control-Allow-Origin: *");




$fullurl = "https://maps.googleapis.com/maps/api/place/details/json?&place_id=ChIJR1mA8PyEXjkRuNlaxp48bVo&key=AIzaSyBddDWmrtLkRhg0HqWI6mACm6zSRc66HPI";
$string .= file_get_contents($fullurl); // get json content
$json_a = json_decode($string, true); 

echo json_encode(['total' => $json_a['result']['user_ratings_total']]);
?>
