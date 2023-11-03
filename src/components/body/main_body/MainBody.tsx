import styled from "styled-components";
import {HeaderMainBody} from "./header_main_body/HeaderMainBody.tsx";
import {observer} from "mobx-react-lite";
import {appStore} from "../../../data/stores/app.store.ts";

export const MainBody = observer(() => {
    return (
        <Wrapper isMobile={appStore.getIsMobile}>
            <HeaderMainBody/>
            <Body></Body>
            <PaginationTable></PaginationTable>
        </Wrapper>
    );
});

MainBody.displayName = 'MainBody';

const Wrapper = styled.div.attrs({className: 'wrapper'})<{isMobile: boolean}>`
  width: ${props => props.isMobile ? '100vw' : 'calc(100vw - 260px)'};
  height: 100vh;
  padding-right: 20px;
  padding-left: 20px;
`;

const Body = styled.div.attrs({className: 'body'})`
  width: 100%;
  height: calc(100% - 100px);
  background-color: #1B1918;
`;

const PaginationTable = styled.div.attrs({className: 'pagination-table'})`
  height: 35px;
  width: 100%;
  background-color: #D40025;
`;