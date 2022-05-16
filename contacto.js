document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form_pro").addEventListener('submit', validarFormulario); 
  });
  
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
      alert('Por favor complete el campo "Nombre"');
      return;
    }
  
    var email = document.getElementById('email').value;
    if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
      alert('Debe dejar un mail válido');
      return;
    }
  
  
    var comentario = document.getElementById('comentario').value;
    if (comentario.length < 6) {
      alert('Debe dejar un comentario');
      return;
    }
  
    
    this.submit();
  
    alert ('Gracias por su comentario')
  }