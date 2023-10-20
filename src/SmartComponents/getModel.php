<?php
include 'Database.php';

class GetModel extends Database {


    public function __construct() {
      $this->dbConnect();
    }

    public function getCalculations() {
        try {
            
            $sql = "SELECT * FROM Calculs";
    
            $stmt = $this->conn->prepare($sql);
    
            $stmt->execute();
    
            $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
            $stmt->closeCursor();
    
            return $results;
        } catch (PDOException $e) {
            return false;
        }
    }
    
}
?>
