import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Exercise = (props) => {
    const formattedDate = new Date(props.exercise.date).toLocaleDateString().substring(0,15);
    return (<tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{formattedDate}</td>
        <td>
            <Link to={"/edit/" + props.exercise._id}>Edit</Link> | <a href="#" onClick={()=>{props.deleteExercise(props.exercise._id)}}>Delete</a>
        </td>
    </tr>)
}

export default class ExercisesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            exercises: []
        }

    }

    componentDidMount() {
        axios.get('http://localhost:3000/exercises').then(
            (res) => {
                console.log(res.data);
                this.setState({ exercises: res.data })
            }
        ).catch(
            (error) => { console.log(error) }
        )
    }

    deleteExercise(id) {
        axios.delete('http://localhost:3000/exercises/' + id).then(
            (res) => {
                console.log(res.data);
                this.setState({
                    exercises: this.state.exercises.filter((el) => el._id !== id)
                })
            }
        ).catch(
            () => { }
        )
    }

    exerciseList() {
        return this.state.exercises.map(currentexercise => {
          return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
        })
      }
    
      render() {
        return (
          <div>
            <h3 className="text-center my-2">Logged Exercises</h3>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                    <table className="table table-responsive-sm" style={{fontSize: "medium"}}>
                        <thead className="thead-light">
                            <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.exerciseList() }
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
          </div>
        )
      }
    }