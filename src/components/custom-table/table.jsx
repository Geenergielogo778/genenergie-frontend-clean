import React from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { StyledTableCell, StyledTableHeadCell, StyledTableHeadRow } from './styles';

const GlobalTable = ({ data, columns }) => (
  <TableContainer sx={{ color: '#fff' }}>
    <Table>
      <TableHead>
        <StyledTableHeadRow>
          {columns.map((column) => (
            <StyledTableHeadCell key={column.id}>{column.header}</StyledTableHeadCell>
          ))}
        </StyledTableHeadRow>
      </TableHead>
      <TableBody>
        <TableRow style={{ height: '40px' }} />
        {data?.map((row) => (
          <TableRow key={row.id}>
            {columns?.map((column) => (
              <StyledTableCell key={column.id}>
                {column.render ? column.render(row) : row[column.id]}
              </StyledTableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

GlobalTable.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
};

export default GlobalTable;
