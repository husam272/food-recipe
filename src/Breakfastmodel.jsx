import React, { Component } from 'react';
import './index.css';

export default class Breakfastmodel extends Component {
    render() {
        let modelStyle = {
            display: 'block',
            backgroundColor: 'rgba(0,0,0,0.8)',
        }
        return (
            <div className='model1'>
                <div className="modal show fade" style={modelStyle} >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{this.props.title}</h5>
                                <button type="button" className="btn-close" onClick={this.props.hide}></button>
                            </div>
                            <div className="modal-body">
                                <img src={this.props.img} className="img-flid" />
                                <p className='para1'>{this.props.para1}</p>
                                <p className='para2'>{this.props.para2}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
