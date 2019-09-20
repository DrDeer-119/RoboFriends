import React from 'react';
import CardList from './cardList';
import SerachBox from './SearchBox';
import {robots} from './robots';

const App = () => {
	return(
			<div>
				<h1>RoboFriends</h1>
				<SerachBox />
				<CardList robots = {robots}/>
			</div>
		);
}

export default App;