import React, { Component } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class CreateExercise extends Component{

    constructor(props){
        super(props);

        this.state = {
            user: {
                username: '',
                description: '',
                duration: '',
                date: new Date()
            },
            users: [],
        }
    }

    onChangeField = (e)=>{
        const {name, value} = e.target;
        var user = {...this.state.user};
        user[name] = value;
        this.setState({
            user
        })
    }

    onChangeDate = (date)=>{
        let user = {...this.state.user};
        user.date = date;
        this.setState({
            user
        })
    }

    onSubmit = (e)=>{
        e.preventDefault();

            const exercise = this.state;
            console.log(exercise);
    }


    render(){
        return(
            <div>
                <h3>Create Exercise</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <form class="add-exercise-form" onSubmit={this.onSubmit} action="">
                                <div className="form-group">
                                    <label for="username">Username:</label>
                                    <input type="text" name="username" id="username" onChange={this.onChangeField} value={this.state.user.username} className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label for="description">Description:</label>
                                    <input type="text" name="description" id="description" onChange={this.onChangeField} value={this.state.user.description} className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label for="duration">Duration:</label>
                                    <input type="text" name="duration" id="duration" onChange={this.onChangeField} value={this.state.user.duration} className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label for="date">Date:</label>
                                    <div>
                                        <DatePicker selected={this.state.date} onChange={this.onChangeDate} className="form-control"/>
                                    </div>
                                </div>
                                <input type="submit" className="btn btn-sucess" value="Submit"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateExercise;