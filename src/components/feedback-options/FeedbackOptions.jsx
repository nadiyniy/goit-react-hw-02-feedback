import { StyledOptyonsDiv } from './FeedbackOptions.style';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <StyledOptyonsDiv>
      {options.map(option => {
        return (
          <button
            key={crypto.randomUUID()}
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {option}
          </button>
        );
      })}
    </StyledOptyonsDiv>
  );
};
