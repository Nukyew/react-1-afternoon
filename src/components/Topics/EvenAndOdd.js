import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor(){
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }
    }

    handleChange(e){
        this.setState({
            userInput: e.target.value
        })
    }

    sortNums(userInput){
        let splitArr = userInput.split(',')
        let arr = splitArr.map(function(el){
            return parseInt(el, 10)
        })
        let evens = []
        let odds = []
        for (let i = arr.length - 1; i >= 0; i--){
            if (arr[i] % 2 === 0){
                evens.push(arr[i])
            } else{
                odds.push(arr[i])
            }
        }
        this.setState({
            evenArray: evens,
            oddArray: odds
        })
    }
    render() {
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens And Odds</h4>
                <input onChange={e => this.handleChange(e)} className="inputLine" placeholder="Enter Numbers Here"/>
                <button onClick={() => this.sortNums(this.state.userInput)} className="confirmationButton">ASUNDER THE NUMBERS</button>
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}

export default EvenAndOdd