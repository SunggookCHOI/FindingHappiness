import React, {Component } from 'react';
import NavBar from './components/NavBar';
import Counter from './components/firstChart';
import BarChart from './components/locationChart';

class App extends Component {
    
    render(){
        return (
            <div>
                <NavBar />
                <Counter />
                <BarChart />
            </div>
        );
    }
}

export default App;