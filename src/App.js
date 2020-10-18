import React, {Component} from 'react';
import './App.css';
import FirstTask from "./components/FirstTask/FirstTask";
import Navigation from "./components/Navigation/Navigation";

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