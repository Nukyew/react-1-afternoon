import React, { Component } from 'react';

class FilterObject extends Component {
    constructor(){
        super();

        this.state = {
            unFilteredArray: [
                {
                name: "Honda",
                cylinders: 4,
                mileage: 30000
            },{
                name: "Subaru",
                cylinders: 8
            },{
                name: "Toyota",
                mileage: 60000
            }],
            userInput: '',
            filteredArray: []
        }
    }
    
    handleChange(e){
        this.setState({
            userInput: e.target.value
        })
    }

    filterObjectProp(userInput, unFiltered){
        let filteredItems = []
        for (let i = 0; i < unFiltered.length; i++){
            for (let prop in unFiltered[i]){
                if(userInput === prop){
                    filteredItems.push(unFiltered[i])
                }
            }
        }
        this.setState({
            filteredArray: filteredItems
        })
    }
    
    render() {
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input onChange={e => this.handleChange(e)} className="inputLine" />
                <button onClick={() => this.filterObjectProp(this.state.userInput, this.state.unFilteredArray)} className="confirmationButton">Do The Thing</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterObject