import React, { Component } from 'react';

class Sum extends Component {
    constructor(){
        super();

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleChange(e){
        if (e.target.id === "1"){
            this.setState({
                number1: e.target.value
            })
        } else if (e.target.id === "2"){
            this.setState({
                number2: e.target.value
            })
        }
    }

    sumNums(){
        let num1 = parseInt(this.state.number1, 10)
        let num2 = parseInt(this.state.number2, 10)
        this.setState({
            sum: num1 + num2
        })
    }

    render(){
        return(
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input id="1" onChange={e => this.handleChange(e)} className="inputLine" placeholder="Enter Number 1 Here"/>
                <input id="2" onChange={e => this.handleChange(e)} className="inputLine" placeholder="Enter Number 2 Here"/>
                <button onClick={() => this.sumNums(this.state)} className="confirmationButton">Stick Em Together</button>
                <span className="resultsBox">Summed: {JSON.stringify(this.state.sum)}</span>
            </div>
        )
    }
}

export default Sum