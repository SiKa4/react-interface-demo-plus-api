import styled from "styled-components";

export const EmptyBody = () => {
    return (
        <Wrapper />
    );
}

EmptyBody.displayName = 'EmptyBody';

const Wrapper = styled.div.attrs({className: 'wrapper'})`
  width: calc(100vw - 260px);
  height: 100vh;
  padding-right: 20px;
  padding-left: 20px;
`;