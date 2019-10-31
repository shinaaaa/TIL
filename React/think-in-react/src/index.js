import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/SearchBar'
import ProductTable from './components/ProductTable'

import axios from 'axios'

/* const data = [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
]; */



class App extends React.Component {
    state = {
        keyword: '',
        checked: false,
        data: null
    }
    componentDidMount() {
        const url = 'https://frozen-ocean-08299.herokuapp.com/'
        this.getData(url)
    }

    async getData(url) {
        const res = await axios.get(url)
        const { data } = res
        console.log(res);
        data.sort((a, b) => {
            if (a.category > b.category) return 1;
            if (a.category < b.category) return -1;
            if (a.category === b.category) return 0;
        });

        this.setState({ data })
    }

    handleKeywordChange = keyword => {
        this.setState({ keyword })
    }
    handlechecked = () => {
        this.setState({ checked: !this.state.checked })
    }
    render() {
        return (
            <>
                <SearchBar handleKeywordChange={this.handleKeywordChange} handlechecked={this.handlechecked} />
                <ProductTable data={this.state.data} keyword={this.state.keyword} checked={this.state.checked} />
            </>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));