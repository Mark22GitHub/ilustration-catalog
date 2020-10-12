let ApiKey = '18623551-685e1819373a3e2d77873e072';

export default {
    _searchQ: "",
    perPage: 4,
    page: 1,
    
    
    getFetch() {
        let url = `https://pixabay.com/api/videos/?key=${ApiKey}&q=${this._searchQ}&per_page=${this.perPage}`;
        return fetch(url).then(res => res.json())
    },

    get searchQ() {
        return this._searchQ
    },

    set searchQ(newSearch) {
        this._searchQ = newSearch
    },
}