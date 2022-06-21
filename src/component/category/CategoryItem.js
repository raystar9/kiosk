import React from "react";
import { connect } from "react-redux"
import { setCategory } from "../../redux/categorySlice"

class CategoryItem extends React.Component {
  
  render() {
    return (
      <div id={this.props.id} className="categoryItem" onClick={
          () => {this.props.setCategory(this.props.categoryId)}}>{this.props.name
        } 
      </div>
    );
  }
}

const mapDispatchToProps = {
  setCategory
}
export default connect(null, mapDispatchToProps)(CategoryItem)