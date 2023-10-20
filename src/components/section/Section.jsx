import { StyledTitleDiv } from './Section.style';

export const Section = ({ title, children }) => {
  return (
    <StyledTitleDiv>
      <h2>{title}</h2>
      {children}
    </StyledTitleDiv>
  );
};
