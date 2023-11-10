import styled from "styled-components";
import {observer} from "mobx-react-lite";
import {BodyMainBody} from "./body_main_body/BodyMainBody.tsx";
import {PaginationTable} from "./padination_table/PaginationTable.tsx";
import {useEffect, useState} from "react";
import {BodyParams} from "../../../data/Types.ts";
import {useGetInfoAboutFilialByIdQuery} from "../../../api_request/api-request.ts";
import {useSelector} from "react-redux";
import {RootState} from "../../../data/stores/app.store.ts";

const initialBodyParams: BodyParams = {
    page: 1,
    name: '',
    active: '',
    filial: '',
    limit: 3,
    tt: ''
};

export const MainBody = observer(() => {
    const [paramsBodyRequest, setParamsBodyRequest] = useState(initialBodyParams);

    const selectFilial = useSelector((state : RootState) => state.store.selectFilial);
    const isMobile = useSelector((state : RootState) => state.store.isMobile);

    const {data: bodyData, refetch: refetchBodyData} = useGetInfoAboutFilialByIdQuery({
        idFilial: selectFilial,
        args: paramsBodyRequest
    });

    useEffect(() => {
        getDataInFilial();
    }, [selectFilial, paramsBodyRequest]);

    const getDataInFilial = async () => {
        if (selectFilial)
            await refetchBodyData();
    }

    const callbackSelectedPage = (page: number) => {
        const params = {
            ...paramsBodyRequest, page: page
        };
        setParamsBodyRequest(params);
    }

    return (
        <Wrapper isMobile={isMobile}>
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