import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './FormularioVideojuego.css';

function FormularioVideojuego({onGuardar}) {
    const location = useLocation();
    const navigate = useNavigate();

    const reguperarVJ = location.state?.videojuego || null;

    const [titulo, setTitulo] = useState('');
    const [genero, setGenero] = useState('');
    const [plataforma, setPlataforma] = useState('');
    const [lanzamiento, setLanzamiento] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [calificacion, setCalificacion] = useState('');
    const [precio, setPrecio] = useState('');
    const [disponible, setDisponible] = useState(false);
    const [progreso, setProgreso] = useState('');

    useEffect(() => {
        if(reguperarVJ){
            setTitulo(reguperarVJ.titulo);
            setGenero(reguperarVJ.genero);
            setPlataforma(reguperarVJ.plataforma);
            setLanzamiento(reguperarVJ.lanzamiento);
            setDescripcion(reguperarVJ.descripcion);
            setCalificacion(reguperarVJ.calificacion);
            setPrecio(reguperarVJ.precio);
            setDisponible(reguperarVJ.disponible);
            setProgreso(reguperarVJ.progreso);
        }else{
            setTitulo('');
            setGenero('');
            setPlataforma('');
            setLanzamiento('');
            setDescripcion('');
            setCalificacion('');
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
            descripcion: descripcion,
            calificacion: calificacion,
            precio: parseInt(precio),
            disponible: disponible,
            progreso: progreso
        };
        onGuardar(vj);
        navigate("/tabla");
    }

    return(
        <div className="vj-form-container">
        <div className="vj-card">
            <h2>{reguperarVJ ? "Editar Videojuego" : "Nuevo Videojuego"}</h2>
            
            <div className="vj-group">
                <label>Título</label>
                <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
            </div>
            
            <div className="vj-row">
                <div className="vj-group">
                    <label>Género</label>
                    <input type="text" value={genero} onChange={(e) => setGenero(e.target.value)}/>
                </div>
                <div className="vj-group">
                    <label>Plataforma</label>
                    <select value={plataforma} onChange={(e) => setPlataforma(e.target.value)}>
                        <option value="">Seleccionar...</option>
                        <option value="PlayStation 4">PlayStation 4</option>
                        <option value="Multiplataforma">Multiplataforma</option>
                        <option value="PC">PC</option>
                        <option value="Nintendo Switch">Nintendo Switch</option>
                    </select>
                </div>
            </div>
            <div className="vj-group">
                <label>Fecha de Lanzamiento</label>
                <input type="date" 
                    max={new Date().toISOString().split("T")[0]}
                    value={lanzamiento} onChange={(e) => setLanzamiento(e.target.value)}
                />
            </div>
            <div className="vj-row">
                <div className="vj-group">
                    <label>Descripcion</label>
                    <textarea
                        minLength="10"
                        maxLength="250"
                        value={descripcion} onChange={(e) => setDescripcion(e.target.value)}
                    />
                </div>
                <div className="vj-group">
                    <label>Calificacion de las Criticas (1-100)</label>
                    <input type="number" 
                        min="1"
                        max="100"
                        value={calificacion} onChange={(e) => setCalificacion(e.target.value)}
                    />
                </div>
            </div>
            <div className="vj-row">
                <div className="vj-group">
                    <label>Precio ($)</label>
                    <input type="number" value={precio} onChange={(e) => setPrecio(e.target.value)}/>
                </div>
                <div className="vj-group">
                    <label>Progreso (%)</label>
                    <input type="number" value={progreso} onChange={(e) => setProgreso(e.target.value)}/>
                </div>
            </div>
            <div className="vj-checkbox">
                <input type="checkbox" id="disponible" checked={disponible} onChange={(e) => setDisponible(e.target.checked)}/>
                <label htmlFor="disponible">Disponible en biblioteca</label>
            </div>

            <button className="vj-btn" onClick={guardar}>Guardar Registro</button>
        </div>
    </div>
    )
}
export default FormularioVideojuego;