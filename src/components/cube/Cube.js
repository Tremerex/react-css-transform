import React, { Component } from 'react';
import cubeStyle from './cube.scss';

export default class Cube extends Component {
    constructor() {
        super();
        this.state = {
            cubeClassName: cubeStyle.cube
        };
    }
    radioClickHandler({target}) {
        this.setState({cubeClassName: `${cubeStyle.cube} ${cubeStyle[target.value]}`});
    }
    render() {
        return (
            <div className={cubeStyle.container}>
                <div className={cubeStyle.cubeContainer}>
                    <div className={this.state.cubeClassName}>
                    { 
                        [...Array(6)].map((x, i) => (
                            <div key={i} className={cubeStyle[`slide${i + 1}`]}>
                                {i + 1}
                            </div>
                        ))
                    }
                    </div>
                </div>
                <div className={cubeStyle.sides}>
                    {
                        [...Array(6)].map((x, i) => (
                            <label key={i}> side {i + 1}
                                <input type="radio" name="cube" value={`side${i + 1}`} defaultChecked={i === 0} onClick={evt => this.radioClickHandler(evt)} />
                            </label>
                        ))
                    }
                </div>
            </div>
        );
    }
}