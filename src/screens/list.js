import React, { Component } from 'react';
import {deletePost,editPost} from "../action/index";
import ListComponent from '../component/listComponent'
import { connect } from 'react-redux'
import _ from 'lodash'
class Main extends Component {
    constructor(){
        super();
        this.state={
            addPostText:'',

        }
    }

    deletePost = (text) => {

        let arr = _.without(this.props.post,text);
        this.props.deletePost(arr);
    }
    editPost = (text,index) => {
            let arr = this.props.post;
            arr[index] = text;
            this.props.editPost(text,index);
            window.location.reload();
    }



    render() {
        return (
            <div className={'container'} style={{padding:10}}>
                <div className={'panel panel-default'} >
                    <div className="panel-heading">Listing</div>
                    <div className="panel-body">
                        <ul className="list-group">
                            {
                                this.props.post.map((text,index)=> {
                                    return <div key={index} className={'list-group-item col-sm-12'}>
                                        <ListComponent text={text} index={index} editPost={this.editPost} deletePost={this.deletePost}/>
                                    </div>
                                })
                            }
                        </ul>
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
    deletePost,editPost
});

export default connect(mapStateToProps, mapActionToProps)(Main);


