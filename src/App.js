import React,  { Component } from 'react';
import Card from './components/CardContainer';
import './App.css';
import axios from 'axios'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import AppBar  from  './components/AppBar';

// removes cors error
const proxyurl = "https://cors-anywhere.herokuapp.com/";
let SalesLoft_API_TOKEN = process.env.REACT_APP_SalesLoft_API_TOKEN;
let SalesLoftURL = 'https://api.salesloft.com/v2/people.json'
const AuthStr = 'Bearer ' + SalesLoft_API_TOKEN;

class App extends Component {

  state = {
    people: [],
    show: false
  }

  componentDidMount() {
//     grapping people data from SalesLoft API
    axios.get(`${proxyurl}${SalesLoftURL}`, { 'headers': { 'Authorization': AuthStr } })
//     storing them within state
    .then(res => this.setState({
      ...this.state,
      people: res.data
    }))
    .catch(err => console.log(err))
  }

  handleClick = (e) => {
    e.preventDefault();
//     updating show on show count btn click
//     shows list of the highest counted letters in email
    this.setState({
      ...this.state,
      show: !this.state.show
    })
  }
  render() {
    // conditionally rendering the loader or data
    const {data, metadata} = this.state.people;
    if (data) {
      return (
        <>
        <AppBar />
        <div className="cardContainer">
          <button onClick={(e) => this.handleClick(e)} className="btn">Show Count</button>
          {data.map(person => {
              return <Card key={person.id} person={person} show={this.state.show}/>
          })}
        </div>
        <AppBar/>
        </>  
    )
    } else {
//       loader while api call is being made
      return  <div style={{display: "flex", justifyContent: "center", marginTop: "10%"}} >
                  <Loader label="loader" className='loader' type="Puff" color="#00BFFF" height={300} width={300}/>
              </div>
    }
  }
}

export default App;
