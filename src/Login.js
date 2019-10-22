import React, { Component } from 'react';
import {connect} from 'react-redux';
import {login} from './actions'
import history from './history';
class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.email){
            history.push('/dashboard')
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(this.state))
        this.props.login(this.state.email,this.state.password)
    }

    render(){
        const {email,password} = this.state;
        console.log(this.props.email)
        return(
            <form onSubmit={this.onSubmit}>
                <input type="text" name="email" onChange={this.onChange} value={email}/>
                <input type="password" name="password" onChange={this.onChange} value={password}/>
                <input type="submit" value="Login"/>
            </form>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    return{
        email:state.email
    }
}

const mapDispatchToProps = dispatch => {
    return{
        login: (...params) => dispatch(login(...params))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
