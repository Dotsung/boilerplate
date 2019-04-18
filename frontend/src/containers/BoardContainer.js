// @flow
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import Table from 'components/Board/Table';
import Pagination from 'components/Board/Pagination';

class BoardContainer extends React.Component {
  render() {
    return (
        <div>
            <Table />
            <Pagination />
        </div>
    );
  }

}

export default BoardContainer;