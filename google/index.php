<?php
/*
	Getting the relative URL && Setting name/title.
*/

//	Splitting SCRIPT_NAME from index.php
$script_name = explode('/', $_SERVER['SCRIPT_NAME']);
array_pop($script_name);
$script_name = join('/', $script_name);

//	Applying SCRIPT_NAME
$url = urldecode(str_replace($script_name, '', $_SERVER['REQUEST_URI']));


if($url == '/') {
	include "views/index.php";
}else {
	$name = htmlspecialchars(explode("/", $url)[1]);
	include "views/search.php";
}


function url($to) {
	return $_SERVER['REQUEST_URI'].$to;
}