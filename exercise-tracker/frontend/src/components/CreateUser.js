import React, { Component } from "react";
import axios from 'axios';

class CreateUser extends Component{

    constructor(props){
        super(props);

        this.state = {
            username: ''
        }
    }

    onChangeUsername = (e)=>{
        this.setState({
            username: e.target.value
        })
    }

    onSubmit = (e)=>{
        e.preventDefault();
        if(this.state.username.trim()){
            const user = this.state;
            console.log(user);
    
            axios.post('http://localhost:3000/users/add', user).then(
                (res)=>{console.log(res.data)}
            )
    
            this.setState({
                username: ''
            })
        }
    }

    render(){
        return(
            <div>
                <h3 className="text-center my-2">Create User</h3>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-8">
                            <form className="add-exercise-form" onSubmit={this.onSubmit} action="">
                                <div className="form-group">
                                    <label htmlFor="username">Username:</label>
                                    <input type="text" name="username" id="username" onChange={this.onChangeUsername} value={this.state.username} className="form-control"/>
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

export default CreateUser;