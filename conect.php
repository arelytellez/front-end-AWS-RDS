<?php
$servername = "localhost";
$username = "admin";
$password = "Admin12345#!";
$database = "world";
try {
  // se hace la conexion a la base de datos
  $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  //echo "Connected successfully";
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}

/*  Función para obtener todos los registros de la tabla 'city'
* 
* @param PDO $conn - La conexión a la base de datos
*/ 
function getRecords($conn) {
   try {
       // Consulta SQL para obtener todos los registros de la tabla 'city'
       $query = "SELECT * FROM city";  // Cambia 'city' si deseas consultar otra tabla
       $stmt = $conn->prepare($query);  // Preparar la consulta
       $stmt->execute();  // Ejecutar la consulta

       // Obtener los resultados como un arreglo asociativo
       $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

       // Enviar los resultados como respuesta en formato JSON
       echo json_encode($results);

   } catch (PDOException $e) {
       // Enviar un mensaje de error si ocurre algo en la consulta
       echo json_encode(['error' => $e->getMessage()]);
   }
}
?>
