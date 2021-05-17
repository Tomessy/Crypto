import React, { Component } from 'react';
import axios from "axios";
import Body from "./Components/Body";


export default class Crypto extends Component {

    constructor() {
      super();
      this.state = {
        coinsArray: [],
        loading: true
      };
    }

    componentDidMount() {
      axios.get( `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C1y`)
      .then(response => {
        this.setState({
          coinsArray: response.data,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
    }

    render() {
    return (
      <>
        { this.state.loading && <h3 className="gridPadding poweredBy">Loading</h3> }

          <Body loading={this.state.loading} data={this.state.coinsArray}/>
      </>
    );
  }
}
