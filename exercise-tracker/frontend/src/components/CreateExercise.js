import React, { Component } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

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

    componentDidMount(){
        axios.get('http://localhost:3000/users').then(
            (res)=>{
                if(res.data.length > 0){
                    let user = {...this.state.user};
                    user.username = res.data[0].username;
                    this.setState({
                        users: res.data.map((user)=>{return user.username}),
                        user
                    })
                }
            }
        )
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

        if(this.state.user.username && this.state.user.description.trim() && this.state.user.duration.trim() && this.state.user.date){
            const exercise = this.state.user;
            console.log(exercise);

            axios.post('http://localhost:3000/exercises/add', exercise).then(
                (res)=>{console.log(res.data)}
            )

            let user = {...this.state.user};
            user.username = '';
            user.description = '';
            user.duration = '';
            user.date = new Date();
            this.setState({
                user
            })            
        }
    }


    render(){
        return(
            <div>
                <h3 className="text-center my-2">Create Exercise</h3>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-8">
                            <form className="add-exercise-form" onSubmit={this.onSubmit} action="">
                                <div className="form-group">
                                    <label htmlFor="username">Username:</label>
                                    <select name="username" id="username" onChange={this.onChangeField} className="form-control">
                                        {this.state.users.map((user)=>{
                                            return <option key={user} value={user}>{user}</option> 
                                        })}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Description:</label>
                                    <input type="text" name="description" id="description" onChange={this.onChangeField} value={this.state.user.description} className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="duration">Duration:</label>
                                    <input type="text" name="duration" id="duration" onChange={this.onChangeField} value={this.state.user.duration} className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="date">Date:</label>
                                    <div>
                                        <DatePicker selected={this.state.date} onChange={this.onChangeDate} value={this.state.user.date.toLocaleDateString()} className="form-control"/>
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