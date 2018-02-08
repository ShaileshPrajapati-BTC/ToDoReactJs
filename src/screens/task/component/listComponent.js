import React, { Component } from 'react';
import {Label} from 'react-bootstrap';
import ModalComponent from './modalComponent';
import {HotKeys} from 'react-hotkeys';



class ListComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            show: false
        }
    }
    handleHide = () => {
        this.setState({ show: false });
    }
    delete = (id) => {
        this.props.deleteTask(id)
    }
    render() {
        const {title,description,priority,id} = this.props.task;
        const keyMap = {
            moveUp: 'up',
        }

        const handlers = {
            'moveUp': (event) => this.setState({ show: true })
        };
        return (
            <HotKeys keyMap={keyMap} handlers={handlers}>
            <div>

                <div className={'col-sm-6'}>
                    <h4>{title} {"  "}<small>{description}</small></h4>
                </div>
                <div className={'col-sm-2'}>
                    <h4><Label bsStyle={(priority==='High')?"danger":(priority==='Medium')?"primary":"warning"}>{priority}</Label></h4>
                </div>

                <div className={'col-sm-1'} onClick={()=>{this.setState({ show: true })}}>
                    <h4><span className="glyphicon glyphicon-pencil"/></h4>
                </div>
                <div className={'col-sm-1'} onClick={()=>{this.delete(id)}}>
                    <h4><span className={'glyphicon glyphicon-trash'}/></h4>
                </div>
                <ModalComponent show={this.state.show} task={this.props.task} editTask={this.props.editTask}  handleHide={this.handleHide} />
            </div>

            </HotKeys>
        );
    }
}

export default ListComponent;


