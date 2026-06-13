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

    const [errores, setErrores] = useState({});

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

    function validarFormulario() {
        let erroresActivos = {};
        if(!titulo.trim()) {
            erroresActivos.titulo = "El titulo es obligatorio";
        }
        if(calificacion < 1 || calificacion > 100) {
            erroresActivos.calificacion = "La clificacion debe estar entre 1 y 100";
        }
        if(descripcion.length < 10 || descripcion.length > 250) {
            erroresActivos.descripcion = "La descripcion debe tener entre 10 y 250 caracteres";
        }
        return erroresActivos;
    };

    function guardar(e) {
        e.preventDefault();
        
        const erroresActivos = validarFormulario();
        if(Object.keys(erroresActivos).length > 0) {
            setErrores(erroresActivos);
            return;
        }

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
    };

    return(
        <div className="vj-form-container">
        <div className="vj-card">
            <h2>{reguperarVJ ? "Editar Videojuego" : "Nuevo Videojuego"}</h2>
            
            <div className="vj-group">
                <label>Título</label>
                <input type="text" className={errores.titulo ? "error" : ""} value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
                {errores.titulo && <span className="error-mensaje">{errores.titulo}</span>}
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
                        className={errores.descripcion ? "error" : ""}
                        value={descripcion} onChange={(e) => setDescripcion(e.target.value)}
                    />
                    {errores.descripcion && <span className="error-mensaje">{errores.descripcion}</span>}
                </div>
                <div className="vj-group">
                    <label>Calificacion de las Criticas (1-100)</label>
                    <input type="number" 
                        min="1"
                        max="100"
                        className={errores.calificacion ? "error" : ""}
                        value={calificacion} onChange={(e) => setCalificacion(e.target.value)}
                    />
                    {errores.calificacion && <span className="error-mensaje">{errores.calificacion}</span>}
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