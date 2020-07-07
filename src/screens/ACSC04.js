import react from "react";
import React from "react";
import Lnb from "../components/Lnb";
class ACSC04 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txtValue: "",
      txtValue2: "",
      txtValue3: "",
    };
  }
  render() {
    const { txtValue, txtValue2, txtValue3 } = this.state;
    return (
      <div>
        <div>
          <Lnb title="About" column="HOME >contect" />
        </div>
        <input
          type="text"
          id="id"
          value={txtValue}
          name="txtValue"
          onChange={this._txtHandler}
        />
        <input
          type="text"
          value={txtValue2}
          name="txtValue2"
          onChange={this._txtHandler}
        />
        <input
          type="text"
          value={txtValue3}
          name="txtValue3"
          onChange={this._txtHandler}
        />
        <input type="button" value="확인" onClick={this._btnHandler} />
      </div>
    );
  }
  _txtHandler = (event) => {
    let nextState = {};
    nextState[event.target.name] = event.target.value;
    this.setState(nextState);
  };
  _btnHandler = () => {
    const { txtValue, txtValue2, txtValue3 } = this.state;
    console.log(txtValue);
    console.log(txtValue2);
    console.log(txtValue3);
  };
}
export default ACSC04;
