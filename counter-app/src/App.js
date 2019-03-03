import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

//Props
//Raising and Handling Events
//Lifting the State
//Functional Componenets
//Lifecycle Hooks

class App extends Component {
    // State should not be modified directly so when the Virtual DOM
    // is updated, it has an old copy to compare to see what needs
    // updating
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    };

    constructor(props) {
        super(props);
        console.log("App - Constructor");
        // initialize state here
        // can directly set state = props.whatever
        // don't need to use this.setState
    }

    componentDidMount() {
        // Place for Ajax calls
        console.log("App - Mounted");
    }

    handleIncrement = (counter) => {
        //spread syntax
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    };

    handleDelete = (counterID) => {
        const counters = this.state.counters.filter((c) => c.id !== counterID);
        this.setState({ counters });
    };

    handleReset = () => {
        const counters = this.state.counters.map((c) => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    };

    render() {
        console.log("App - Rendered");
        // mounts componenets recursively
        return (
            <React.Fragment>
                <NavBar
                    totalCounters={
                        this.state.counters.filter((c) => c.value > 0).length
                    }
                />
                <main className='container'>
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default App;
