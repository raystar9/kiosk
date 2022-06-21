import React from "react"
import Top from "./Top";
import Center from "./Center";
import Bottom from "./Bottom";

class Main extends React.Component{
  render() {
    return (
      <div className='container main'>
        <Top></Top>
        <Center></Center>
      </div>);
  }
};

export default Main;