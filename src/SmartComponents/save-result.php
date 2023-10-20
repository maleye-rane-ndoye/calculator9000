<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);



require_once "./saveModel.php";

// envoie des données vers la base

$operationValue = $_POST["operation"];
$resultValue = $_POST["result"];

$saveModel = new SaveModel();


$ok = $saveModel->saveCalculation($operationValue, $resultValue);

echo json_encode(["ok" => $ok, "operation" => $operationValue, "result" => $resultValue]);

