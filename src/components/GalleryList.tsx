import React from 'react';
import {ILatestHit} from "../types";

interface IProps {
    readonly latestHits: Array<ILatestHit>
}

const GalleryList = (props: IProps) => {
    const latestHits = props.latestHits;
    return (
        <div className='gallery-list'>
            {latestHits.map((lh, i) =>
                <GalleryItem key={i} latestHit={lh}/>
            )}
        </div>
    );
};

interface IPropsItem {
    readonly latestHit: ILatestHit
}

const GalleryItem = (props: IPropsItem) => {
    const latestHit = props.latestHit;
    return (
        <div className='gallery-item'>
            <img src={latestHit["im:image"][2].label} alt={latestHit["im:name"].label}/>
            <div className='artist-name'>{latestHit["im:name"].label}</div>
        </div>
    );
};

export default GalleryList;
