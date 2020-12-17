import React, {useContext} from 'react';
import AppContext from "../AppContext";

const Profile = () => {

    const { currentUser } = useContext(AppContext)

    return (
        <div>
            <p>{ currentUser?.login }</p>
            <p>kek</p>
        </div>
    )
}

export default Profile;