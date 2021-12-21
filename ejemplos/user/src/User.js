import React from "react";
import PropTypes from "prop-types";
import UserData from "./UserData";
import "./User.css"

class User extends React.Component{
    static FIELDS={
        "minimal": {
            "info": ["firstName","lastName",], 
            "more": ["email","phone","jobPosition","department"]
        },
        "normal": {
            "info": ["firstName","lastName","email"], 
            "more": ["phone","jobPosition","department"]
        },
        "extended": {
            "info": ["firstName","lastName","email","phone","jobPosition","department"], 
            "more": []
        },
    }
    constructor(props){
        super(props);  // Los props los entendemos como constantes. No se editan
        this.userInfo=UserData.userInfo(props.id);
        this.state=this.generateState(false);
    }
    toogleMore(){
        this.setState(this.generateState(!this.state.showMore));
    }
    generateState(showMore){
        return {"showMore": showMore};
    }
    render(){
                    // JSX    VVVVVVV
        return (
            <div class={`user ${this.props.mode}`} onClick={this.toogleMore.bind(this)}>
                <div class="picture">
                        <img src={`/pictures/default.png`} 
                          alt={`Fotografía del usuario: ${this.userInfo.firstName} ${this.userInfo.lastName}`}/>
                </div>
                <div class="info">
                    { User.FIELDS[this.props.mode].info.map( (campo) => <div key={campo} class={campo}> {this.userInfo[campo]} </div> ) }
                </div>
                { this.state.showMore && 
                    <div class="more">
                        { User.FIELDS[this.props.mode].more.map( (campo) => <div key={campo} class={campo}> {this.userInfo[campo]} </div> ) }
                    </div>
                }
            </div>
        );
    }
    
}

User.propTypes={
    id: PropTypes.string.isRequired,
    mode: PropTypes.string,
};

User.defaultProps={
    mode: "minimal",
};

export default User;