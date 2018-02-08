import React, { Component } from 'react';
import TwitterLogin from 'react-twitter-auth/lib/react-twitter-auth-component.js';



class TwitterComponent extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    responseTwitter = (response) => {
        console.log(response);
        this.props.setTwitterDetail(response)

    }
    errorTwitter = (response) => {
        console.log(response);


    }
    responseLogout = () => {
        this.props.setTwitterDetail({})
    }
    render() {

        return (
            <div className={'panel panel-default'} >
                <div className="panel-heading">Twitter Login</div>
                <div className="panel-body">
                    {(this.props.twitterInfo && this.props.twitterInfo.userId)?
                        <div onClick={()=>{this.responseLogout()}}><p>Logout</p></div>
                        :<div>
                            <TwitterLogin loginUrl="http://localhost:4000/api/v1/auth/twitter"
                                          onFailure={(err) => this.errorTwitter(err)} onSuccess={(res) => this.responseTwitter(res)}
                                          requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"/>
                        </div>
                    }
                    <p className={'wrapWord'}>{JSON.stringify(this.props.twitterInfo)}</p>

                </div>

            </div>
        );
    }
}

export default TwitterComponent;


