import React, { Component } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

class EditExercise extends Component{

    constructor(props){
        super(props);

        this.state = {
            user: {
                username: '',
                description: '',
                duration: '',
                date: ''
            },
            users: [],
        }
    }

    componentDidMount(){

        axios.get('http://localhost:3000/exercises/'+this.props.match.params.id).then(
            (res)=>{
                let user = {...this.state.user}
                user.username = res.data.username;
                user.description = res.data.description;
                user.duration = res.data.duration;
                user.date = res.data.date;

                this.setState({
                    user
                })
            }
        )

        axios.get('http://localhost:3000/users').then(
            (res)=>{
                if(res.data.length > 0){
                    this.setState({
                        users: res.data.map((user)=>{return user.username}),
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
        console.log(date);
        console.log(date.toISOString());
        console.log(date.toUTCString());
        let user = {...this.state.user};
        user.date = date.toISOString();
        this.setState({
            user
        })
    }

    onSubmit = (e)=>{
        e.preventDefault();

            let exercise = this.state.user;
            console.log(exercise);

            axios.post('http://localhost:3000/exercises/update/'+this.props.match.params.id, exercise).then(
                (res)=>{console.log(res.data)}
            )

            window.location = '/';
    }


    render(){
        return(
            <div>
                <h3>Edit Exercise</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <form className="add-exercise-form" onSubmit={this.onSubmit} action="">
                                <div className="form-group">
                                    <label htmlFor="username">Username:</label>
                                    <select name="username" id="username" onChange={this.onChangeField} value={this.state.user.username} className="form-control">
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
                                        <DatePicker selected={this.state.date} value={new Date(this.state.user.date).toLocaleDateString()} onChange={this.onChangeDate} className="form-control"/>
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

export default EditExercise;