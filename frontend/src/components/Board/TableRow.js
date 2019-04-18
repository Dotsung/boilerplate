// @flow
import React from 'react';
import { Id, Title, Writer, Date, Views } from './BoardStyle'

const TableRow = ({id, title, writer, date, views}) => {
    return (
        <tr>
            <Id scope="cols">{id}</Id>
            <Title>{title}</Title>
            <Writer>{writer}</Writer>
            <Date>{date}</Date>
            <Views>{views}</Views>
        </tr>
    )
}

export default TableRow;