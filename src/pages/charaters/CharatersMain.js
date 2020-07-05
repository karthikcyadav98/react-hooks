import React from 'react';
import Spinner from '../../img/spinner.gif';
import CharacterItems from './CharacterItems';

const CharatersMain = (props) => {
	return props.loading ? (
		<img src={Spinner} style={{ width: '200px', margin: 'auto', display: 'block' }} alt="" />
	) : (
		<section className="cards">
			{props.items.map((item) => <CharacterItems key={item.char_id} item={item} />)}
		</section>
	);
};

export default CharatersMain;
