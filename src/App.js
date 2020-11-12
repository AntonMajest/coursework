import React, {Component} from 'react';
import './App.css';
import FirstTask from "./components/FirstTask/FirstTask";
import Navigation from "./components/Navigation/Navigation";
import Title from "./components/Title/Title";

class App extends Component {

    render() {
        return (
            <div>
                <Navigation/>
            </div>
        );
    }
}

export default App;