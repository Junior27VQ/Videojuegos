import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function FormularioVideojuego({onGuardar}) {
    const location = useLocation();

    const reguperarVJ = location.state?.videojuego || null;

    const [titulo, setTitulo] = useState('');
    const [genero, setGenero] = useState('');
    const [plataforma, setPlataforma] = useState('');
    const [lanzamiento, setLanzamiento] = useState('');
    const [precio, setPrecio] = useState('');
    const [disponible, setDisponible] = useState('');
    const [progreso, setProgreso] = useState('');

    useEffect(() => {
        if(reguperarVJ){
            setTitulo(reguperarVJ.titulo);
            setGenero(reguperarVJ.genero);
            setPlataforma(reguperarVJ.plataforma);
            setLanzamiento(reguperarVJ.lanzamiento);
            setPrecio(reguperarVJ.precio);
            setDisponible(reguperarVJ.disponible);
            setProgreso(reguperarVJ.progreso);
        }else{
            setTitulo('');
            setGenero('');
            setPlataforma('');
            setLanzamiento('');
            setPrecio('');
            setDisponible('');
            setProgreso('');
        }
    },[reguperarVJ]);

    function guardar() {
        const vj = {
            id: reguperarVJ ? reguperarVJ.id : Date.now(),
            titulo: titulo,
            genero: genero,
            plataforma: plataforma,
            lanzamiento: lanzamiento,
            precio: parseInt(precio),
            disponible: disponible,
            progreso: progreso
        };
        onGuardar(videojuego);
    }

    return(
        <div>
            <h2></h2>
            <div>
                <label>Titulo</label>
                <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
            </div>
            <div>
                <label>Genero</label>
                <input type="text" value={genero} onChange={(e) => setGenero(e.target.value)}/>
            </div>
            <div>
                <label>Plataforma:</label>
                <select value={plataforma} onChange={(e) => setPlataforma(e.target.value)}>
                    <option value="">Seleccionar...</option>
                    <option value="PlayStation 4">PlayStation 4</option>
                    <option value="Multiplataforma">Multiplataforma</option>
                    <option value="PC">PC</option>
                    <option value="Nintendo Switch">Nintendo Switch</option>
                </select>
            </div>
            <div>
                <label>Lanzamiento:</label>
                    <input type="date" value={lanzamiento} onChange={(e) => setLanzamiento(e.target.value)}/>
            </div>
            <div>
                <label>Precio</label>
                <input type="number" value={precio} onChange={(e) => setPrecio(e.target.value)}/>
            </div>
            <div>
                <label>Estado:</label>
                <input type="checkbox" checked={disponible} onChange={(e) => setDisponible(e.target.checked)}/>
            </div>
            <div>
                <label>Progreso:</label>
                <input type="number" value={progreso} onChange={(e) => setProgreso(e.target.value)}/>
            </div>
            <div>
                <button onClick={guardar}>Guardar</button>
            </div>
        </div>
    )
}
export default FormularioVideojuego;