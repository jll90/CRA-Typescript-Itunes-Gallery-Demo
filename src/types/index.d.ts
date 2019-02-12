
export interface ILatestHit {
    readonly category: ICategory,
    readonly ['im:name']: IName,
    readonly ['im:artist']: IArtist,
    readonly ['im:image']: Array<IImage>
}

export interface IName {
    readonly label: string
}

export interface IImage {
    readonly label: string
}

export interface IArtist {
    readonly label: string
}

export interface ICategory {
    readonly attributes: {
        label: string
    }
}
