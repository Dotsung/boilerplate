// @flow
import React from 'react';
import { TbodyTh, Contents, Writer } from './TableStyle'

const TableRow = ({title, contents, writer}) => {
    return (
        <tr>
            <TbodyTh scope="cols">{title}</TbodyTh>
            <Contents>{contents}</Contents>
            <Writer>{writer}</Writer>
        </tr>
    )
}

export default TableRow;