import React from "react";
import categoryList from "../../resources/categoryInfo";
import CategoryItem from "./CategoryItem";
import "./Category.css";

export default class Category extends React.Component{
  render() {
    return (
    <div className="category">
      <div className="leftPage">&lt;</div>
      {
        categoryList.map(item => {
          return <CategoryItem name={item.name} categoryId={item.id}/>
        })
      }
      <div className="rightPage">&gt;</div>
    </div>
    );
  }
}