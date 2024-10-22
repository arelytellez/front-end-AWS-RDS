<?php
// getRecordCity.php
header('Content-Type: application/json');

// Incluye el archivo de conexión
require 'conect.php';

// Especifica la tabla que quieres consultar
$table = 'city';

// Verifica si se ha proporcionado el parámetro (por ejemplo, el ID de la ciudad)
if (isset($_GET['id'])) {
    $id = $_GET['id'];

    try {
        // Prepara la consulta SQL con un parámetro
        $stmt = $conn->prepare("SELECT * FROM $table WHERE ID = :id");

        // Asigna el valor del parámetro
        $stmt->bindParam(':id', $id);

        // Ejecuta la consulta
        $stmt->execute();

        // Obtén el registro como un arreglo asociativo
        $record = $stmt->fetch(PDO::FETCH_ASSOC);

        // Verifica si se encontró el registro
        if ($record) {
            // Devuelve el registro en formato JSON
            echo json_encode($record);
         } else {
            // Si no se encontró el registro, devuelve un mensaje
            echo json_encode(['error' => 'Registro no encontrado']);
        }

    } catch (PDOException $e) {
        // En caso de error, devuelve un mensaje en JSON
        echo json_encode(['error' => $e->getMessage()]);
    }
} else {
    // Si no se proporciona el parámetro, devuelve un mensaje de error
    echo json_encode(['error' => 'Parámetro no proporcionado']);
}
?>
