import styled from "styled-components";
import {observer} from "mobx-react-lite";
import {appStore} from "../../../data/stores/app.store.ts";
import {BodyMainBody} from "./body_main_body/BodyMainBody.tsx";
import {PaginationTable} from "./padination_table/PaginationTable.tsx";
import {useEffect, useState} from "react";

export const MainBody = observer(() => {

    const filial = appStore.getSelectFilial;
    const [bodyData, setBodyData] = useState<>()

    useEffect(() => {
        if(!filial) return;

    }, [filial]);

    return (
        <Wrapper isMobile={appStore.getIsMobile}>
            <BodyMainBody/>
            <PaginationTable maxPages={10}/>
        </Wrapper>
    );
});

MainBody.displayName = 'MainBody';


const Wrapper = styled.div.attrs({className: 'wrapper'})<{ isMobile: boolean }>`
  width: ${props => props.isMobile ? '100vw' : 'calc(100vw - 260px)'};
  height: 100vh;
  padding-right: 20px;
  padding-left: 20px;
`;