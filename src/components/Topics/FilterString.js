import React, { Component } from 'react';

class FilterString extends Component {
    constructor(){
        super();

        this.state = {
            unFilteredArray: ["Honda", "Toyota", "Hyundai", "Ford", "Chevy", "Chevrolet", "Subaru", "Scion"],
            userInput: "",
            filteredArray: []
        }
    }

    handleChange(e){
        this.setState({
            userInput: e.target.value
        })
    }

    filterStringProp(userInput, unFiltered){
        let filteredArr = unFiltered.filter(function(el, i, arr){
            if (el.startsWith(userInput) === true){
                return true
            } else {
                return false
            }
        })
        this.setState({
            filteredArray: filteredArr
        })
    }
    
    
    render() {
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input onChange={e => this.handleChange(e)} className="inputLine" placeholder="Enter Search String Here"/>
                <button onClick={() => this.filterStringProp(this.state.userInput, this.state.unFilteredArray)} className="confirmationButton">Do The Thing</button>
                <span className="resultsBox filterStringRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterString