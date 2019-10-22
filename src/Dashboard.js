import React,{Component} from 'react';
import {connect} from 'react-redux';

class Dashboard extends Component{
    render(){
        return(
            <div>
                {this.props.email}
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    return{
        email:state.email
    }
}

export default connect(mapStateToProps,null)(Dashboard)