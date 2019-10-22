import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component {
    render() {
        return (
            <div className="left">
                <Post src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH9b0p9b_B9YOO2M0EEVZpU9lDrgA-_mDqnLRGEP5vGim8NbG_&s" alt="first"/>
                <Post src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2pVwzJ14anuCSAV0B_H7Gb68vr-sPVVbIX2-QeGXiTDhYCz9nnA&s" alt="second"/>
            </div>
        )
    }        
}