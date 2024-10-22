<?php
// getAllRecordsCountryLanguage.php
header('Content-Type: application/json');

// Incluye el archivo de conexión
require 'conect.php';

try {
    $stmt = $conn->query('SELECT * FROM countrylanguage');
    $records = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($records);
} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>
