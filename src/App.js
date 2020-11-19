import React, {Component} from 'react';
import './App.css';
import FirstTask from "./components/FirstTask/FirstTask";
import Navigation from "./components/Navigation/Navigation";
import Title from "./components/Title/Title";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {

    render() {
        return (
            <div>
                <Navigation/>
                <ToastContainer />
            </div>
        );
    }
}

export default App;