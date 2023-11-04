import styled, {css} from "styled-components";
import {strings} from "../../../../assets/strings/strings.ts";
import {DropDownMenu} from "../../../drop_down_menu/DropDownMenu.tsx";
import {basketIcon, diagramIcon, pencilIcon} from "../../../../assets/img.ts";
import {observer} from "mobx-react-lite";
import {HTMLAttributes, ReactEventHandler, useEffect} from "react";
import {BodyData, BodyParams} from "../../../../data/Types.ts";
import {appStore} from "../../../../data/stores/app.store.ts";

type BodyMainBody = HTMLAttributes<HTMLDivElement> & {
    data: BodyData | null;
    paramsBodyRequest: BodyParams;
    setParamsBodyRequest: (params: BodyParams) => void;
};

const dropDownContent = [
    {id: 1, name: 'Не выбрано'},
    {id: 2, name: 'Активно'},
    {id: 3, name: 'Не активно'}];

export const BodyMainBody = observer((
    {
        data,
        paramsBodyRequest,
        setParamsBodyRequest
    }: BodyMainBody) => {

    function isWrapWindow() {
        if (!paramsBodyRequest || !setParamsBodyRequest) return;
        const height = self.innerHeight;
        const width = self.innerWidth;

        let limit = parseInt(String(((height / 200) + (width / 400) + 1)));

        if(limit < 1) limit = 1;

        if(limit == paramsBodyRequest.limit) return;

        setParamsBodyRequest({...paramsBodyRequest, limit: limit});
    }


    useEffect(() => {
        isWrapWindow();
        self.addEventListener('resize', isWrapWindow);

        return () => {
            self.removeEventListener('resize', isWrapWindow);
        };
    }, [,]);

    const callbackDropDownMenu = (id: number) => {
        if (!paramsBodyRequest || !setParamsBodyRequest) return;
        let value = '';
        switch (id) {
            case 2:
                value = 'active';
                break;
            case 3:
                value = 'no_active';
                break;
        }
        console.log(value);
        setParamsBodyRequest({...paramsBodyRequest, active: value});
    };

    return (
        <Wrapper>
            <Table>
                <TableHeader>
                    <TableRow isHeader={true}>
                        <TableHeaderCell>
                            <Input placeholder={strings.nameMenu} value={paramsBodyRequest.name}
                                   onChange={(e) => setParamsBodyRequest({
                                       ...paramsBodyRequest,
                                       name: e.target.value
                                   })}/>
                        </TableHeaderCell>
                        <TableHeaderCell>
                            <Input placeholder={strings.filial}
                                   onChange={(e) => setParamsBodyRequest({
                                       ...paramsBodyRequest,
                                       filial: e.target.value
                                   })}/>
                        </TableHeaderCell>
                        <TableHeaderCell>
                            <Input placeholder={strings.pointOfSale}
                                   onChange={(e) => setParamsBodyRequest({
                                       ...paramsBodyRequest,
                                       tt: e.target.value
                                   })}/>
                        </TableHeaderCell>
                        <TableHeaderCell>
                            <DropDownMenuWrapper>
                                <DropDownMenu callbackMethod={callbackDropDownMenu}
                                              contents={dropDownContent}
                                              width={115}/>
                            </DropDownMenuWrapper>
                        </TableHeaderCell>
                        <TableHeaderCell>
                            <span>{strings.export}</span>
                        </TableHeaderCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data && data?.data.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.filial.name}</TableCell>
                            <TableCell>{row.tt.name}</TableCell>
                            <TableCell>{row.active ? 'Активно' : 'Не активно'}</TableCell>
                            <TableCell>
                                {
                                    row.export.length > 0 ?
                                    row.export.map((exportV, i) => (
                                        <P key={i}>{exportV}</P>
                                    )) : null
                                }
                            </TableCell>
                            <TableCell>
                                <ImageWrapper>
                                    <Img src={diagramIcon}/>
                                    <Img src={pencilIcon}/>
                                    <Img src={basketIcon}/>
                                </ImageWrapper>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Wrapper>
    );
});

BodyMainBody.displayName = 'BodyMainBody';


const Wrapper = styled.div.attrs({className: 'body'})`
  width: 100%;
  height: calc(100% - 50px);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: none;
  color: var(--line-color);
  font-size: 15px;
`;

const TableCell = styled.td`
  border: none;
  width: 100px;
  color: var(--line-color);
  padding: 15px 13px;
  vertical-align: top;
`;

const TableHeaderCell = styled.th`
  padding: 10px 10px;
  text-align: left;
  color: var(--light-color);
  font-size: 15px;

  span {
    cursor: pointer;
    font-weight: 400;
  }
`;

const P = styled.p`
  margin: 0 0 5px;
`;

const TableRow = styled.tr<{ isHeader?: boolean }>`
  ${({isHeader}) => !isHeader && css`
    cursor: pointer;
    transition: box-shadow 0.5s ease-in-out;
    border-radius: 10px;

    &:hover {
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.47);
    }
  `}
`;

const Img = styled.img`
  cursor: pointer;
  height: 32px;
  width: 30px;
  transition: box-shadow 0.5s ease-in-out;

  &:hover {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.47);
  }
`;

const ImageWrapper = styled.div.attrs({className: 'image-wrapper'})`
  text-align: right;
  gap: 10px;
`;

const TableHeader = styled.thead`
  border-bottom: var(--line-color) 1px solid;
`;

const TableBody = styled.tbody`
`;

const Input = styled.input.attrs({className: 'input'})`
  height: 25px;
  border: rgba(101, 122, 157, 0.53) 1px solid;
  border-radius: 5px;
  width: 100%;
  text-indent: 6px;
  outline: none;

  &::placeholder {
    color: var(--light-color);
  }
`;

const DropDownMenuWrapper = styled.div.attrs({className: 'drop-down-menu-wrapper'})`
  color: var(--light-color);
  font-weight: 400;
  font-size: 14px;
`;