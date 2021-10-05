function historialMensajes() {
    $.ajax({
        url: "https://g0dfc25f9d5bd2a-db202109232119.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuesta2(respuesta.items)
        }

    });
}

function pintarRespuesta2(items) {

    let myTable = "<table>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].messagetext + "</td>";
        myTable += "<td> <button onclick='borrarCliente(" + items[i].id + ")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado").append(myTable);
};

function guardarMensaje() {
    let myData = {
        id: $("#id").val(),
        messagetext: $("#messagetext").val(),
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g0dfc25f9d5bd2a-db202109232119.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type: "POST",
        data: myData,
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            $("#id").val("");
            $("#messagetext").val("");
            historialMensajes();
            alert("se ha guardado el dato")
        }
    });
};

function cambiarMensaje() {
    let myData = {
        id: $("#id").val(),
        messagetext: $("#messagetext").val(),
    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g0dfc25f9d5bd2a-db202109232119.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            $("#id").val("");
            $("#messagetext").val("");
            historialMensajes();
            alert("se ha Actualizado")
        }
    });
};

function borrarCliente(idElemento) {
    let myData = {
        id: idElemento
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g0dfc25f9d5bd2a-db202109232119.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            historialMensajes();
            alert("Se ha Eliminado.")
        }
    });
};