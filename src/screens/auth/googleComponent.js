import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';



class GoogleComponent extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    responseGoogleSuccess = (response) => {
        console.log(response);
        this.props.setGoogleDetail(response.profileObj)
    }
    responseGoogleError = (err) => {
        console.log(err)
    }
    responseLogout = () => {
        this.props.setGoogleDetail({});
    }
    render() {

        return (
            <div className={'panel panel-default'} >
                <div className="panel-heading">Google Login</div>
                <div className="panel-body">
                    {(this.props.googleInfo && this.props.googleInfo.googleId)?
                        <div onClick={()=>{this.responseLogout()}}><p>Logout</p></div>
                        :<div>
                            <GoogleLogin clientId="976869953832-2bmfpsnurlhhc266f1t18oj4cg2ls5dg.apps.googleusercontent.com"
                                         buttonText="Google"
                                         onSuccess={(res) => this.responseGoogleSuccess(res)}
                                         onFailure={(res) => this.responseGoogleError(res)}/>
                        </div>
                    }

                    <p className={'wrapWord'}>
                        {JSON.stringify(this.props.googleInfo)}
                    </p>
                </div>
            </div>
        );
    }
}

export default GoogleComponent;


