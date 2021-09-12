import "../../css/gemCard.css";
import rubyImg from '../../assets/ruby.png';
import React,{useState} from 'react';

function RubyCard() {

    let price = localStorage.getItem('ruby');

    let [buyQ, setBuyQ] = useState(0);
    let [buyQprice, setBuyQprice] = useState(0);
    let [sellQ, setSellQ] = useState(0);
    let [sellQprice, setSellQprice] = useState(0);
    
    let ownedQ = localStorage.getItem('rubiesOwned');
    let ownedQprice = ownedQ * price;

    const increaseBuyQP= () => {
        setBuyQ(buyQ => buyQ + 1);
        setBuyQprice(buyQprice => (buyQ+1) * price);
    };

    const decreaseBuyQP= () => {
        if (buyQ>0){
            setBuyQ(buyQ => buyQ - 1);
            setBuyQprice(buyQprice => (buyQ-1) * price);
        }
    };

    const increaseSellQP= () => {
        setSellQ(sellQ => sellQ + 1);
        setSellQprice(sellQprice => (sellQ+1) * price);
    };

    const decreaseSellQP= () => {
        if (sellQ>0){
            setSellQ(sellQ => sellQ - 1);
            setSellQprice(sellQprice => (sellQ-1) * price);
        }
    };
    
    return (
        <div className="Card">
        <div className="topCard">
            <img className="cardIMG" src={rubyImg} alt="ruby" width="50px" />
            <div className="topCardDetails">
            <p>
                Ruby <br /> Price: {price}$
            </p>
            </div>
        </div>
        <div className="bottomCard">
            <p className="greyText">Buy</p>
            <div className="GemsBuySell">
                <button className = "plusMinusBT" onClick = {decreaseBuyQP}> - </button>
                <div className="whiteValue">{buyQ} </div>
                <button className = "plusMinusBT" onClick = {increaseBuyQP}> + </button>
                <div className="greyValue">{buyQprice} $</div>
            </div>
            <p className="greyText">Sell</p>
            <div className="GemsBuySell">
                <button className = "plusMinusBT" onClick = {decreaseSellQP}> - </button>
                <div className="whiteValue">{sellQ} </div>
                <button className = "plusMinusBT" onClick = {increaseSellQP}> + </button>
                <div className="greyValue">{sellQprice} $</div>
            </div>
            <div className="userStockpile">
                <p className="greyText">My Stockpile</p>
                <div className="stockpile">
                    <div className="whiteValueStockPile">Quantity: {ownedQ} </div>
                    <div className="greyValueStockPile">Price: {ownedQprice} </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default RubyCard;