import React from "react";
import Lnb from "../components/Lnb";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

import Rotate from "react-reveal/Rotate";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
import Roll from "react-reveal/Roll";
import LightSpeed from "react-reveal/LightSpeed";
import Reveal from "react-reveal/Reveal";

class ACSC03 extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Lnb title="About" column="HOME >notice" />
          <Fade left>
            <p>안녕하세요 금학학원입니다</p>
          </Fade>
          <Fade bottom>
            <p>안녕하세요 금학학원입니다</p>
          </Fade>
          <Flip>
            <p>쿵쾅쿵쾅</p>
          </Flip>
          <Rotate>
            <p>금</p>
          </Rotate>
          <Zoom>
            <p>학</p>
          </Zoom>
          <Bounce>
            <p>수</p>
          </Bounce>
          <Roll>
            <p>학</p>
          </Roll>
          <LightSpeed>
            <p>학</p>
          </LightSpeed>
          <Reveal>
            <p>원</p>
          </Reveal>
        </div>
      </div>
    );
  }
}
export default ACSC03;
