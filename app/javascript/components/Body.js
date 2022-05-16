import React from "react";
import NewFruit from "./NewFruit";
import AllFruits from "./AllFruits";

class Body extends React.Component {
    path = "http://localhost:3000/api/v1/fruits"
    constructor(props) {
        super(props);
        this.state = {
            fruits: []
        };
        // This binding is necessary to make `this` work in the callback
        // Event Handlers
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.addNewFruit = this.addNewFruit.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.updateFruit = this.updateFruit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.deleteFruit = this.deleteFruit.bind(this)
    }
    
    handleDelete(id) {
        fetch(`${this.path}/${id}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                this.deleteFruit(id)
            })
    }
    deleteFruit(id) {
        let newFruits = this.state.fruits.filter((fruit) => fruit.id !== id)
        this.setState({
            fruits: newFruits
        })
    }
    handleFormSubmit(name, description) {
        console.log(name, description)
        // stringify is a method that converts a JavaScript object into a string
        let body = JSON.stringify({ fruit: { name: name, description: description } })
        fetch(this.path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body,
        }).then((response) => { return response.json() })
            .then((fruit) => {
                this.addNewFruit(fruit)
            })

    }
    addNewFruit(fruit) {
        this.setState({
            fruits: this.state.fruits.concat(fruit)
        })
    }
    handleUpdate(fruit) {
        fetch(`${this.path}/${fruit.id}`,
            {
                method: 'PUT',
                body: JSON.stringify({ fruit: fruit }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                this.updateFruit(fruit)
            })
    }
    updateFruit(fruit) {
        let newFruits = this.state.fruits.filter((f) => f.id !== fruit.id)
        newFruits.push(fruit)
        this.setState({
            fruits: newFruits
        })
    }
    componentDidMount() {
        fetch('/api/v1/fruits.json')
            .then((response) => { return response.json() })
            .then((data) => { this.setState({ fruits: data }) });
    }
    render() {
        return (
            <div>
                <NewFruit handleFormSubmit={this.handleFormSubmit} />
                <AllFruits fruits={this.state.fruits} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate} />
            </div>
        )
    }
}
export default Body;