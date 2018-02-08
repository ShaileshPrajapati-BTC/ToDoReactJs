import React, { Component } from 'react';
import { connect } from 'react-redux'
import GoogleComponent from './googleComponent'
import FacebookComponent from './facebookComponent'
import TwitterComponent from './twitterComponent'
import {setGoogleInfo,setFacebookInfo,setTwitterInfo} from "../../action/authAction";

class AuthIndex extends Component {
    constructor(){
        super();
        this.state={

        }
    }
    setGoogleDetail = (info) => {
        this.props.setGoogleInfo(info)
    }
    setFacebookDetail = (info) => {
        this.props.setFacebookInfo(info)
    }
    setTwitterDetail = (info) => {
        this.props.setTwitterInfo(info)
    }
    render() {
        return (
            <div className={'container-fluid text-center'}>
                <GoogleComponent googleInfo={this.props.googleInfo} setGoogleDetail={this.setGoogleDetail}/>
                <FacebookComponent facebookInfo={this.props.facebookInfo} setFacebookDetail={this.setFacebookDetail}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    googleInfo:state.auth.google,
    facebookInfo:state.auth.facebook,
    twitterInfo:state.auth.twitter
});


const mapActionToProps = ({
    setGoogleInfo,setFacebookInfo,setTwitterInfo
});

export default connect(mapStateToProps, mapActionToProps)(AuthIndex);


