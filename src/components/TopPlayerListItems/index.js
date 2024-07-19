import {
  ListItem,
  HeadingElement,
  TimeContainer,
  SerialNameContainer,
  HeadingName,
} from "./styledComponents";
import { FaIndianRupeeSign } from "react-icons/fa6";
import "./index.css";

const TopPlayerListItems = (props) => {
  const { topPlayerDetails, bgColor, cashPrize, textColor } = props;
  const { serialNo, name, time } = topPlayerDetails;

  return (
    <div className="centerCon">
      <ListItem bgColor={bgColor}>
        <SerialNameContainer>
          <HeadingElement textColor={textColor}>{serialNo}</HeadingElement>
          <HeadingName>{name}</HeadingName>
        </SerialNameContainer>
        <TimeContainer>
          <div className="cashPrizeContainer">
            <FaIndianRupeeSign />
            <p className="prize">{cashPrize}</p>
          </div>
          <p className="timee">{time}</p>
        </TimeContainer>
      </ListItem>
    </div>
  );
};

export default TopPlayerListItems;
