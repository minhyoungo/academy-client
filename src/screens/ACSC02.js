import React from "react";
import Lnb from "../components/Lnb";
import "../styles/ACSC02.css";
import axios from "axios";

class ACSC02 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: "",
      endDate: "",

      file: null,
      fileName: "-",
    };
  }
  componentDidMount = async () => {
    // await axios.get(
    //   "http://localhost:5000/api/testREST",
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   },
    //   {}
    // );

    const inputData = {
      name: "오민형",
      age: "18",
      gender: "남성",
    };

    await axios.post(
      "http://localhost:5000/api/dataTest",
      {
        params: inputData,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  render() {
    const { startDate, endDate, fileName } = this.state;
    return (
      <div className="ACSC02">
        <Lnb title="info" column="HOME >info" />

        <div className="dateBox">
          <div className=" dateBox_col1">
            <div>시작일</div>
            <input
              type="date"
              name="startDate"
              value={startDate}
              onChange={this._dateChangeHandler}
            ></input>
            <div className=" dateBox_col2">
              <div>~</div>
            </div>
            <div className=" dateBox_col3">
              <div>종료일</div>
              <input
                type="date"
                name="endDate"
                value={endDate}
                onChange={this._dateChangeHandler}
              ></input>
              <button onClick={this._checkdate}>확인</button>
            </div>
          </div>
        </div>
        <div className="fileBox">
          <input
            className="inputFile"
            id="inputFile"
            type="file"
            onChange={this._fileChangeHandler}
          />

          <div>{fileName}</div>

          <label className="fileBox__lb" htmlFor="inputFile">
            파일업로드
          </label>
          <button>백엔드로 파일 전송</button>
        </div>
      </div>
    );
  }

  _sendFileHandler = async () => {
    //1. 현재 ㅇ버로드 된 파일 가져온다.
    const { file } = this.state;

    //2. 파일이 없으면 (null) 이라면 함수 중단
    if (file === null) {
      alert("파일없음");
      return;
    }

    //3. from태그 만든다.
    let form = new FormData();

    //4. form테그에 파일을 넣는다.
    form.append("uploadFile", file);

    //5. axios를 통해 server로 전송
    await axios.post("http://localhost:5000/api/fileUpload", form, {
      headers: {
        "Context-Type": "multipart/from-data",
      },
    });
  };
  _fileChangeHandler = (event) => {
    const file = event.target.files[0];

    console.log(file.name);
    this.setState({
      fileName: file.name,
      file: file,
    });
  };
  _dateChangeHandler = (event) => {
    let nextState = {};
    nextState[event.target.name] = event.target.value;
    this.setState(nextState);
  };
  _checkdate = () => {
    const { startDate, endDate } = this.state;
    console.log(`${startDate}부터 ${endDate} 까지 조회`);
  };
}
export default ACSC02;
