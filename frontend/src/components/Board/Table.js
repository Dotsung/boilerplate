// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import { Container, StyledTable, Thead, TheadTh, TbodyTh, Contents, Writer} from './TableStyle'

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