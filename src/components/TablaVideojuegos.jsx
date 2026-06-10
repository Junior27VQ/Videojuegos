import './TablaVideojuegos.css';

function TablaVideojuegos({ videojuegos }) {
  return (
    <div className="tabla-container">
      <header className="tabla-header">
        <h2>Lista de Videojuegos</h2>
        <p>Total de registros: {videojuegos.length}</p>
      </header>

      <div className="table-wrapper">
        <table className="modern-table">
          <thead>
            <tr>
              <th>Título</th>
              <th>Género</th>
              <th>Plataforma</th>
              <th>Lanzamiento</th>
              <th>Precio</th>
              <th>Disponible</th>
              <th>Progreso</th>
            </tr>
          </thead>
          <tbody>
            {videojuegos.map((juego) => (
              <tr key={juego.id}>
                <td><strong>{juego.titulo}</strong></td>
                <td>{juego.genero}</td>
                <td>{juego.plataforma}</td>
                <td>{juego.lanzamiento}</td>
                <td>${juego.precio.toFixed(2)}</td>
                <td>
                  <span className={`status-badge ${juego.disponible ? 'yes' : 'no'}`}>
                    {juego.disponible ? 'Sí' : 'No'}
                  </span>
                </td>
                <td className="progress-cell">
                  <span>{(juego.progreso * 100).toFixed(0)}%</span>
                  <progress value={juego.progreso} max="1"></progress>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default TablaVideojuegos

