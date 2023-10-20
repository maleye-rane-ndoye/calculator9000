<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);



require_once "./getModel.php";


// recuperation des données depuis la base


$getModel = new GetModel();

$calculations = $getModel->getCalculations();

$ok = $calculations !== false;

$data = $ok ? $calculations : [];

$response = ["ok" => $ok, "data" => $data ];


echo json_encode($response);


