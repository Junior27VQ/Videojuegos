function TablaVideojuegos({ videojuegos }) {
    return (
        <div>
            <h2>Lista de Videojuegos</h2>
            <p>Total de registros: {videojuegos.length}</p>
        <table>
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Genero</th>
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
                        <td>{juego.titulo}</td>
                        <td>{juego.genero}</td>
                        <td>{juego.plataforma}</td>
                        <td>{juego.lanzamiento}</td>
                        <td>${juego.precio.toFixed(2)}</td>
                        <td>{juego.disponible ? 'Sí' : 'No'}</td>
                        <td>{(juego.progreso * 100).toFixed(2)}%
                            <progress value={juego.progreso} max="1"></progress>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
} 

