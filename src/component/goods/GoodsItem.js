import React from "react";

export default class Goods extends React.Component {
  render() {
    return (<div key={this.props.index} className="goodsItem">
      <img className="goodsImageArea" src={require("../../resources/images/" + this.props.image)}></img>
      <div className="itemName">
        {this.props.name}
      </div>
      <div>
        {this.props.price}
      </div>
    </div>);
  }
}