// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

export const Container = styled.div`
    width: 100%;
    margin-top: 5%;
`

export const StyledTable = styled.table`
    margin: auto;
    border-collapse: collapse;
    text-align: left;
    line-height: 1.5;
    border: 1px solid #ccc;
`

export const Thead = styled.thead`
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
    background: ${oc.indigo[5]};
`

export const TheadTh = styled.th`
    padding: 10px;
    font-weight: bold;
    vertical-align: top;
    color: #fff;
`

export const Id = styled.th`
    width: 50px;
    padding: 10px;
    font-weight: bold;
    vertical-align: top;
    border-bottom: 1px solid #ccc;
    //background: ${oc.indigo[0]};
`

export const Title = styled.td`
    width: 600px;
    padding: 10px;
    vertical-align: top;
    border-bottom: 1px solid #ccc;
`

export const Writer = styled.td`
    width: 100px;
    padding: 10px;
    vertical-align: top;
    border-bottom: 1px solid #ccc;
`

export const Date = styled.td`
    width: 50px;
    padding: 10px;
    vertical-align: top;
    border-bottom: 1px solid #ccc;
`

export const Views = styled.td`
    width: 50px;
    padding: 10px;
    vertical-align: top;
    border-bottom: 1px solid #ccc;
`