// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Container = styled.div`
    width: 100%;
    margin-top: 5%;
`

const StyledTable = styled.table`
    margin: auto;
    border-collapse: collapse;
    text-align: left;
    line-height: 1.5;
    border: 1px solid #ccc;
`

const Thead = styled.thead`
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
    background: ${oc.indigo[5]};
`

const TheadTh = styled.th`
    padding: 10px;
    font-weight: bold;
    vertical-align: top;
    color: #fff;
`

const TbodyTh = styled.th`
    width: 200px;
    padding: 10px;
    font-weight: bold;
    vertical-align: top;
    border-bottom: 1px solid #ccc;
    background: ${oc.indigo[0]};
`

const Contents = styled.td`
    width: 600px;
    padding: 10px;
    vertical-align: top;
    border-bottom: 1px solid #ccc;
`

const Writer = styled.td`
    width: 100px;
    padding: 10px;
    vertical-align: top;
    border-bottom: 1px solid #ccc;
`

class Table extends React.Component {
  render() {

    return (
        <Container>
          <StyledTable>
              <Thead>
                  <tr>
                      <TheadTh scope="cols">제목</TheadTh>
                      <TheadTh scope="cols">내용</TheadTh>
                      <TheadTh scope="cols">작성자</TheadTh>
                  </tr>
              </Thead>
              <tbody>
                  <tr>
                      <TbodyTh scope="cols">항목명</TbodyTh>
                      <Contents>내용이 들어갑니다.</Contents>
                      <Writer>작성자</Writer>
                  </tr>
              </tbody>
          </StyledTable>
        </Container>
    );
  }

}

export default Table;