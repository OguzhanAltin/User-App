import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from "../context";
import axios from "axios";
import {Link} from "react-router-dom";

 class User extends Component {

        state={
            isVisible: false
        }
        
    onClickEvent = (e) => {
        this.setState({
            isVisible : !this.state.isVisible
        })
     }

     onDeleteUser = async (dispatch,e) => {
        const {id} = this.props;
        await  axios.delete(`http://localhost:3004/users/${id}`);
        
        dispatch({type: "DELETE_USER", payload:id});
     }

    
     
    render() {

        const {id,name,department,salary} = this.props;
        const {isVisible} = this.state;

        return (
            <UserConsumer>
                {
                    value => {
                        const {dispatch} = value;

                        return (
            <div className= "col-md-8 mb-4">
                <div className="card" style= {isVisible ?{backgroundColor : "#9365a8",color: "white"}: null}>
                    <div className="card-header d-flex justify-content-between">
                        <h4 className="d-inline" onClick={this.onClickEvent}>{name}</h4>
                        <i onClick={this.onDeleteUser.bind(this,dispatch)} className="far fa-trash-alt" style={{cursor:"pointer"}}></i>
                    </div>

                    {

                        isVisible ? <div className="card-body">
                        <p className="card-text">Salary: {salary} </p>
                        <p className="card-text">Department: {department} </p>
                        <Link to = {`update/${id}`} className = "btn btn-dark btn-block">Update User</Link>
                    </div> : null

                    }
                    
                </div>
            </div>
        )

                    }
                }
            </UserConsumer>
        )
        
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}

export default User;