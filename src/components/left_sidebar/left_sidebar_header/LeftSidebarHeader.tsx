import styled from "styled-components";
import {strings} from "../../../assets/strings/strings.ts";
import {iconProfile, warehouseAccounting} from "../../../assets/img.ts";

export const LeftSidebarHeader = () => {
    return (
        <Wrapper>
            <WrapperContent>
                <NameWrapper>
                    <Image src={iconProfile}/>
                    <NameWrapperOnlyText>
                        {strings.companyName}
                        <P>Лоскутникова В.П.</P>
                    </NameWrapperOnlyText>
                </NameWrapper>
                <WarehouseAccountingWrapper>
                    <Image src={warehouseAccounting}/>
                    {strings.warehouseAccounting}
                </WarehouseAccountingWrapper>
            </WrapperContent>
        </Wrapper>
    );
}

LeftSidebarHeader.displayName = 'LeftSidebarHeader'

const Wrapper = styled.div.attrs({className: 'wrapper'})`
  width: 250px;
  height: 105px;
  background-color: #FFFFFF;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);
`;

const WrapperContent = styled.div.attrs({className: 'wrapper-content'})`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--line-color);
  padding: 10px;
`;

const NameWrapper = styled.div.attrs({className: 'name-wrapper'})`
  height: 50px;
  border-bottom: var(--line-color) 1px solid;
  width: 100%;
  display: flex;
  cursor: pointer;
`;

const NameWrapperOnlyText = styled.div.attrs({className: 'name-wrapper-only-text'})`

`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  padding-right: 10px;
`;


const WarehouseAccountingWrapper = styled.div.attrs({className: 'warehouse-accounting-wrapper'})`
  height: 39px;
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: color 0.3s ease-in-out;
`;

const P = styled.p`
  margin: 0;
  color: var(--light-color);
  font-size: 16px;
`;