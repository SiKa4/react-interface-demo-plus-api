import styled, {css} from "styled-components";
import {strings} from "../../../../assets/strings/strings.ts";
import {DropDownMenu} from "../../../drop_down_menu/DropDownMenu.tsx";
import {basketIcon, diagramIcon, pencilIcon} from "../../../../assets/img.ts";
import {observer} from "mobx-react-lite";

export const BodyMainBody = observer(() => {
    const data = [
        ['Какое меню 1', 'Западная Москва река и лодка', 'Сушу кручу', 'Активно', 'Яндекс', 'Header 6'],
        ['Какое меню 1', 'Западная Москва река и лодка', 'Сушу кручу', 'Не активно', 'Яндекс', 'Header 6'],
    ];

    const callbackDropDownMenu = (id: number) => {

    };

    return (
        <Wrapper>
            <Table>
                <TableHeader>
                    <TableRow isHeader={true}>
                        <TableHeaderCell>
                            <Input placeholder={strings.nameMenu}/>
                        </TableHeaderCell>
                        <TableHeaderCell>
                            <Input placeholder={strings.filial}/>
                        </TableHeaderCell>
                        <TableHeaderCell>
                            <Input placeholder={strings.pointOfSale}/>
                        </TableHeaderCell>
                        <TableHeaderCell>
                            <DropDownMenuWrapper>
                                <DropDownMenu callbackMethod={callbackDropDownMenu}
                                              contents={[{id: 1, name: 'Активно'}, {id: 2, name: 'Не активно'}]}
                                              width={105}/>
                            </DropDownMenuWrapper>
                        </TableHeaderCell>
                        <TableHeaderCell>
                            <span>{strings.export}</span>
                        </TableHeaderCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell>{row[0]}</TableCell>
                            <TableCell>{row[1]}</TableCell>
                            <TableCell>{row[2]}</TableCell>
                            <TableCell>{row[3]}</TableCell>
                            <TableCell>{row[4]}</TableCell>
                            <TableCell>{row[5]}</TableCell>
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