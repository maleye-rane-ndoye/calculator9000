<?php
abstract class Database {

    private $host = "localhost"; 
    private $dbname = "calculator"; // Nom de la base de données
    private $username = "root"; 
    private $password = ""; 

    protected $conn;
    
    public function dbConnect(){


        try {
            $this->conn = new PDO("mysql:host=$this->host;dbname=$this->dbname", $this->username, $this->password);
        
            // Définir le mode d'erreur PDO sur Exception
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $this->conn->exec("SET NAMES utf8");

            // echo "Connection to database was successfull";
            
        } catch (PDOException $e) {
            die("connexion failed : " . $e->getMessage());
        }

    }







}























?>