import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBUMzVL1YDCiaIR6306vsjz8x8fS7fcMJA';


// Create new Component which create new HTML
const App = () => {

	return (
		<div>
			<SearchBar />
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector('.container'));
