import React, { Component } from 'react';

import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';
import image5 from '../../assets/image5.jpg';
import image6 from '../../assets/image6.jpg';
import image7 from '../../assets/image7.jpg';
import image8 from '../../assets/image8.jpg';
import image9 from '../../assets/image9.jpg';
import image10 from '../../assets/image10.jpg';
import image11 from '../../assets/image11.jpg';
import image12 from '../../assets/image12.jpg';
import classes from './Layout.css';


class Layout extends Component {
    state = {
        AvailableAgent: [
            { id: "1", name: "John", image: image1 },
            { id: "2", name: "Mickey", image: image2 },
            { id: "3", name: "Hirak", image: image3 },
            { id: "4", name: "Emma", image: image4 },
            { id: "5", name: "Jane", image: image5 },
            { id: "6", name: "Barbie", image: image6 },
            { id: "7", name: "Jatin", image: image7 },
            { id: "8", name: "Pranjal", image: image8 },
            { id: "9", name: "Anna", image: image9 },
            { id: "10", name: "Soonam", image: image10 },
            { id: "11", name: "Nicki", image: image11 },
            { id: "12", name: "Herry", image: image12 }

        ],
        OutGoingAgent: [],
    }

    //method to move agent to left to right
    assignAgentHandler = () => {

        const updateAvailableAgent = [...this.state.AvailableAgent];

        const index = updateAvailableAgent.length - 1;
        const agent = updateAvailableAgent[index];
        updateAvailableAgent.splice(index, 1);
        const updateAgent = [];
        updateAgent.push(agent);

        const updateOutGoingAgent = [...this.state.OutGoingAgent];
        const updateDeliveryAgent = updateOutGoingAgent.concat(updateAgent);


        this.setState({ AvailableAgent: updateAvailableAgent, OutGoingAgent: updateDeliveryAgent });

    }

    //method to move agent from right to left

    revokeAgentHandler = () => {
        const updateOutGoingAgent = [...this.state.OutGoingAgent];

        const nArray = [];
        const updateAvailableAgent = [...this.state.AvailableAgent];
        let resultArray = [];

        if (updateOutGoingAgent !== 0) {
            const index = 0;
            const agent = updateOutGoingAgent[index];

            updateOutGoingAgent.splice(0, 1);

            nArray.push(agent);
            resultArray = updateAvailableAgent.concat(nArray);

        }
        this.setState({ AvailableAgent: resultArray, OutGoingAgent: updateOutGoingAgent });

    }
    render() {
        const revokeButton = "<< Revoke";
        const assignButton = "Assign >>";

        //get the whole list of available agent
        const availableAgent = this.state.AvailableAgent.map(person => {
            return <li key={person.id}>
                <img
                    className={classes.Image}
                    src={person.image}
                    width="100px"
                    height="100px"
                    alt="Nothing" />
                {person.name}</li>
        });

        //get the list of outgoing agent 

        const outGoingAgent = this.state.OutGoingAgent.map(person => {
            return <li key={person.id} >
                <img
                    className={classes.Image}
                    src={person.image}
                    width="100px"
                    height="100px"
                    alt="Nothing" />
                {person.name}</li>
        });

        //message to show when none are remaining
        let message = "";
        if (this.state.AvailableAgent.length === 0) {
            message = <p>None of the delivery agents is available </p>;
        } else if (this.state.OutGoingAgent.length === 0) {
            message = <p>All agents are available </p>;
        }

        return (
            <div>
                {message}
                <div className={classes.Content}>
                    <div className={classes.Input} >
                        <ul>
                            {availableAgent}
                        </ul>
                    </div>
                    <div className={classes.Buttons}>
                        <button
                            onClick={this.assignAgentHandler}
                            disabled={!this.state.AvailableAgent.length}>
                            {assignButton}</button>
                        <button
                            onClick={this.revokeAgentHandler}
                            disabled={!this.state.OutGoingAgent.length}
                        >{revokeButton}</button>
                    </div>
                    <div className={classes.Output}>
                        <ul>{outGoingAgent}</ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Layout;