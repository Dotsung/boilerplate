// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import { Container, StyledTable, Thead, TheadTh} from './BoardStyle'

import TableRow from './TableRow';

class Table extends React.Component {
  render() {

    const posts = [
        {
            id: 1,
            title: "hi",
            writer: "ht",
            date: "04/18",
            views: 100
        },
        {
            id: 2,
            title: "hi",
            writer: "ht",
            date: "04/18",
            views: 120
        }
    ]

    return (
        <Container>
          <StyledTable>
              <Thead>
                  <tr>
                      <TheadTh scope="cols">번호</TheadTh>
                      <TheadTh scope="cols">제목</TheadTh>
                      <TheadTh scope="cols">글쓴이</TheadTh>
                      <TheadTh scope="cols">날짜</TheadTh>
                      <TheadTh scope="cols">조회</TheadTh>
                  </tr>
              </Thead>
              <tbody>
                  { 
                      posts.map((post, index) => 
                      <TableRow 
                        id={post.id}
                        title={post.title}
                        writer={post.writer}
                        date={post.date}
                        views={post.views}
                        key={index}
                      />
                  )}
              </tbody>
          </StyledTable>
        </Container>
    );
  }

}

export default Table;