import axios from 'axios'
const url = 'https://vuejs-stocktrader-47b06.firebaseio.com/data.json'
export const loadData = ({commit}) => {
    axios.get(url).then(response => {
        const data = response.data
        const funds = data.funds;
        const stocks = data.stocks;
        const stockPortfolio = data.stockPortfolio ? data.stockPortfolio : [];

        const portfolio = {
            stockPortfolio,
            funds,
        };
        commit('SET_STOCKS', stocks)
        commit('SET_PORTFOLIO', portfolio)
    })
}