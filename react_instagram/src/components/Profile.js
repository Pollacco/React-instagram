import React from 'react';
import User from './User';
import Palette from './Palette';


const Profile = () => {
    return (
        <div className="container profile">
            <User src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRekJEXTvmwUnP8t3dPxNdvAvbRapY0YKSrDSX1aKs_HwQkwTbN&s"
                alt="user"
                name="Jessika"
                min/>
            <Palette/>
        </div>
    )
}

export default Profile;