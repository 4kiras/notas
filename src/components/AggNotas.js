import { useState } from 'react';

const AggNotas = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState('');
	const limiteCaracteres = 300;
	//const con = 0;

	const handleChange = (event) => {
		if (limiteCaracteres - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText);
			//con++;
			setNoteText('');
		}
	};

	return (
		<div className='note new'>
			<textarea
				rows='8'
				cols='10'
				placeholder='Empiece a escribir'
				value={noteText}
				onChange={handleChange}
			></textarea>
			<div className='note-footer'>
				<small>
					{limiteCaracteres - noteText.length} palabras Restantes
				</small>
				<button className='save' onClick={handleSaveClick}>
					Guardar
				</button>
			</div>
		</div>
	);
};

export default AggNotas;
