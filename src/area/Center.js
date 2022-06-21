import React from "react"
import Category from "../component/category/Category";
import Goods from "../component/goods/Goods";
import { connect } from "react-redux"
import { getCategory } from "../redux/categorySlice"

class Center extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      categoryId: "01000"
    }
  }
  render() {
    console.log(this.props.getCategoryFromStore())
    return (<div className="center">
      <Category/>
      <Goods categoryId = {this.state.categoryId}/>
    </div>);

  }

  changeCategory = (categoryId) => {
    this.setState({categoryId:categoryId});
  }
};

const mapDispatchToProps = (dispatch) => {
  return {getCategoryFromStore: () => {dispatch(getCategory())}}
}
export default connect(null, mapDispatchToProps)(Center);