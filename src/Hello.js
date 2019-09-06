import React , {Component} from 'react';
import  './Hello.css';

class Hello extends Component {
	render(){
		return (   //return 多行需要用 ()  否則會error
			<div className='f1 tc'>    
				<h1>Hello World!!!!</h1>
				<p>Welcome + {this.props.greeting}</p>
			</div>
		)
	}


}
export default Hello;  //記得最後要有export 才能夠被使用 