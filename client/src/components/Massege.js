import React from 'react';







const Massege = ({avatar,name,text,date,isReply})=> {
    const isToday = (someDate) => {
        const today = new Date()
        const inDate = new Date(someDate);
        return inDate.getDate() === today.getDate() &&
        inDate.getMonth() === today.getMonth() &&
        inDate.getFullYear() === today.getFullYear()
    }

    const toDate = (d)=>{
        let date = new Date(d);
        return date;
    }

    return !isReply ?(
        <div className="singleMsgWrap">
            <div className="msgAvatar">
                <img 
                    src={avatar} 
                    alt="message-avatar"
                />
            </div>
            <div className="msgContent">
                <div className="msgTxt">
                    <span className="profName">{name}</span>
                    <p className="plainTxt">{text}</p>
                </div>
                <div className="sentTime">
                    <span>{isToday(date)?toDate(date).toLocaleTimeString('en-US'):toDate(date).toLocaleDateString('en-US')}</span>
                </div>
            </div>
        </div>
    ):(
        <h1>hello</h1>
    );
}

export default Massege;