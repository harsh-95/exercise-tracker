import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ExercisesList from './components/ExercisesList';
import EditExercise from './components/EditExercise';
import CreateExercise from './components/CreateExercise';
import CreateUser from './components/CreateUser';


class App extends Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                <Navbar/>
                    <Switch>
                        <Route exact path="/" component={ExercisesList} />
                        <Route exact path="/edit/:id" component={EditExercise} />
                        <Route exact path="/create" component={CreateExercise} />
                        <Route exact path="/user" component={CreateUser} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;