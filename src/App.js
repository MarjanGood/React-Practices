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
    searchField:'',
    title:''
 };

 //this.handleChange = this.handleChange.bind(this);
}

componentDidMount(){

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => this.setState({monsters:users}));

}

// handleChange(c){
//   this.setState({searchField: c.target.value});
// }

handleChange = (event) => {
  this.setState({searchField: event.target.value, title: event.target.value});
}

  render(){
    const { monsters, searchField, title }= this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return( 
     <div className="App">
       <h1>{ title }</h1>
     <SearchBox 
     placeholder="search monsters"
     handleChange ={this.handleChange}/>

      {/* 
       <input type="search" 
        placeholder='search monsters'
        onChange={c => {
        this.setState({searchField: c.target.value});
        console.log(this.state);
        }
      }/>
      */}

     <CardList monsters = {filteredMonsters} />  


     {/* <div>
      <button onClick={this.handleClick1()}>click 1</button>
      <button onClick={this.handleClick1}>click 2</button>
      <button onClick={this.handleClick2}>click 3</button>
      <button onClick={this.handleClick3}>click 4</button>
     </div> */}

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
