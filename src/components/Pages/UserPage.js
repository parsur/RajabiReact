import React, { useEffect, useState } from 'react'
import User from '../User';
import { dash, userDash } from '../../Data';
import Nsi from '../User/notsignedin';
import api from '../../api';

const UserPage = () => {
    const [islogin, setIslogin] = useState(false);

    useEffect(() => {
        api("api/home")
            .then((data) => {
                setIslogin(data.authentication);
            })
    }, []);

    return (
        <>
        <div style={islogin ? {display:"unset"} : {display:"none"}}>
            <User {...dash} data={userDash} />
        </div>
        <div style={islogin ? {display:"none"} : {display:"unset"}}>
            <Nsi />
        </div>
        </>
    )
}

export default UserPage;