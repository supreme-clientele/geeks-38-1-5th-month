import React, { useState } from "react";
import classes from './User.module.css';

const User = ({ userInfo }) => {
    const [showAddress, setShowAddress] = useState(false);

    const handleShowAddress = () => {
        setShowAddress(!showAddress);
    };

    return (
        <ul className={classes.noListStyle}>
            <li>name: {userInfo.name}</li>
            <li>email: {userInfo.email}</li>
            <li>username: {userInfo.username}</li>
            {showAddress && (
                <>
                    <li>street: {userInfo.address.street}</li>
                    <li>suite: {userInfo.address.suite}</li>
                    <li>city: {userInfo.address.city}</li>
                    <li>zipcode: {userInfo.address.zipcode}</li>
                </>
            )}
            <li>
                <button onClick={handleShowAddress}>
                    {showAddress ? "hide details" : "get more"}
                </button>
            </li>
            <p>----------------------------</p>
        </ul>
    );
};

export default User;
