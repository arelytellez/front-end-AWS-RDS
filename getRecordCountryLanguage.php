<?php
// getRecordCountryLanguage.php
header('Content-Type: application/json');

// Incluye el archivo de conexión
require 'conect.php';

$countryCode = $_GET['countryCode'] ?? null;
$language = $_GET['language'] ?? null;

if ($countryCode && $language) {
    try {
        $stmt = $conn->prepare('SELECT * FROM countrylanguage WHERE CountryCode = :countryCode AND Language = :language');
        $stmt->execute(['countryCode' => $countryCode, 'language' => $language]);
        $record = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($record) {
            echo json_encode($record);
        } else {
            echo json_encode(['error' => 'Registro no encontrado.']);
        }
    } catch (PDOException $e) {
        echo json_encode(['error' => $e->getMessage()]);
    }
} else {
    echo json_encode(['error' => 'CountryCode y Language son requeridos.']);
}
?>
