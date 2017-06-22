import React from "react";

import Article from "../components/Article";

export default class Featured extends React.Component {
  render() {
     const mainStyle = {
      marginLeft:"25px",
      marginRight:"25px",
      bcolor:"red",
    };

    const topStyle={
      fontSize:"38px",
      fontWeight: 'bold',
      color:"#022a50",
      marginTop:"57px",
    }
    const Articles = [
      "Fruits",
      "Meat",
      "Dairy",
      "Vegetables",
      "HouseHold",
      "Canned Goods",
      "Frozen Foods",
      "Pasta & Rice",
      "Breads",
      "Beverages",
      "Sauces & Oil",
      "Snacks",
      "Spices",
      "Pet Items",
      "Deli",
      "Toileteries",
      "OH Yeah And",
    ].map((title, i) => <Article key={i} title={title}/> );

    const adText = [
      "ALL OUT OF",


    ];

    const randomAd = adText[Math.round( Math.random() * (adText.length-1) )];
    console.log("featured");
    return (
      <div class="main" style={mainStyle}>
        <div class="row">
          <div class="col-lg-12" style={topStyle}>
            <div class="well text-center">
              {randomAd}
            </div>
          </div>
        </div>

        <div class="row">{Articles}</div>
      </div>
    );
  }
}
