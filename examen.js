
// -------------------- EJERCICIO 1 -------------------- 

function ejercicio1(p) {
    var errores = []

    if (p.length < 10) {
        errores.push("Debe contener 10 caracteres")
    }

    if (p.search(/[A-Z].*[A-Z]/) < 0) {
        errores.push("Debe contener dos mayúsculas")
    }

    if (p.search(/[0-9]/) < 0) {
        errores.push("Debe contener 1 digito")
    }
    if(p.search(/[\@\#\_\%\-]/) < 0) {
        errores.push("Debe contener -, _, @, #");
    }
      
    if (errores.length > 0) {
   
        let errores_finales = errores.toString()
        alert(errores_finales);
        return false;
    }
    return true;
  }

  var p = prompt("Comprobar contraseña: ");
  ejercicio1(p);

  // -------------------- EJERCICIO 2 --------------------

  function ejercicio2(array, id) {
    var div_a_insertar = document.getElementById(id);
    var table = document.createElement('table');

    $(table).css({
        border : "0px",
        color: "black"
        
      })

    var cuerpotabla = document.createElement('tbody');

    array.forEach(function(dato_fila) {
      var fila = document.createElement('tr');
  
      dato_fila.forEach(function(celdaData) {
        var celda = document.createElement('td');
        celda.appendChild(document.createTextNode(celdaData));
        fila.appendChild(celda);
      });
  
      cuerpotabla.appendChild(fila);
    });
  
    table.appendChild(cuerpotabla);
    div_a_insertar.appendChild(table);

  } 

  var div_id = prompt("Dime un id de un div para mostrar la tabla ( div1 / div2 / div3 ) ");
  mi_array = [["fila 1, celda 1", "fila 1, celda 2"], ["fila 2, celda 1", "fila 2, celda 2"]];

  ejercicio2(mi_array, div_id)

  // -------------------- EJERCICIO 3 --------------------
 
  function ejercicio3() {

   $(document).ready(function() {

      $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/users", // Using myjson.com to store the JSON
        success: function(result) {
          console.log(result);
    
          for (var i in result) {
              console.log("aaa");
            output =
                 '<h1>'+ result[i].name + "</h1>" +
              ' <span> Email:  ' + result[i].email + ' </span> <br> '+
              ' <span> Ciudad:  ' + result[i].address.street + ' </span> <br>   '+
              '<a href=" '+ result[i].website + '"> WEBSITE <br>   </a>'
          
              $("#div_ej_3").append(output); 
            }
          
        }
      });

  });
};

	ejercicio3();


 // -------------------- EJERCICIO 4 -------------------- 

 function ejercicio6A() {
    var div_jquery = $("<div id='div_1' ></div>");  
    var span_jquery = $('<span />').addClass('mi_span').html("Examen marzo");
    $("body").append(div_jquery); 
    $("#div_1").css("background-color", "red");
    $("#div_1").append(span_jquery); 

}

  ejercicio6A();

function ejercicio6B() {
    $("#div_1").css("background-color", "green");
    $("#div_1").css("width", "800px");
    $("#div_1").css("height", "800px");
    $(".mi_span").remove();

}

 ejercicio6B();