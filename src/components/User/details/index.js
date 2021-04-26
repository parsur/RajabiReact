import React, { useState, useEffect } from 'react';
import {
    Container,
    NameContainer,
    DetailContainer,
    H1,
    Detail,
    D1, D2, D3,
    Number, Email,
    Created, Edited,
    Button
} from './DetailsElements';
import Loader from "react-loader-spinner";
import axios from 'axios';
import { useHistory } from 'react-router';
import apiAxios from '../../../axios';

const Details = ({
    dashboardName,
    mobileNumber,
    emailAddress,
    created,
    edited,
}) => {
    const [user, setUser] = useState();

    useEffect(() => {
        apiAxios('/user/show')
        .then(function (response) {
            console.log(response);
            setUser(response.data.user);
        })
        .catch(function (error) {
            console.log(error);
        })
      }, []);

    let history = useHistory();

    return user ? (
        <>
        <Container>
            <NameContainer>
                <H1>{user.name}</H1>
            </NameContainer>
            <DetailContainer>
                <Detail>
                <D1>
                    <Number>شماره تلفن شما :<span style={{color:"grey"}}>{user.phone_number}</span></Number>
                    <Email>نشانی ایمیل شما :<span style={{color:"grey"}}>{user.email}</span></Email>
                </D1>
                    <D2>
                        <Created>تاریخ ساخت اکانت: <span style={{color:"grey"}}>{user.created_at}</span></Created>
                        <Edited>تاریخ آخرین ویرایش: <span style={{color:"grey"}}>{user.updated_at}</span></Edited>
                    </D2>
                    <D3>
                        
                    </D3>
                </Detail>
            </DetailContainer>
        </Container>
        </>
    ) : (
        <div style={{width:"100%", height:"100%", display:"flex"}}>
            <Loader
            type="Oval"
            color="#F4DD4F"
            height={50}
            width={50}
            timeout={3000} //3 secs
            style={{margin: "auto"}}
            />
        </div>
    );
}

export default Details;
