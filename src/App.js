import React from 'react';
import './App.css';
import {Cards, Chart, CountryPicker} from './components/'
import {fetchData} from './api'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
      data : {}
    })
  }
  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data: fetchedData})
  }
  
  render(){
    const { data } = this.state;
    return (
      <div className = "app-container"  >
        <Cards data={data}/>
        <CountryPicker/>
        <Chart/>
        
      </div>
    );
  }
}

export default App;
