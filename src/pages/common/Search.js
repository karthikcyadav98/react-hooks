import React, { useState } from 'react';

const Search = (props) => {
	const [ text, setText ] = useState('');

	const handleChangeText = (e) => {
		setText(e.target.value);
		props.getQuery(e.target.value);
	};

	return (
		<section className="search">
			<form>
				<input
					type="text"
					className="form-control"
					placeholder="Search..."
					value={text}
					onChange={(e) => handleChangeText(e)}
					autofocus
				/>
			</form>
		</section>
	);
};

export default Search;
