import React from 'react';
import Nav from "./Nav"
import Coin from "./Coin"

const Body = props => {

    const results = props.data;
    let coins = results.map(coin =>
        
        <Coin 
            key={coin.id}
            name={coin.name}
            symbol={coin.symbol.toUpperCase()}
            currentPrice={coin.current_price.toString()}
            percentChange = {coin.price_change_percentage_24h.toString().substring(0, 5)}
            marketCap={coin.market_cap_rank}
            image={coin.image}
            
             />

    );
    return(
            <div>
                <Nav />
                <div className="row heading">
                    <div className="col textPadding small">Market Cap</div>
                    <div className="col textPadding medium">Logo</div>
                    <div className="col textPadding medium">Name</div>
                    <div className="col textPadding">Symbol</div>
                    <div className="col textPadding">Current Price</div>
                    <div className="col textPadding">24 hour change</div>
                </div>
                { coins }
                <h3 className="gridPadding poweredBy">Powered by CoinGecko API</h3>
            </div>
    );
}

export default Body;