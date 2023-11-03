import styled from "styled-components";

export const Header = () => {
    return (
        <Wrapper>
        </Wrapper>
    );
}

Header.displayName = 'Header'

const Wrapper = styled.div.attrs({className: 'header-wrapper'})`

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
    border-radius: 8px;
    border-right: 2px white solid;
  }
`;