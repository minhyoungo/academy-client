import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import ViewAgendaIcon from "@material-ui/icons/ViewAgenda";

class Lnb extends React.Component {
  render() {
    return (
      <div className="Lnb">
        <div className="Lnb__title">
          <MenuIcon /> {this.props.title}
        </div>
        <div className="Lnb__column">
          <ViewAgendaIcon />
          {this.props.column}
        </div>
      </div>
    );
  }
}
export default Lnb;
