import React, {Component} from 'react';
import './App.scss';
import Header from './components/Header';
import Content from "./components/Content";
import {fetchLatestData} from './services';
import {ICategory, ILatestHit} from "./types";

interface IState {
    readonly latestHits: Array<ILatestHit>
    readonly filterCategoryName: string | null
}

class App extends Component {

    state: IState = {
        latestHits: [],
        filterCategoryName: null
    };

    setCategoryNameFilter = (name: string | null) => {
        this.setState({filterCategoryName: name});
    };

    componentDidMount() {
        const self = this;
        fetchLatestData().then((res) => {
            self.setState({latestHits: res.feed.entry});
        }).catch(() => {
            console.error("There was an error processing the request")
        });
    }

    render() {
        const {latestHits, filterCategoryName} = this.state;
        const categories = latestHits.map(lh => lh.category);
        const uniqCategoryNames = Array.from(new Set(categories.map(c => c.attributes.label))).sort((a, b) => a.localeCompare(b));
        const uniqCategories = uniqCategoryNames.map(n => categories.find(c => n === c.attributes.label)) as Array<ICategory>;
        const filteredLatestHits = filterCategoryName === null ?
            latestHits :
            latestHits.filter(lh => lh.category.attributes.label === filterCategoryName);
        return (
            <div className='container-fluid'>
                <Header/>
                <Content
                    filterCb={this.setCategoryNameFilter}
                    categories={uniqCategories}
                    latestHits={filteredLatestHits}
                    filterCategoryName={filterCategoryName}
                />
            </div>
        );
    }
}

export default App;
