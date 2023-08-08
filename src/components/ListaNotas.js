import Nota from './Nota';
import AggNotas from './AggNotas';

const ListaNotas = ({
	notes,
	handleAddNote,
	handleDeleteNote,
}) => {
	return (
		<div className='listNotas'>
			{notes.map((note) => (
				<Nota
					id={note.id}
					text={note.text}
					date={note.date}
					handleDeleteNote={handleDeleteNote}
				/>
			))}
			<AggNotas handleAddNote={handleAddNote} />
		</div>
	);
};

export default ListaNotas;
