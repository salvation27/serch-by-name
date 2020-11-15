import React from 'react'
import './App.css';
import DogList from './DogList'
import SerchBox from './SerchBox';

const dogsData = [
  {name:'Макс',breed:'labrador'},
  {name:'Спайк',breed:'tacksa'},
  {name:'Джесси',breed:'boxer'},
  {name:'Барсик',breed:'pitbul'},
]

class App extends React.Component {


  state={
    dogs:dogsData,
    serchDog:''
  }


  handleInput = (e) =>{
    this.setState({
      serchDog:e.target.value
    })
  }

 render(){
   let filteredDogs = this.state.dogs.filter((dog)=>{
       return dog.name.toLowerCase().includes(this.state.serchDog.toLowerCase())
   })
  return (
    <div className="App">
      <SerchBox handleInput={this.handleInput} />
      <DogList dogs={filteredDogs} />
    </div>
  );
 }
}

export default App;
