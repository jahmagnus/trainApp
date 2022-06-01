import TrainIcon from "./TrainIcon";
import ClockIcon from "./ClockIcon";
import ClockOutline from "./ClockOutline";
import LineBreak from "./LineBreak";
import CircleIcon from "./CircleIcon";

const CardDisplay = ({destination, boardType, time, status, platform}) => {
 
 
 
  const cardStyle = {
    textAlign: "center",
    marginTop: "3px",
    height: "auto",
    width: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "3px",
  };

  const cardStyleCard = {
    textAlign: "center",
    marginTop: "5px",
    height: "auto",
    width: "23rem",
    marginLeft: "auto",
    marginRight: "auto",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    borderStyle: "none",
  };

  /**
   * boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px'
   * boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
   *
   *
   */

  const headerStyle = {
    fontSize: "2rem",
    marginTop: "15.5px",
    color: "#333",
    fontWeight: "bold",
  };

  const metaStyle = {
    fontSize: "1.75rem",
    marginTop: "25.5px",
    marginBottom: "15.5px",
    textAlign: "left",
  };

  const metaStyleInfo = {
    fontSize: "1.75rem",
    marginTop: "25.5px",
    marginBottom: "15.5px",
    textAlign: "left",
    paddingLeft: "5px",
  };

  const departureSpan = {
    color: "#999",
  };

  const departureTimeSpan = {
    color: "#333",
    fontWeight: "bold",
    fontSize: "1.5rem",
  };

  const statusStyle = {
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "#00ff00",
    paddingLeft: "10px",
  };

  const arrivalTimeSpan = {
    color: "#333",
    fontWeight: "bold",
    fontSize: "1.5rem",
  };

  const arrivalSpan = {
    color: "#999",
  };



  return (
    <div className="ui cards ui container" style={cardStyle}>
      <div className="card" style={cardStyleCard}>
        <div className="content">
          <div className="header" style={headerStyle}>
            <TrainIcon /> <p>{destination}</p> <LineBreak />
          </div>
          <div className="meta" style={metaStyle}>
            <ClockIcon /> <span style={departureSpan}>{boardType}</span>{" "}
            <span style={departureTimeSpan}>{time}</span>
          </div>
          <div className="meta" style={metaStyleInfo}>
            <CircleIcon /> <span style={statusStyle}>{status}</span>
          </div>
          <div className="meta" style={metaStyle}>
            <ClockOutline /> <span style={arrivalSpan}> Platform:</span>{" "}
            <span style={arrivalTimeSpan}>{platform}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDisplay;