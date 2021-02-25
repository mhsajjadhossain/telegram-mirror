import { Component } from 'react';
import Message from './Massege';

class Rightsidebar extends Component {
    constructor(props){
        super()
        this.state = {
            
        }
    }
    // rendering the sidebar
    render() {
        return (
            <div className="Rightsidebar">
                <Message 
                name='PriceAction Forex' 
                isReply={false} 
                avatar="./images/prof-img.png" 
                date="August 19, 1975 23:15:30 GMT+00:00" 
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sequi perspiciatis blanditiis, dicta provident iure animi similique repellendus deserunt at?"
                />
                <Message 
                name='PriceAction Forex' 
                isReply={true} 
                avatar="./images/prof-img.png" 
                date="August 19, 1975 23:15:30 GMT+00:00" 
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sequi perspiciatis blanditiis, dicta provident iure animi similique repellendus deserunt at?"
                />
            </div>
        );
    }
}

export default Rightsidebar;