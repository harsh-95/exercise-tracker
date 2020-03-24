import React, { Component } from "react";

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

        const user = this.state;
        console.log(user);
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