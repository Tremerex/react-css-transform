import React, { Component } from 'react';
import clockStyle from './clock.scss';

export default class Clock extends Component {
    constructor(props) {
        super(props);
        let time = new Date();
        this.state = {
            seconds: time.getSeconds(),
            minutes: time.getMinutes(),
            hours: (time.getHours() + 1),
            timer: null
        };
    }
    startClock() {
        let time = new Date();
        this.setState({
            seconds: time.getSeconds(),
            minutes: time.getMinutes(),
            hours: (time.getHours() + 1)
        });
    }
    componentWillMount() {
        let timer = setInterval(() => this.startClock(), 1000);
        this.setState({ timer: timer });
    }
    componentWillUnmount() {
        clearInterval(this.state.timer);
    }
    render() {
        return (
            <div className={clockStyle.clockContainer}>
                <div className={clockStyle.clock}>
                    <div className={clockStyle.handleSeconds} style={{transform: `translateY(-50%) rotateZ(${this.state.seconds * 6}deg)`}}></div>
                    <div className={clockStyle.handleMinutes} style={{transform: `translateY(-50%) rotateZ(${this.state.minutes * 6}deg)`}}></div>
                    <div className={clockStyle.handleHours} style={{transform: `translateY(-50%) rotateZ(${this.state.hours * 30}deg)`}}></div>
                    {
                        [...Array(12)].map((x, i) => (
                            <div key={i} style={{transform: `rotateZ(${30 * (i + 1)}deg)`}} >
                                {i + 1}
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}