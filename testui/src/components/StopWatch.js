
import React from "react";

class StopWatch extends React.Component {
    constructor() {
        super();
        this.state = {
            second: 0,
            minute: 0,
            hour: 0
        };
        this.intervalId = null; // Initialize intervalId to keep track of setInterval
    }

    // Start the stopwatch
    startStopwatch = () => {
        this.intervalId = setInterval(() => {
            this.setState((prevState) => ({
                second: prevState.second + 1
            }));
        }, 1000); // Update every 1 second
    };

    // Stop the stopwatch
    stopStopwatch = () => {
        clearInterval(this.intervalId);
    };

    resetStopwatch = () => {
        this.setState({
            second: 0,
            minute: 0,
            hour: 0
        })
    }

    render() {
        return (
            <>
                <h1>Stopwatch</h1>
                <h1>{this.state.second}</h1>
                <button onClick={this.startStopwatch}>Start</button>
                <button onClick={this.stopStopwatch}>Stop</button>
                <button onClick={this.resetStopwatch}>Reset</button>
            </>
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalId); // Clear interval to prevent memory leaks
    }
}

export default StopWatch;
