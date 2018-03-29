import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const cars = {
  "Toyota": ["Yaris", "Corolla", "Camry", "Prius", "Avanza"],
  "Kia": ["Cerato", "Rio"],
  "Hyundai": ["Accent", "Elantra", "Sonata"],
  "Suzuki": ["Swift", "Baleno", "Celerio"],
  "BMW":["x5"]
};


class App extends Component {

  constructor(props){
    //var selectedMake='';
    super(props);
    this.state = {selectedMake:'',modelText:''};
    this.handleMakeChange=this.handleMakeChange.bind(this);
    this.handleModelChange=this.handleModelChange.bind(this);
    
  }
  handleMakeChange(val){
    console.log(val);
    //this.state.selectedMake=val;
    this.setState({selectedMake: val});
   // this.props.handleMakeChange(val);
  }
  handleModelChange(model){
    console.log(model);
    //this.state.modelText=model;
    this.setState({modelText: model});
   
   // this.props.handleMakeChange(val);
  }
  render() {
//console.log(this.selectedMake , this.modelText)
    return (
      <div >
       <VehicleInput handleMakeChange={this.handleMakeChange} handleModelChange={this.handleModelChange}/>
       <VehicleOutput make={this.state.selectedMake} model={this.state.modelText} />
      </div>
    );
  }
}

class	VehicleInput extends Component {
  constructor(props)
  {
    super(props);
    this.handleMakeChange=this.handleMakeChange.bind(this);
    this.handleModelChange=this.handleModelChange.bind(this);
  }
  handleMakeChange(val){
    //console.log(val);
    this.props.handleMakeChange(val);
  }
  handleModelChange(e){
    //console.log(model);
    //this.props.handleModelChange(model);
    this.props.handleModelChange(e.target.value);
  }
  render(){
    var dropDownData=[];
  for(var i in cars)dropDownData.push(i);
    return (
      <div>
        <p> Select car Make  <DropDown data={dropDownData} handleMakeChange={this.handleMakeChange}/></p>
        <p> Enter Car Model: <input type='text' onChange={this.handleModelChange} /> </p>
      </div>
    );
  }
}

class	DropDown extends Component {
  constructor(props)
  {
    super(props);

    this.handleMakeChange = this.handleMakeChange.bind(this);
  }
  handleMakeChange(e){
   // console.log(e.target.value);
    this.props.handleMakeChange(e.target.value);
  }
  render(){
    var ops=[];
    for(var i in this.props.data ) {
      ops.push(<option key={i}  value={this.props.data[i]} > {this.props.data[i]} </option>);
    }

    
    return (
      <select onChange={this.handleMakeChange}>
        {ops}
      </select>
    );
  }
}



class	VehicleOutput extends Component {
  constructor(props){
    super(props);
  }
  
  render(){
    var ops=[];
    console.log('test', this.props.make , this.props.model);
  var exists='This Vehicle does NOT exist';
    for(var i in cars ){
      //console.log(i + (i==this.props.make) + " " +this.props.make );
      
       if(i==this.props.make){
         if(cars[i].indexOf(this.props.model)!==-1) exists='This Vehicle exists';
        
       }
      
    }
    return (
      <div>
        {exists}
      </div>
    );
  }
}


export default App;
