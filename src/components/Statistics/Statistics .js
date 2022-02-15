import PropTypes from "prop-types";
import Notification from "../Notification";
import { SubTitle, Text } from "./Statistics.styles";
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <SubTitle>Statistics </SubTitle>
      {!good && !neutral && !bad ? (
        <Notification message="There is no feedback"></Notification>
      ) : (
        <div>
          <Text>
            Good: <span>{good}</span>
          </Text>
          <Text>
            Neutral: <span>{neutral}</span>
          </Text>
          <Text>
            Bad: <span>{bad}</span>
          </Text>
          <Text>
            Total: <span>{total}</span>
          </Text>
          <Text>
            Positive feedback: <span>{positivePercentage}%</span>
          </Text>
        </div>
      )}
    </>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
