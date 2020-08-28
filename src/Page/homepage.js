import React, { Component } from "react";
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.metrodark.css";
import "../CSS/homepagestyle.css";
import bgMain from '../Assets/homepage.jpg';


export default class homepage extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  currentTime()
  {
      this.setState ({
          time: new Date()
      })
}

componentWillMount()
{
  setInterval(()=>this.currentTime(),1000)
}


  render() {
    return (
      <>
        <div class="box-center">
      
          <table>
            <tr>
              <th class="welcome-home"> ยินดีต้อนรับเข้าสู่ระบบสั่งสินค้า </th>
              </tr>

              <tr>
              <th class="time-home">{this.state.time.toLocaleTimeString()} </th>
             </tr>
          </table>
        </div>
        <img className="img-main" src={bgMain}  alt="" />
      </>
    );
  }
}
