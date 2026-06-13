import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import data from './data/videojuegos.js'
import TablaVideojuegos from './components/TablaVideojuegos'
import FormularioVideojuego from './components/FormularioVideojuego.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import PaginaNoEncontrada from './components/PaginaNoEncontrada.jsx'
import AlertaNotificacion from './components/AlertaNotificacion.jsx'

function App() {
  const [videojuegos, setVideojuegos] = useState(() => {
    const datosGuardados = localStorage.getItem("lista_videojuegos");
    return datosGuardados ? JSON.parse(datosGuardados) : [];
  })

  useEffect(() => {
    localStorage.setItem("lista_videojuegos", JSON.stringify(videojuegos));
  }, [videojuegos]);
  
  const [alerta, setAlerta] = useState(null);
  function mostrarAlerta(msg) {
    setAlerta(msg);
  };

  function nuevoVJ(nuevoVJ) {
    setVideojuegos([...videojuegos, nuevoVJ]);
  }

  function eliminarVJ(id) {
    setVideojuegos(videojuegos.filter(vj => vj.id !== id));
    mostrarAlerta("Videojuego eliminado correctamente");
  }

  function actualizarVJ(id, videojuego) {
    setVideojuegos(videojuegos.map(vj => 
      vj.id === id ? {...videojuego } : {...vj}
    ));
  }

  function manejarGuardar(videojuego) {
    const existe = videojuegos.find(e => e.id === videojuego.id);
    if(existe) {
      actualizarVJ(videojuego.id, videojuego);
      mostrarAlerta("Videojuego actualizado con exito");
    }else{
      nuevoVJ(videojuego);
      mostrarAlerta("Videojuego registrado con exito");
    }
  };

  return (
    <BrowserRouter>
      <Navbar />
      {alerta && <AlertaNotificacion mensaje={alerta} onClose={() => setAlerta(null)} />}
      <Routes>
        <Route path="/tabla" element={
          <TablaVideojuegos 
            videojuegos={videojuegos}
            onEliminar={eliminarVJ}
            onEditar={actualizarVJ}
          />
        }/>
        <Route path="/formulario" element={
          <FormularioVideojuego onGuardar={manejarGuardar}/>
        }/>
        <Route path="/editar" element={
          <FormularioVideojuego onGuardar={manejarGuardar}/>
        }/>
        <Route path="*" element={<PaginaNoEncontrada/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
