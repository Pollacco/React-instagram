import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <User src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRekJEXTvmwUnP8t3dPxNdvAvbRapY0YKSrDSX1aKs_HwQkwTbN&s" alt="user" name="Jessika" min/>
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    some account
                </div>
                <div className="post__descr">
                So if on advanced addition absolute received replying throwing he. Delighted consisted newspaper of unfeeling as neglected so. Tell size come hard mrs and four fond are. Of in commanded earnestly resources it. At quitting in strictly up wandered of relation answered felicity. Side need at in what dear ever upon if. Same down want joy neat ask pain help she. Alone three stuff use law walls fat asked. Near do that he help. 
                </div>
            </div>
        )
    }
}