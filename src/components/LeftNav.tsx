import React from 'react';
import {ICategory} from "../types";

interface IProps {
    readonly categories: Array<ICategory>,
    filterCb: (name: string | null) => void
    readonly filterCategoryName: string | null
}

const LeftNav = (props: IProps) => {
    const {categories, filterCb, filterCategoryName} = props;
    const names = categories.map(c => c.attributes.label);
    return (
        <div className='left-nav'>
            <div
                className='categories-header'
                onClick={() => {
                    filterCb(null);
                }}
            >MUSIC
            </div>
            <div className='categories-list'>
                {names.map((n, i) => {
                    const classes = n === filterCategoryName ? 'active' : '';
                        return (
                            <div className={classes}
                            key={i}
                            onClick={() => {
                                filterCb(n)
                            }}
                        >{n}</div>
                        )
                    }
                )}
            </div>
        </div>
    );
};

export default LeftNav;
