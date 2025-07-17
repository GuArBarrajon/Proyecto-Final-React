import Swal from 'sweetalert2'

export function dispararAlert(titulo, texto, icono, textoBoton, url = null){
    Swal.fire({
        title: titulo,
        text: texto,
        icon: icono,
        confirmButtonText: textoBoton
      }).then((result) => {
        if (result.isConfirmed) {
          if (url) {
                window.location.href = url;
            }
        }
      });
}

export function eliminarAlert(titulo, texto, icono, ...botones) {
    // Si botones es un array, asumimos confirm/cancel personalizados
    if (Array.isArray(botones)) {
        return Swal.fire({
            title: titulo,
            text: texto,
            icon: icono,
            showCancelButton: true,
            confirmButtonText: botones[0] || 'Aceptar',
            cancelButtonText: botones[1] || 'Cancelar',
        }).then((result) => {
            // Devuelve el texto del botón si se confirmó, o null si se canceló
            if (result.isConfirmed) return botones[0];
            return null;
        });
    } else {
        // Alerta simple
        return Swal.fire({
            title: titulo,
            text: texto,
            icon: icono,
            confirmButtonText: botones || 'Aceptar',
        });
    }
}