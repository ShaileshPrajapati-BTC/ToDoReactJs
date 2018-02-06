import React, { Component } from 'react';
import {createPost} from "../action/index";
import { connect } from 'react-redux'
import _ from 'lodash'
class ListComponent extends Component {
    constructor(){
        super();
        this.state={
            addPostText:'',
            editShow:false
        }
    }
    onEditClick = text => {
        if(this.state.editShow){
            this.props.editPost(this.refs.editText.value,this.props.index);
            this.setState({editShow:false})
        } else {
            this.setState({editShow:true})
        }

    }
    render() {
        return (
            <div >
                <p className={'col-sm-6'}>{this.props.text}</p>
                {(this.state.editShow)?<input placeholder={this.props.text} ref={'editText'} className={'form-control'}/>:null}
                <button onClick={()=>{this.onEditClick(this.props.text)}} className={'col-sm-3'}>Edit</button>
                <button onClick={()=>{this.props.deletePost(this.props.text)}}  className={'col-sm-3'}>Delete</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({

});


const mapActionToProps = ({

});

export default connect(mapStateToProps, mapActionToProps)(ListComponent);


