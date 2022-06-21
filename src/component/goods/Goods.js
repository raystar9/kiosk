import React from "react";
import { connect } from "react-redux"
import itemInfo from "../../resources/ItemInfo";
import GoodsItem from "./GoodsItem";
import "./Goods.css";

class Goods extends React.Component {
  render() {
    return (
    <div className="goods">
      {itemInfo.map((item, index) => {
        if(item.categoryId === this.props.categoryId) {
          return <GoodsItem name={item.name} image={item.image} price={item.price} index={index}/>
        }
      })}
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {categoryId: state.category}
}

export default connect(mapStateToProps)(Goods)