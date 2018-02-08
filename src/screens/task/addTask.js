import React, { Component } from 'react';
import {HotKeys} from 'react-hotkeys';

class AddTask extends Component {
    saveTask = () => {
        let newTaskObj = {
            title:document.getElementById('txtTitle').value,
            description:document.getElementById('txtDesc').value,
            priority:document.getElementById('selPriority').value,
            id:new Date().valueOf()
        }
        this.props.saveTask(newTaskObj);
    }

    render() {
        const keyMap = {
            moveUp: 'down',
        }

        const handlers = {
            'moveUp': (event) => document.getElementById('txtTitle').focus()
        };
        return (
            <HotKeys keyMap={keyMap} handlers={handlers} focused>
            <div className={'panel panel-default'} >
                <div className="panel-heading">Add Task</div>
                    <div className="panel-body">
                        <div className={"form-group"}>
                            <div className={"col-sm-3"}>
                                <input className={'form-control'} id='txtTitle' placeholder={'Title'} type={'text'} />
                            </div>
                            <div className={"col-sm-5"}>
                                <input className={'form-control'} id='txtDesc' placeholder={'Description'} type={'text'} />
                            </div>
                            <div className="col-sm-2">
                                <select id={"selPriority"} className={'form-control'}>
                                    <option value={'High'}>High</option>
                                    <option value={'Medium'}>Medium</option>
                                    <option value={'Low'}>Low</option>
                                </select>
                            </div>
                            <div className={"col-sm-2"}>
                            <button className={'btn btn-info'} onClick={()=>{this.saveTask()}}>Add Task</button>
                            </div>
                        </div>

                    </div>
                </div>
            </HotKeys>


        );
    }
}

export default AddTask;


