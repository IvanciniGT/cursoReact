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
        showMore=showMore===undefined&&this.state.showMore||showMore;
        //showMore=showMore||this.state.showMore;
        return {"showMore": showMore,"favorito": this.props.favorito};
    }
    
    componentDidUpdate(prevProps, prevState){
        if (this.props.favorito !== prevProps.favorito ){
            this.setState(this.generateState());
        }
    }

    render(){
                    // JSX    VVVVVVV
        return (
            <div className={`user ${this.props.mode} ${this.state.favorito && "favorito" || ""}`} onClick={this.toogleMore.bind(this)}>
                <div className="picture">
                        <img onClick={this.props.onFavoritoChange} src={`/pictures/default.png`} 
                          alt={`Fotografía del usuario: ${this.userInfo.firstName} ${this.userInfo.lastName}`}/>
                </div>
                <div className="info">
                    { User.FIELDS[this.props.mode].info.map( (campo) => <div key={campo} className={campo}> {this.userInfo[campo]} </div> ) }
                </div>
                { this.state.showMore && 
                    <div className="more">
                        { User.FIELDS[this.props.mode].more.map( (campo) => <div key={campo} className={campo}> {this.userInfo[campo]} </div> ) }
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