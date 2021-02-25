// left sidebar
import { Component } from 'react';
import Profile from './Profile';

class Leftsidebar extends Component {
    constructor(props){
        super()
        this.state = {
            channels:[
                {
                    cId:12113,
                    channelName: "PriceAction Forex",
                    subCount:200011156,
                    avatar:'./images/prof-img.png',
                    lastMsg:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, saepe.",
                    time: 'August 19, 1975 23:15:30 GMT+00:00'
                },
                {
                    cId:12112,
                    channelName: "Paicc Vip",
                    subCount:2004561156,
                    avatar:'./images/prof-img.png',
                    lastMsg:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, saepe.",
                    time: 'August 19, 1975 23:15:30 GMT+00:00'
                },
                {
                    cId:12111,
                    channelName: "Scalp Vip",
                    subCount:200011156,
                    avatar:'./images/prof-img.png',
                    lastMsg:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, saepe.",
                    time: 'August 19, 1975 23:15:30 GMT+00:00'
                },
                {
                    cId:12110,
                    channelName: "PriceAction Algo",
                    subCount:200011156,
                    avatar:'./images/prof-img.png',
                    lastMsg:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, saepe.",
                    time: 'August 19, 1975 23:15:30 GMT+00:00'
                }
            ]
        }
    }
    // rendering the sidebar
    render() {
        return (
            <div className="leftSidebar">
                {this.state.channels.map(channel=>(
                    <Profile
                        key={this.state.channels.indexOf(channel)}
                        avatar={channel.avatar} 
                        name={channel.channelName} 
                        text={channel.lastMsg} 
                        time={channel.time}
                    />
                ))}
            </div>
        );
    }
}

export default Leftsidebar;