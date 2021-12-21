import React from "react";
import PropTypes from "prop-types";
import UserData from "./UserData";
import "./User.css"

class User extends React.Component{
    
    constructor(props){
        super(props);  // Los props los entendemos como constantes. No se editan
        this.userInfo=UserData.userInfo(props.id);
    }
     
    render(){
        return (
                <div class="user">
                    <div class="info">
                        <div class="firstName"> { this.userInfo.firstName } </div>
                        <div class="lastName"> { this.userInfo.lastName } </div>
                    </div>
                </div>
            );
    }
    
}

User.propTypes={
    id: PropTypes.string.isRequired,
};

User.defaultProps={
};

export default User;