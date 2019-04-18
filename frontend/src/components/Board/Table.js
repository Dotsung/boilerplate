// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import { Container, StyledTable, Thead, TheadTh} from './TableStyle'

import TableRow from './TableRow';

class Table extends React.Component {
  render() {

    const posts = [
        {
            title: "hi",
            contents: "my name is oo",
            writer: "ht"
        },
        {
            title: "bye",
            contents: "my name is AA",
            writer: "th"
        }
    ]

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
                  { posts.map((post, index) => 
                      <TableRow 
                        title={post.title}
                        contents={post.contents}
                        writer={post.writer}
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