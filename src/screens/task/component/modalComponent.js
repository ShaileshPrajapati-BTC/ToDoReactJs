import React, { Component } from 'react';
import {Modal,Button} from 'react-bootstrap';
import {HotKeys} from 'react-hotkeys';

const map = {
    'snapLeft': 'command+left',
    'deleteNode': ['del', 'backspace']
};

class ModalComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:props.task.id,
            title:props.task.title,
            description:props.task.description,
            priority:props.task.priority,
        }
    }

    editClick = () => {
        let editedObj = {
            id:this.state.id,
            title:this.state.title,
            description:this.state.description,
            priority:this.state.priority
        }
        this.props.handleHide();
        this.props.editTask(editedObj);
    }
    render() {

        return (

            <Modal
                show={this.props.show}
                onHide={()=>this.props.handleHide()}
                container={this}
                aria-labelledby="contained-modal-title-">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title">
                        {this.state.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5 className={"col-sm-4"}>
                        Title :
                    </h5>
                    <p className={'col-sm-8'}>
                        <input value={this.state.title}
                               onChange={()=>{this.setState({title:document.getElementById('txtTitleText').value})}}
                               id={'txtTitleText'}
                               className={'form-control'}/></p>

                    <h5 className={"col-sm-4"}>
                        Description :
                    </h5>
                    <p className={'col-sm-8'}>
                        <input value={this.state.description}
                               onChange={()=>{this.setState({description:document.getElementById('txtDescription').value})}}
                               id={'txtDescription'}
                               className={'form-control'}/></p>
                    <h5 className={"col-sm-4"}>
                        Priority :
                    </h5>
                    <p className={'col-sm-8'}>
                        <select id={"selPrioritytemp"}
                                onChange={()=>this.setState({priority:document.getElementById('selPrioritytemp').value})}
                                className={'form-control'}>
                                <option value={'High'} selected={("High"===this.state.priority)}>High</option>
                                <option value={'Medium'} selected={("Medium"===this.state.priority)}>Medium</option>
                                <option value={'Low'} selected={("Low"===this.state.priority)}>Low</option>
                            </select>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={()=>{this.editClick()}}>Edit</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ModalComponent;


