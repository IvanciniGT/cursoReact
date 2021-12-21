import React from "react";
import PropTypes from "prop-types";
import "./User.css"

class User extends React.Component{
    
    constructor(props){
        super(props);  // Los props los entendemos como constantes. No se editan
    }
     
    render(){
        return (
                <div class="user">
                    <div class="info">
                        <div class="firstName"> { this.props.firstName } </div>
                        <div class="lastName"> { this.props.lastName } </div>
                    </div>
                </div>
            );
    }
    
}

User.propTypes={
    firstName: PropTypes.string,
    lastName: PropTypes.string.isRequired,
};

User.defaultProps={
    lastName: "Mister",
};

export default User;