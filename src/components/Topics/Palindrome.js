import React, {Component} from 'react';

class Palindrome extends Component {
    constructor(){
        super();

        this.state = {
            userInput: "",
            palindrome: ""
        }
    }

    handleChange(e){
        this.setState({
            userInput: e.target.value
        })
    }

    reverseString(userInput){
        var arr = userInput.split("")
        arr.reverse()
        var reversedArr = arr.join("")
        if (reversedArr === userInput){
            this.setState({
                palindrome: true
            })
        } else if (reversedArr !== userInput) {
            this.setState({
                palindrome: false
            })
        }
    }

    render(){
        return(
            <div className="puzzleBox palindromePB">
                <h4>Palindrome</h4>
                <input onChange={e => this.handleChange(e)} className="inputLine" />
                <button onClick={() => this.reverseString(this.state.userInput)} className="confirmationButton">Try Me</button>
                <span className="resultsBox">Is Palindrome: {JSON.stringify(this.state.palindrome)}</span>
            </div>
        )
    }
}

export default Palindrome