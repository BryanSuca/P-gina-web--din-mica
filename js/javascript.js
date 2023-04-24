

           

    function guardarArchivo() {

                var nombre = document.getElementById("nombre").value;
                var fecha = document.getElementById("fecha-nacimiento").value;
                var ocupacion = document.getElementById("ocupacion").value;
                var telefono = document.getElementById("telefono").value;
                var correoelectronico = document.getElementById("correoelectronico").value;
                var nacionalidad = document.getElementById("nacionalidad").value;
                var idiomas = document.getElementById("idiomas").getElementsByTagName("li");
                var opcionSeleccionada = document.querySelector('input[name="opcion"]:checked').value;
                var aptitudes = document.getElementById("aptitudes").getElementsByTagName("li");
                var habilidades = document.getElementById("habilidades").getElementsByTagName("li");
                var perfil = document.getElementById("perfil").value;
                var experiencia = document.getElementById("experiencia").getElementsByTagName("li");
                var formacion = document.getElementById("formacion").getElementsByTagName("li");
                
                // Almacenar los valores de los campos completos
                
                if (nombre === " " || fecha === "" || ocupacion === "" || telefono === "" || 
                    correoelectronico === ""|| nacionalidad === ""|| idiomas.length === 0 || 
                    opcionSeleccionada === 0 || perfil === "" || aptitudes.length === 0|| habilidades.length === 0 || 
                    experiencia.length === 0|| formacion.length === 0 ) {
                    alert("Por favor complete todos los campos del formulario antes de descargar el archivo.");    
                    return;
                    
                }

                
                if (telefono.length !== 9) {
                alert("El número de teléfono debe tener 9 dígitos.");
                return;

                }
                if (!validarEmail(correoelectronico)) {
                alert("Por favor ingrese una dirección de correo electrónico válida.");
                return;
                }
                

                var contenido = "Nombre: " + nombre + "\n" +
                                "fecha-nacimiento: " + fecha + "\n" +
                                "ocupación: " + ocupacion + "\n" +
                                "teléfono: " + telefono + "\n" +
                                "correo electronico: " + correoelectronico + "\n" +
                                "Nacionalidad: " + nacionalidad + "\n" +
                                "Idiomas: " ;
                                for(var i = 0; i < idiomas.length; i++){contenido += idiomas[i].textContent + ", ";}

                                contenido += "\n" + "Lenguajes de programación: " + opcionSeleccionada + "\n" +
                                            "Aptitudes: " ;
                                for(var i = 0; i < aptitudes.length; i++){contenido += aptitudes[i].textContent + ", ";}

                                contenido += "\n" + "Habilidades: " ;
                                for(var i = 0; i < habilidades.length; i++){contenido += habilidades[i].textContent + ", ";}

                                contenido += "\n" + "Perfil: " + perfil + "\n" + "Experiencia laboral: "  ;
                                for(var i = 0; i < experiencia.length; i++){contenido += experiencia[i].textContent + ", ";}

                                contenido += "\n" + "Formación: ";
                                for(var i = 0; i < formacion.length; i++){contenido += formacion[i].textContent + ", ";}

                var archivo = new Blob([contenido], {type: "text/plain"});

                var enlace = document.createElement("a");
                enlace.href = URL.createObjectURL(archivo);
                enlace.download = "formulario.txt";
                enlace.click();
            }
            

    function validarEmail(email) {
                var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return regex.test(email);
    }
        
    var close = document.getElementsByClassName("close");
    var i;
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }

    function newIdioma() {
        var li = document.createElement("li");
        var inputValue = document.getElementById("idm").value;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
            alert("Ingresa algún idioma");
        } else {
            document.getElementById("idiomas").appendChild(li);
        }
        document.getElementById("idm").value = "";

        var span = document.createElement("SPAN");
        var txt = document.createTextNode("x");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);

        for (i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }
    }

    function newAptitud() {
        var li = document.createElement("li");
        var inputValue = document.getElementById("aps").value;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
            alert("Ingresa alguna aptitud");
        } else {
            document.getElementById("aptitudes").appendChild(li);
        }
        document.getElementById("aps").value = "";

        var span = document.createElement("SPAN");
        var txt = document.createTextNode("x");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);

        for (i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }
    }

    function newHabilidad() {
        var li = document.createElement("li");
        var inputValue = document.getElementById("hb").value;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
            alert("Ingresa alguna habilidad");
        } else {
            document.getElementById("habilidades").appendChild(li);
        }
        document.getElementById("hb").value = "";

        var span = document.createElement("SPAN");
        var txt = document.createTextNode("x");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);

        for (i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }
    }

    function newExperiencia() {
        var li = document.createElement("li");
        var inputValue = document.getElementById("el").value;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
            alert("Ingresa tu experiencia laboral");
        } else {
            document.getElementById("experiencia").appendChild(li);
        }
        document.getElementById("el").value = "";

        var span = document.createElement("SPAN");
        var txt = document.createTextNode("x");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);

        for (i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }
    }

    function newFormacion() {
        var li = document.createElement("li");
        var inputValue = document.getElementById("for").value;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
            alert("Ingresa tu formación académica");
        } else {
            document.getElementById("formacion").appendChild(li);
        }
        document.getElementById("for").value = "";

        var span = document.createElement("SPAN");
        var txt = document.createTextNode("x");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);

        for (i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }

        //Inicio: Para enviar el formulario a un texto plano


        
        

    }//Fin Script
