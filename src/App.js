import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component{
constructor(){
  super();
  this.state={
    monsters: [],
    searchField:''
 };

 this.handleChange = this.handleChange.bind(this);

 this.handleClick2 = this.handleClick1.bind(this);
}

componentDidMount(){

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => this.setState({monsters:users}));

}

// handleChange(c){
//   this.setState({searchField: c.target.value});
// }

handleChange= (c)=>{
  this.setState({searchField: c.target.value});
}

handleClick1(){
  console.log('button 999991 clicked');
  //console.log(this);
}
handleClick3 = () => console.log('button 3 clicked');

  render(){
    const { monsters, searchField }=this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return( 
      <div className="App">
      <button onClick={this.handleClick1()}>click 1</button>
      <button onClick={this.handleClick1}>click 2</button>
      <button onClick={this.handleClick2}>click 3</button>
      <button onClick={this.handleClick3}>click 4</button>
     </div>

 




    );


}
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           heloo my name is Marjan.
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
