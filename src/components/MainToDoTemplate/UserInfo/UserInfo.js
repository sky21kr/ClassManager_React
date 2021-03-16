import React, { Component } from 'react'
import './UserInfo.scss'
import userImage from './image/UserImage.png'
import { BsGearFill } from "react-icons/bs";

class UserInfo extends Component {
    render() {
        return (
            <div className="userInfoTemplate">
                <div>
                    <img className="userImage" src={userImage}/>
                </div>
                <div className="userInfo">
                    <div className="infoTitle">학교</div>
                    <div className="info">경희대학교</div>
                    <div className="infoTitle">학과</div>
                    <div className="info">컴퓨터공학과</div>
                    <div className="infoTitle">이름</div>
                    <div className="info">신승민</div>
                </div>
                <BsGearFill className="userInfoSetting" />
            </div>
        )
    }
}

export default UserInfo