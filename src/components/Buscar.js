import React from 'react';
import { MdSearch } from 'react-icons/md';

const Buscar = ({ handleSearchNote }) => {
	return (
		<div className='buscar'>
			<MdSearch className='buscar-icons' size='1.3em' />
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder=' buscar nota o texto...'
			/>
		</div>
	);
};

export default Buscar;
