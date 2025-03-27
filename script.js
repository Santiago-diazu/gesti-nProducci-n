let intentos = 0;
let usuario = "admin";
let contrasena = "12345";
let acceso = false;

while (intentos < 3) {
    let usuario1 = prompt("Introduce tu nombre de usuario:");
    let contrasena1 = prompt("Introduce tu contraseña:");

    if (usuario1 === usuario && contrasena1 === contrasena) {
        alert(`Bienvenido ${usuario}.`);
        acceso = true;
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

if (!acceso) {
    alert("No se pudo iniciar sesión. El programa se cerrará.");
} else {
    let operarios = [];
    let conteoCategorias = {
        muebles: { escritorios: 0, sillas: 0, estanterias: 0 },
        electronica: { radios: 0, parlantes: 0, relojes: 0 },
        textiles: { camisetas: 0, pantalones: 0, chaquetas: 0 }
    };
    let totalesOperarios = [];

    let maxProduccion = 0;
    let operarioMaxProduccion = '';

    let continuar = true;
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
        let nombreOperario = prompt("Introduce el nombre del operario:");
        let categoriaSeleccionada = prompt("Selecciona una categoría de producción: \n1. Muebles \n2. Electrónica \n3. Textiles");

        switch (categoriaSeleccionada) {
            case "1":
                let productoMueble = prompt("Selecciona un mueble: \n1. Escritorios \n2. Sillas \n3. Estanterías");

                switch (productoMueble) {
                    case "1":
                        let cantidadEscritorios = parseInt(prompt("¿Cuántos escritorios fabricó?"));
                        operarios.push({
                            nombre: nombreOperario,
                            muebles: { escritorios: cantidadEscritorios },
                            electronica: 0,
                            textiles: 0
                        });
                        conteoCategorias.muebles.escritorios += cantidadEscritorios;
                        break;
                    case "2":
                        let cantidadSillas = parseInt(prompt("¿Cuántas sillas fabricó?"));
                        operarios.push({
                            nombre: nombreOperario,
                            muebles: { sillas: cantidadSillas },
                            electronica: 0,
                            textiles: 0
                        });
                        conteoCategorias.muebles.sillas += cantidadSillas;
                        break;
                    case "3":
                        let cantidadEstanterias = parseInt(prompt("¿Cuántas estanterías fabricó?"));
                        operarios.push({
                            nombre: nombreOperario,
                            muebles: { estanterias: cantidadEstanterias },
                            electronica: 0,
                            textiles: 0
                        });
                        conteoCategorias.muebles.estanterias += cantidadEstanterias;
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
                        let cantidadRadios = parseInt(prompt("¿Cuántos radios fabricó?"));
                        operarios.push({
                            nombre: nombreOperario,
                            muebles: 0,
                            electronica: { radios: cantidadRadios },
                            textiles: 0
                        });
                        conteoCategorias.electronica.radios += cantidadRadios;
                        break;
                    case "2":
                        let cantidadParlantes = parseInt(prompt("¿Cuántos parlantes fabricó?"));
                        operarios.push({
                            nombre: nombreOperario,
                            muebles: 0,
                            electronica: { parlantes: cantidadParlantes },
                            textiles: 0
                        });
                        conteoCategorias.electronica.parlantes += cantidadParlantes;
                        break;
                    case "3":
                        let cantidadRelojes = parseInt(prompt("¿Cuántos relojes fabricó?"));
                        operarios.push({
                            nombre: nombreOperario,
                            muebles: 0,
                            electronica: { relojes: cantidadRelojes },
                            textiles: 0
                        });
                        conteoCategorias.electronica.relojes += cantidadRelojes;
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
                        let cantidadCamisetas = parseInt(prompt("¿Cuántas camisetas fabricó?"));
                        operarios.push({
                            nombre: nombreOperario,
                            muebles: 0,
                            electronica: 0,
                            textiles: { camisetas: cantidadCamisetas }
                        });
                        conteoCategorias.textiles.camisetas += cantidadCamisetas;
                        break;
                    case "2":
                        let cantidadPantalones = parseInt(prompt("¿Cuántos pantalones fabricó?"));
                        operarios.push({
                            nombre: nombreOperario,
                            muebles: 0,
                            electronica: 0,
                            textiles: { pantalones: cantidadPantalones }
                        });
                        conteoCategorias.textiles.pantalones += cantidadPantalones;
                        break;
                    case "3":
                        let cantidadChaquetas = parseInt(prompt("¿Cuántas chaquetas fabricó?"));
                        operarios.push({
                            nombre: nombreOperario,
                            muebles: 0,
                            electronica: 0,
                            textiles: { chaquetas: cantidadChaquetas }
                        });
                        conteoCategorias.textiles.chaquetas += cantidadChaquetas;
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
        alert(`Producción registrada para el operario ${nombreOperario}.`);
        break;

    case "2":
        if (operarios.length === 0) {
            alert("No hay operarios registrados.");
        } else {
            operarios.forEach(operario => {
                let totalMuebles = Object.values(operario.muebles).reduce((acc, val) => acc + val, 0);
                let totalElectronica = Object.values(operario.electronica).reduce((acc, val) => acc + val, 0);
                let totalTextiles = Object.values(operario.textiles).reduce((acc, val) => acc + val, 0);

                totalesOperarios.push({
                    nombre: operario.nombre,
                    totalMuebles: totalMuebles,
                    totalElectronica: totalElectronica,
                    totalTextiles: totalTextiles
                });

                let totalProductos = totalMuebles + totalElectronica + totalTextiles;
                alert(`${operario.nombre} fabricó un total de ${totalProductos} productos: 
Muebles: ${totalMuebles}, Electrónica: ${totalElectronica}, Textiles: ${totalTextiles}`);
            });
        }
        break;



    case "3":
        if (operarios.length === 0) {
            alert("No hay operarios registrados.");
        } else {
            totalesOperarios.forEach(totales => {
                let bonoMuebles = totales.totalMuebles * 5;
                let bonoElectronica = totales.totalElectronica * 3;
                let bonoTextiles = totales.totalTextiles * 2;

                let bonoTotal = bonoMuebles + bonoElectronica + bonoTextiles;

                alert(`${totales.nombre} ganó un total de ${bonoTotal} en bonos.`);
            });
        }
        break;

    case "4":
        if (operarios.length === 0) {
            alert("No hay operarios registrados.");
        } else {
            totalesOperarios.forEach(totales => {
                let totalProduccion = totales.totalMuebles + totales.totalElectronica + totales.totalTextiles;

                if (totalProduccion > maxProduccion) {
                    maxProduccion = totalProduccion;
                    operarioMaxProduccion = totales.nombre;
                }
            });

            if (operarioMaxProduccion) {
                alert(`El operario con más producción es: ${operarioMaxProduccion} con ${maxProduccion} productos fabricados.`);
            } else {
                alert("No se pudo determinar el operario con más producción.");
            }
        }
        break;

    case "5":
        let categoriaMasFabricada = "";

        let totalMuebles = conteoCategorias.muebles.escritorios + conteoCategorias.muebles.sillas + conteoCategorias.muebles.estanterias;
        let totalElectronica = conteoCategorias.electronica.radios + conteoCategorias.electronica.parlantes + conteoCategorias.electronica.relojes;
        let totalTextiles = conteoCategorias.textiles.camisetas + conteoCategorias.textiles.pantalones + conteoCategorias.textiles.chaquetas;

        if (totalMuebles > totalElectronica && totalMuebles > totalTextiles) {
            categoriaMasFabricada = "Muebles";
        } else if (totalElectronica > totalMuebles && totalElectronica > totalTextiles) {
            categoriaMasFabricada = "Electrónica";
        } else if (totalTextiles > totalMuebles && totalTextiles > totalElectronica) {
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
