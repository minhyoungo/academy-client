import React from "react";
import Lnb from "../components/Lnb";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class ACSC01 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataList: [],
      txtValue: "",
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
      const arr = ["경민", "에림", "효진"];
      this.setState({
        dataList: arr,
      });
    }, 5000);
  };

  render() {
    const { dataList, txtValue } = this.state;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 800,
      afterChange: () => console.log("afterChange"),
      centerMode: true,
    };

    return (
      <div>
        <Lnb title="About" column="HOME >About" />

        {dataList.length === 0 ? (
          <div>데아터를 불러오는중입니다.</div>
        ) : (
          dataList.map((data, idx) => {
            return (
              <div>
                {idx + 1}. {data}
              </div>
            );
          })
        )}

        <Slider {...settings}>
          <div className="slick__box">
            <h3 className="slick__box__1">1</h3>
          </div>
          <div className="slick__box">
            <h3 className="slick__box__2">2</h3>
          </div>
          <div className="slick__box">
            <h3 className="slick__box__3">3</h3>
          </div>
          <div className="slick__box">
            <h3 className="slick__box__4">4</h3>
          </div>
          <div className="slick__box">
            <h3 className="slick__box__5">5</h3>
          </div>
          <div className="slick__box">
            <h3 className="slick__box__6">6</h3>
          </div>
        </Slider>
        <div className="controll">
          <div className="chatArea"></div>
          <input
            type="text"
            id="txt"
            name="txtValue"
            value={txtValue}
            onChange={this._valueChangeHandler}
          />
          <input type="button" value="확인" onClick={this._inputHandler} />
        </div>
      </div>
    );
  }

  _valueChangeHandler = (event) => {
    let nextState = {};

    nextState[event.target.name] = event.target.value;
    this.setState(nextState);
  };

  _inputHandler = () => {
    const txt = document.getElementById("txt");

    console.log(txt.value);
  };
}
export default ACSC01;
