import React, { Component } from 'react';
import  FacebookLogin  from 'react-facebook-login'



class FacebookComponent extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    responseFacebook = (response) => {
        console.log(response);
        this.props.setFacebookDetail(response)

    }
    responseLogout = () => {
        this.props.setFacebookDetail({})
    }
    render() {

        return (
            <div className={'panel panel-default'} >
                <div className="panel-heading">Facebook Login</div>
                <div className="panel-body">
                    {(this.props.facebookInfo && this.props.facebookInfo.userID)?
                        <div onClick={()=>{this.responseLogout()}}><p>Logout</p></div>
                        :<div>
                    <FacebookLogin
                        appId="1927657314215929"
                        autoLoad={true}
                        fields="name,email,picture"
                        onClick={()=>{}}
                        callback={res => this.responseFacebook(res)} />
                        </div>
                    }
                    <p className={'wrapWord'}>{JSON.stringify(this.props.facebookInfo)}</p>

                </div>

            </div>
        );
    }
}

export default FacebookComponent;


