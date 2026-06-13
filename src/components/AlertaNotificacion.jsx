import { useEffect } from 'react';
import './AlertaNotificacion.css';

function AlertaNotificacion({ mensaje, onClose }) {
    useEffect(() => {
        // Temporizador de 3 segundos para cerrar la alerta automáticamente
        const timer = setTimeout(() => {
            onClose();
        }, 3000);

        // Limpieza del temporizador al desmontar el componente
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="toast-alerta">
            {mensaje}
        </div>
    );
}
export default AlertaNotificacion;