let intentos = 0;
let usuario = "admin";
let contrasena = "12345";
let ingreso = false;

while (intentos < 3) {
    let usuarioIntento = prompt("Introduce tu nombre de usuario:");
    let contrasenaIntento = prompt("Introduce tu contraseña:");

    if (usuarioIntento === usuario && contrasenaIntento === contrasena) {
        alert(`Bienvenido ${usuario}.`);
        ingreso = true;
        break;
    } else {
        intentos++;
        if (intentos === 3) {
            alert("Has excedido el número de intentos.");
            break;
        } else {
            alert(`Intento fallido. Te quedan ${3 - intentos} intentos.`);
        }
    }
}

if (!ingreso) {
    alert("No se pudo iniciar sesión. El programa se cerrará.");
} else {
    let operario = "";
    let categoriaSeleccionada = "";
    let productoMueble = "";
    let escritorios = 0, sillas = 0, estanterias = 0;
    let radios = 0, parlantes = 0, relojes = 0;
    let camisetas = 0, pantalones = 0, chaquetas = 0;
    let muebles = 0, electronica = 0, textiles = 0;
    let masProduccion = 0;
    let opMasProduccion = "";
    let categoriaMasFabricada = "";
    let continuar = true;

    let conteoEscritorios = 0, conteoSillas = 0, conteoEstanterias = 0;
    let conteoRadios = 0, conteoParlantes = 0, conteoRelojes = 0;
    let conteoCamisetas = 0, conteoPantalones = 0, conteoChaquetas = 0;

    while (continuar) {
        let opcion = prompt(
            "Seleccione una opción:\n" +
            "1. Registrar producción de múltiples operarios\n" +
            "2. Calcular cuántos productos fabricó cada operario\n" +
            "3. Determinar cuánto ganó cada operario en bonos\n" +
            "4. Identificar al operario con más producción\n" +
            "5. Determinar cuál fue la categoría de productos más fabricada\n" +
            "6. Salir"
        );

        switch (opcion) {
            case "1":
                operario = prompt("Introduce el nombre del operario:");
                categoriaSeleccionada = prompt("Selecciona una categoría de producción: \n1. Muebles \n2. Electrónica \n3. Textiles");

                switch (categoriaSeleccionada) {
                    case "1":
                        productoMueble = prompt("Selecciona un mueble: \n1. Escritorios \n2. Sillas \n3. Estanterías");

                        switch (productoMueble) {
                            case "1":
                                escritorios = parseInt(prompt("¿Cuántos escritorios fabricó?"));
                                conteoEscritorios += escritorios;
                                break;
                            case "2":
                                sillas = parseInt(prompt("¿Cuántas sillas fabricó?"));
                                conteoSillas += sillas;
                                break;
                            case "3":
                                estanterias = parseInt(prompt("¿Cuántas estanterías fabricó?"));
                                conteoEstanterias += estanterias;
                                break;
                            default:
                                alert("Opción no válida.");
                                break;
                        }
                        break;

                    case "2":
                        let productoElectronica = prompt("Selecciona un producto electrónico: \n1. Radios \n2. Parlantes \n3. Relojes");

                        switch (productoElectronica) {
                            case "1":
                                radios = parseInt(prompt("¿Cuántos radios fabricó?"));
                                conteoRadios += radios;
                                break;
                            case "2":
                                parlantes = parseInt(prompt("¿Cuántos parlantes fabricó?"));
                                conteoParlantes += parlantes;
                                break;
                            case "3":
                                relojes = parseInt(prompt("¿Cuántos relojes fabricó?"));
                                conteoRelojes += relojes;
                                break;
                            default:
                                alert("Opción no válida.");
                                break;
                        }
                        break;

                    case "3":
                        let productoTextiles = prompt("Selecciona un producto textil: \n1. Camisetas \n2. Pantalones \n3. Chaquetas");

                        switch (productoTextiles) {
                            case "1":
                                camisetas = parseInt(prompt("¿Cuántas camisetas fabricó?"));
                                conteoCamisetas += camisetas;
                                break;
                            case "2":
                                pantalones = parseInt(prompt("¿Cuántos pantalones fabricó?"));
                                conteoPantalones += pantalones;
                                break;
                            case "3":
                                chaquetas = parseInt(prompt("¿Cuántas chaquetas fabricó?"));
                                conteoChaquetas += chaquetas;
                                break;
                            default:
                                alert("Opción no válida.");
                                break;
                        }
                        break;

                    default:
                        alert("Opción no válida.");
                        break;
                }

                alert(`Producción registrada para el operario ${operario}.`);
                break;

            case "2":
                if (operario !== "") {
                    muebles = conteoEscritorios + conteoSillas + conteoEstanterias;
                    electronica = conteoRadios + conteoParlantes + conteoRelojes;
                    textiles = conteoCamisetas + conteoPantalones + conteoChaquetas;

                    alert(`${operario} fabricó un total de:\nMuebles: ${muebles}\nElectrónica: ${electronica}\nTextiles: ${textiles}`);
                } else {
                    alert("No hay operarios registrados.");
                }
                break;

            case "3":
                let bonoMuebles = conteoEscritorios * 5 + conteoSillas * 5 + conteoEstanterias * 5;
                let bonoElectronica = conteoRadios * 3 + conteoParlantes * 3 + conteoRelojes * 3;
                let bonoTextiles = conteoCamisetas * 2 + conteoPantalones * 2 + conteoChaquetas * 2;

                let bonoTotal = bonoMuebles + bonoElectronica + bonoTextiles;

                alert(`${operario} ganó un bono total de: ${bonoTotal}`);
                break;

            case "4":
                if (muebles + electronica + textiles > masProduccion) {
                    masProduccion = muebles + electronica + textiles;
                    opMasProduccion = operario;
                }

                if (opMasProduccion) {
                    alert(`El operario con más producción es: ${opMasProduccion} con ${masProduccion} productos fabricados.`);
                } else {
                    alert("No se pudo determinar el operario con más producción.");
                }
                break;

            case "5":
                let mueblesCategoria = conteoEscritorios + conteoSillas + conteoEstanterias;
                let electronicaCategoria = conteoRadios + conteoParlantes + conteoRelojes;
                let textilesCategoria = conteoCamisetas + conteoPantalones + conteoChaquetas;

                if (mueblesCategoria > electronicaCategoria && mueblesCategoria > textilesCategoria) {
                    categoriaMasFabricada = "Muebles";
                } else if (electronicaCategoria > mueblesCategoria && electronicaCategoria > textilesCategoria) {
                    categoriaMasFabricada = "Electrónica";
                } else if (textilesCategoria > mueblesCategoria && textilesCategoria > electronicaCategoria) {
                    categoriaMasFabricada = "Textiles";
                } else {
                    categoriaMasFabricada = "No se puede determinar una categoría claramente más fabricada.";
                }

                alert(`La categoría más fabricada fue: ${categoriaMasFabricada}.`);
                break;

            case "6":
                continuar = false;
                alert("Gracias por utilizar el sistema.");
                break;

            default:
                alert("Opción no válida. Intenta nuevamente.");
                break;
        }
    }
}