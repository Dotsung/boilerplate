// @flow
import React from 'react';
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import styled from 'styled-components';
import oc from 'open-color';

const Div = styled.div`
    margin-top: 2%;
    text-align: center;
    width: 100%;
`

const PaginationContainer = styled.div`
    margin: 0 auto;
    display: inline-block;
`

const PaginationA = styled.a`
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;

    ${
        props => {
            if(props.active){
                return `
                background-color: ${oc.indigo[6]}
                color: white
                `
            }
        }
    }

    &:hover{
        ${
            props=>props.active?``:`background-color: ${oc.indigo[2]}`
        }
    }
`

@observer
class Pagination extends React.Component {
  render() {
    return (
        <Div>
            <PaginationContainer>
                <PaginationA href="#">&laquo;</PaginationA>
                <PaginationA href="#">1</PaginationA>
                <PaginationA active={true} href="#">2</PaginationA>
                <PaginationA href="#">3</PaginationA>
                <PaginationA href="#">4</PaginationA>
                <PaginationA href="#">5</PaginationA>
                <PaginationA href="#">&raquo;</PaginationA>
            </PaginationContainer>
        </Div>
    );
  }

}

export default Pagination;