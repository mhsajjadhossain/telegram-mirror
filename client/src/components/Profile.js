
const Profile = (props) => {
    // Outside component
    const MAX_LENGTH = 23;
    let text = props.text;
    let time = new Date(props.time);
    return (
        <div className="singleProfileWrap">
            <div className="profileAvatar">
                <img 
                    src={props.avatar} 
                    alt="profileImg"
                />
            </div>
            <div className="profileInfo">
                <div className="profileTxt">
                    <h5>{props.name}</h5>
                    {text.length > MAX_LENGTH ?
                        (
                        <p>
                            {`${text.substring(0, MAX_LENGTH)}...`}
                        </p>
                        ) :
                        <p>{text}</p>
                    }
                </div>
                <div className="msgInfo">
                    <span className="time">{time.toLocaleTimeString('en-US').replace(/:\d\d /, ' ')}</span>
                </div>
            </div>
        </div>
    );
}



export default Profile;