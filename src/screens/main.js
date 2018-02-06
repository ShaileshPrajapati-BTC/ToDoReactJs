import React, { Component } from 'react';
import {createPost} from "../action/index";
import { connect } from 'react-redux'
import _ from 'lodash'
class Main extends Component {
    constructor(){
        super();
        this.state={
            addPostText:''
        }
    }
    savepost = () => {
        let text = document.getElementById('input').value;

        this.props.createPost(text);
        document.getElementById('input').value="";

    }

    render() {
        return (
            <div className={'container'} style={{padding:10}}>
                <div className={'panel panel-default'} >
                    <div className="panel-heading">Create Post</div>
                    <div className="panel-body">
                        <div className={"form-group"}>
                            <div className={"col-sm-10"}>
                                <input className={'form-control'} id='input' type={'text'} />
                            </div>
                            <button className={'btn btn-info'} onClick={()=>{this.savepost()}}>Add Post</button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    post:state.post.posts
});


const mapActionToProps = ({
    createPost
});

export default connect(mapStateToProps, mapActionToProps)(Main);


