import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './pages/common/Header';
import CharatersMain from './pages/charaters/CharatersMain';
import Seacrh from './pages/common/Search';

const App = () => {
	const [ items, setItems ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	const [ query, setQuery ] = useState('');

	useEffect(
		() => {
			const fetchItems = async () => {
				const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);

				setItems(result.data);
				setLoading(false);
			};

			fetchItems();
		},
		[ query ]
	);

	return (
		<div className="container">
			<Header />
			<Seacrh getQuery={(q) => setQuery(q)} />
			<CharatersMain items={items} loading={loading} />
		</div>
	);
};

export default App;
