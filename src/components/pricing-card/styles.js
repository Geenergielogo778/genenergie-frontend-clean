import { TableCell, TableRow, styled } from '@mui/material';

export const BaseTableCell = styled(TableCell)(() => ({
  background: 'transparent',
  color: 'white',
  borderBottom: 'none',
  textAlign: 'center',
  '&:first-of-type': {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  '&:last-of-type': {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderRight: 'none',
  },
}));

export const StyledTableCell = styled(BaseTableCell)({
  fontSize: '28px',
  borderRight: '1px solid white',
});

export const StyledTableHeadCell = styled(BaseTableCell)({
  fontSize: '24px',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '13px',
    bottom: 0,
    right: 0,
    width: '0.5px',
    backgroundColor: 'white',
    height: '35px',
  },
  '&:last-of-type::after': {
    backgroundColor: 'transparent', // Remove the line for the last cell
  },
});

export const StyledTableHeadRow = styled(TableRow)(() => ({
  border: '2px solid rgba(25, 76, 205, 0.18)',
  backgroundColor: 'rgba(83, 100, 149, 0.20)',
  boxShadow: `-35.767px 35.767px 35.767px 0px rgba(255, 255, 255, 0.20) inset,
              35.767px -35.767px 35.767px 0px rgba(63, 76, 113, 0.20) inset,
              8px 9px 7.6px 0px rgba(0, 0, 0, 0.25)`,
  backdropFilter: 'blur(57.58433151245117px)',
  borderRadius: '8px',
}));
