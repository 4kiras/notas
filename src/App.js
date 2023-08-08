import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ListaNotas from './components/ListaNotas';
import Buscar from './components/Buscar';
import Cabecera from './components/Cabecera';

const App = () => {
	const date = new Date();
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: 'Hola Mundo 2.0!',
			date: date.toLocaleDateString(),
		},
	]);

	const [searchText, setSearchText] = useState('');

	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
				<Cabecera handleToggleDarkMode={setDarkMode} />
				<Buscar handleSearchNote={setSearchText} />
				<ListaNotas
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default App;