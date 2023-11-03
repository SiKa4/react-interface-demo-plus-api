import styled from "styled-components";
import {strings} from "../../../../assets/strings/strings.ts";
import {DropDownMenu} from "../../../drop_down_menu/DropDownMenu.tsx";

export const HeaderMainBody = () => {

    const callbackDropDownMenu = (id: number) => {

    };

    return (
        <Wrapper>
            <Contents>
                <Input placeholder={strings.nameMenu}/>
                <Input placeholder={strings.filial}/>
                <Input placeholder={strings.pointOfSale}/>
                <DropDownMenuWrapper>
                    <DropDownMenu callbackMethod={callbackDropDownMenu}
                                  contents={[{id: 1, name: 'Активно'}, {id: 2, name: 'Не активно'}]}
                                  width={110}/>
                </DropDownMenuWrapper>
                <span>{strings.export}</span>
            </Contents>
        </Wrapper>
    );
}

HeaderMainBody.displayName = 'HeaderMainBody';

const Wrapper = styled.div.attrs({className: 'wrapper'})`
  width: 100%;
  height: 50px;
  border-bottom: var(--line-color) 1px solid;
`;

const Contents = styled.div.attrs({className: 'contents'})`
  display: flex;
  align-items: center;
  height: 50px;
  margin: 0 10px;
  gap: 20px;
  color: var(--light-color);
  font-size: 14px;
  
  span {
    cursor: pointer;
  }
`;

const Input = styled.input.attrs({className: 'input'})`
  height: 25px;
  border: rgba(101, 122, 157, 0.53) 1px solid;
  border-radius: 5px;
  width: 15%;
  max-width: 150px;
  min-width: 110px;
  text-indent: 6px;
  outline: none;
  
  &::placeholder {
    color: var(--light-color);
  }
`;

const DropDownMenuWrapper = styled.div.attrs({className: 'drop-down-menu-wrapper'})`
  color: var(--light-color);
`;