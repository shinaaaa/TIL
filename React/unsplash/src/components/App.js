import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ImageList from './ImageList'
import unsplash from '../api/unsplash'

export default class App extends Component {
    state = {
        keyword: '',
        images: [],
        page: 1,
        per_page: 5
    }
    handleKeyword = (keyword) => {
        this.setState({ keyword })
    }
    onSubmit = async () => {
        const response = await unsplash.get('search/photos', {
            params: {
                query: this.state.keyword, page: this.state.page, per_page: this.state.per_page
            }
        });
        console.log(this.state.page);
        console.log('asdadasd : ', response);
        this.setState({ images: response.data.results });

    }
    nextPage = async () => {
        this.setState({ page: this.state.page + 1 })
        await console.log(this.state.page);
        await this.onSubmit()

    }
    prePage = async () => {
        this.setState({ page: this.state.page - 1 })
        await console.log(this.state.page);
        await this.onSubmit()
    }
    render() {
        return (
            <>
                <div className='ui'>
                    {this.state.page === 1 ? null : <button className='ui button' onClick={this.prePage}>이전</button>}
                    <button className='ui button' onClick={this.nextPage}>다음</button>
                    <SearchBar handleKeyword={this.handleKeyword} onSubmit={this.onSubmit} />
                    <ImageList images={this.state.images} />
                </div>
            </>
        )
    }
}
