import React,{Component} from 'react';
import CardList from './cardList';
import SearchBox from './SearchBox';
import {robots} from './robots';



class App extends Component {
	constructor(){
		super()
		this.state = {
			robots:robots,
			searchfield:''
		}
	}



	onSearchCange = (event) => {
		this.setState({searchfield:event.target.value})
		}
	

	render(){
				// 下一行filter是陣列的方法
		const filteredRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})

		

		return(

				<div className='tc'>
					<h1>RoboFriends</h1>
					<SearchBox searchChange = {this.onSearchCange}/>
					<CardList robots = {filteredRobots}/>
				</div>
			);
	}
}

export default App;