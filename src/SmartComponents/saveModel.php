<?php
include 'Database.php';

class SaveModel extends Database {


    public function __construct() {
      $this->dbConnect();
    }


    public function saveCalculation($operation, $result) {
        try {

            // Préparez la requête SQL
            $sql = "INSERT INTO Calculs (operationValue, resultValue) VALUES (:operation, :result)";

            $stmt = $this->conn->prepare($sql);

            // Liez les paramètres
            $stmt->bindParam(':operation', $operation);
            $stmt->bindParam(':result', $result);

            // Exécutez la requête
            $stmt->execute();
            
            // Fermez la connexion
            $this->conn = null;

            return true;
        } catch (PDOException $e) {
            return false;
        }
    }


    
}
?>
