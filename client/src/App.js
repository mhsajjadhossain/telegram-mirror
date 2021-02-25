import React, { Component } from 'react';
import './app.css';
import Header from './components/Header';
import Leftsidebar from './components/Leftsidebar';
import './index.css';

class App extends Component {
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
      <div className="App">
        <div className="containerWrap">
            <Header name="PriceAction LTD." cName="PriceAction Forex" subCount="200"/>
            <div className="appR">
              <Leftsidebar/>  
            </div>
        </div>
    </div>
    )
  }
}




export default App;
