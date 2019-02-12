import React from 'react';
import LeftNav from "./LeftNav";
import GalleryList from "./GalleryList";
import {ICategory, ILatestHit} from "../types";

interface IProps {
    readonly categories: Array<ICategory>,
    readonly latestHits: Array<ILatestHit>,
    filterCb: (name: string | null) => void
    readonly filterCategoryName: string | null
}

const Content = (props: IProps) => {
    const {categories, latestHits, filterCb, filterCategoryName} = props;
    return (
        <div className='row content-row'>
            <div className='col-sm-2'>
                <LeftNav
                    categories={categories}
                    filterCb={filterCb}
                    filterCategoryName={filterCategoryName}
                />
            </div>
            <div className='col-sm-10'>
                <GalleryList latestHits={latestHits}/>
            </div>
        </div>
    );
};

export default Content;
