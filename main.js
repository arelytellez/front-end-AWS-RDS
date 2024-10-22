$(document).ready(function() {
    // Mostrar todos los registros de la tabla 'country'
    $('#fetchRecords').click(function() {
        $.ajax({
            url: 'getRecords.php', // URL de tu API para la tabla 'country'
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                if (data.error) {
                    $('#records').html('<div class="alert alert-danger">' + data.error + '</div>');
                } else {
                    let table = '<table class="table table-striped table-bordered"><thead><tr>';
                    if (data.length > 0) {
                        Object.keys(data[0]).forEach(key => {
                            table += '<th>' + key + '</th>';
                        });
                        table += '</tr></thead><tbody>';
                        data.forEach(record => {
                            table += '<tr>';
                            Object.values(record).forEach(value => {
                                table += '<td>' + value + '</td>';
                            });
                            table += '</tr>';
                        });
                        table += '</tbody></table>';
                        $('#records').html(table);
                    } else {
                        $('#records').html('<div class="alert alert-info">No hay registros disponibles.</div>');
                    }
                }
            },
            error: function(xhr, status, error) {
                $('#records').html('<div class="alert alert-danger">Error en la solicitud: ' + error + '</div>');
            }
        });
    });

    // Buscar un solo registro por código en 'country'
    $('#fetchRecord').click(function() {
        const countryCode = $('#countryCode').val(); // Obtener el código del input
        if (countryCode) {
            $.ajax({
                url: 'getRecord.php', // URL de tu API para un solo registro en 'country'
                type: 'GET',
                data: { code: countryCode }, // Enviar el código como parámetro
                dataType: 'json',
                success: function(data) {
                    if (data.error) {
                        $('#records').html('<div class="alert alert-danger">' + data.error + '</div>');
                    } else {
                        let table = '<table class="table table-striped table-bordered"><thead><tr>';
                        Object.keys(data).forEach(key => {
                            table += '<th>' + key + '</th>';
                        });
                        table += '</tr></thead><tbody><tr>';
                        Object.values(data).forEach(value => {
                            table += '<td>' + value + '</td>';
                        });
                        table += '</tr></tbody></table>';
                        $('#records').html(table);
                    }
                },
                error: function(xhr, status, error) {
                    $('#records').html('<div class="alert alert-danger">Error en la solicitud: ' + error + '</div>');
                }
            });
        } else {
            $('#records').html('<div class="alert alert-warning">Por favor, ingresa un código de país.</div>');
        }
    });

    // Mostrar todos los registros de la tabla 'city'
    $('#fetchRecordsCity').click(function() {
        $.ajax({
            url: 'getAllRecordsCity.php', // URL de tu API para la tabla 'city'
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                if (data.error) {
                    $('#records').html('<div class="alert alert-danger">' + data.error + '</div>');
                } else {
                    let table = '<table class="table table-striped table-bordered"><thead><tr>';
                    if (data.length > 0) {
                        Object.keys(data[0]).forEach(key => {
                            table += '<th>' + key + '</th>';
                        });
                        table += '</tr></thead><tbody>';
                        data.forEach(record => {
                            table += '<tr>';
                            Object.values(record).forEach(value => {
                                table += '<td>' + value + '</td>';
                            });
                            table += '</tr>';
                        });
                        table += '</tbody></table>';
                        $('#records').html(table);
                    } else {
                        $('#records').html('<div class="alert alert-info">No hay registros disponibles.</div>');
                    }
                }
            },
            error: function(xhr, status, error) {
                $('#records').html('<div class="alert alert-danger">Error en la solicitud: ' + error + '</div>');
            }
        });
    });

    // Buscar un solo registro por ID en 'city'
    $('#fetchRecordCity').click(function() {
        const cityId = $('#cityId').val(); // Obtener el ID de la ciudad
        if (cityId) {
            $.ajax({
                url: 'getRecordCity.php', // URL de tu API para un solo registro en 'city'
                type: 'GET',
                data: { id: cityId }, // Enviar el ID como parámetro
                dataType: 'json',
                success: function(data) {
                    if (data.error) {
                        $('#records').html('<div class="alert alert-danger">' + data.error + '</div>');
                    } else {
                        let table = '<table class="table table-striped table-bordered"><thead><tr>';
                        Object.keys(data).forEach(key => {
                            table += '<th>' + key + '</th>';
                        });
                        table += '</tr></thead><tbody><tr>';
                        Object.values(data).forEach(value => {
                            table += '<td>' + value + '</td>';
                        });
                        table += '</tr></tbody></table>';
                        $('#records').html(table);
                    }
                },
                error: function(xhr, status, error) {
                    $('#records').html('<div class="alert alert-danger">Error en la solicitud: ' + error + '</div>');
                }
            });
        } else {
            $('#records').html('<div class="alert alert-warning">Por favor, ingresa un ID de ciudad.</div>');
        }
    });

    // Mostrar todos los registros de la tabla 'countrylanguage'
    $('#fetchRecordsCountryLanguage').click(function() {
        $.ajax({
            url: 'getAllRecordsCountryLanguage.php', // URL de tu API para la tabla 'countrylanguage'
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                if (data.error) {
                    $('#records').html('<div class="alert alert-danger">' + data.error + '</div>');
                } else {
                    let table = '<table class="table table-striped table-bordered"><thead><tr>';
                    if (data.length > 0) {
                        Object.keys(data[0]).forEach(key => {
                            table += '<th>' + key + '</th>';
                        });
                        table += '</tr></thead><tbody>';
                        data.forEach(record => {
                            table += '<tr>';
                            Object.values(record).forEach(value => {
                                table += '<td>' + value + '</td>';
                            });
                            table += '</tr>';
                        });
                        table += '</tbody></table>';
                        $('#records').html(table);
                    } else {
                        $('#records').html('<div class="alert alert-info">No hay registros disponibles.</div>');
                    }
                }
            },
            error: function(xhr, status, error) {
                $('#records').html('<div class="alert alert-danger">Error en la solicitud: ' + error + '</div>');
            }
        });
    });

    // Buscar un solo registro por CountryCode y Language en 'countrylanguage'
    $('#fetchRecordCountryLanguage').click(function() {
        const countryCode = $('#countryLanguageCode').val(); // Obtener el código del país
        const language = $('#language').val(); // Obtener el idioma
        if (countryCode && language) {
            $.ajax({
                url: 'getRecordCountryLanguage.php', // URL de tu API para un solo registro en 'countrylanguage'
                type: 'GET',
                data: { countryCode: countryCode, language: language }, // Enviar los valores como parámetros
                dataType: 'json',
                success: function(data) {
                    if (data.error) {
                        $('#records').html('<div class="alert alert-danger">' + data.error + '</div>');
                    } else {
                        let table = '<table class="table table-striped table-bordered"><thead><tr>';
                        Object.keys(data).forEach(key => {
                            table += '<th>' + key + '</th>';
                        });
                        table += '</tr></thead><tbody><tr>';
                        Object.values(data).forEach(value => {
                            table += '<td>' + value + '</td>';
                        });
                        table += '</tr></tbody></table>';
                        $('#records').html(table);
                    }
                },
                error: function(xhr, status, error) {
                    $('#records').html('<div class="alert alert-danger">Error en la solicitud: ' + error + '</div>');
                }
            });
        } else {
            $('#records').html('<div class="alert alert-warning">Por favor, ingresa el código del país y el idioma.</div>');
        }
    });
});
