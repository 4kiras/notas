import React from 'react';

const Cabecera = ({ handleToggleDarkMode }) => {
	return (
		<div className='cabecera'>
			<h1>Notas</h1>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='save'
			>
				Modo de Visualización
			</button>
		</div>
	);
};

export default Cabecera;
