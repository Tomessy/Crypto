import React from 'react';

const Coin = props => {
    let style = ["col", "textPadding"]
    let price
    let currentPrice = props.currentPrice
    let change = props.currentPrice.split(".")
    
    if (change[1] === undefined) {
        price = currentPrice += ".00"
    } else if (change[1].length === 1) {
        price = currentPrice += "0"

    } else if (change[1].length >= 5) {
        // console.log(change[1].substring(0, 4))
        price = `${change[0]}.${change[1].substring(0, 4)}`
    } else {
        price = currentPrice
    }

    if(props.percentChange > 0){
        style.push("green")
    } else if(props.percentChange === 0) {
        style.push("grey")
    } else {
        style.push("red")
    }

    return(
        <div className="card">
            <div className="row gridPadding">
                <div className="col textPadding small">#{props.marketCap}</div>
                <div className="col medium"><img alt={`this was supposed to be the logo for ${props.name}`} src={props.image} height="50" width="50"></img></div>
                <div className="col textPadding medium">{props.name}</div>
                <div className="col textPadding">{props.symbol}</div>
                <div className={style.join(" ")}>${price}</div>
                <div className={style.join(" ")}>{props.percentChange}%</div>
            </div>
        </div>
        );
}

export default Coin;