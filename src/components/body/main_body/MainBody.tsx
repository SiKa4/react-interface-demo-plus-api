import styled from "styled-components";
import {observer} from "mobx-react-lite";
import {appStore} from "../../../data/stores/app.store.ts";
import {BodyMainBody} from "./body_main_body/BodyMainBody.tsx";
import {PaginationTable} from "./padination_table/PaginationTable.tsx";
import {useEffect, useState} from "react";
import {apiRequest} from "../../../api_request/api-request.ts";
import {BodyData, BodyParams} from "../../../data/Types.ts";

const initialBodyParams: BodyParams = {
    page: 1,
    name: '',
    active: '',
    filial: '',
    limit: 3,
    tt: ''
};

export const MainBody = observer(() => {

    const [bodyData, setBodyData] = useState<BodyData | null>(null);
    const [paramsBodyRequest, setParamsBodyRequest] = useState(initialBodyParams);
    const filial = appStore.getSelectFilial;

    useEffect(() => {
        getDataInFilial();
    }, [filial, paramsBodyRequest]);

    const getDataInFilial = async () => {
        if (!filial) return;
        setBodyData(await apiRequest.GetInfoAboutFilialById(filial, paramsBodyRequest));
    }

    const callbackSelectedPage = (page: number) => {
        const params = {
            ...paramsBodyRequest, page: page
        };
        setParamsBodyRequest(params);
    }

    return (
        <Wrapper isMobile={appStore.getIsMobile}>
            <BodyMainBody data={bodyData} paramsBodyRequest={paramsBodyRequest}
                          setParamsBodyRequest={setParamsBodyRequest}/>
            <PaginationTable maxPages={bodyData?.max_pages ?? 0} callbackSelectedPage={callbackSelectedPage}/>
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