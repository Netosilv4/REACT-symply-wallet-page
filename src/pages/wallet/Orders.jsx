/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Title from './Title';

// Generate Payment Data

export default function Orders({ payments = [], deletePayment }) {
  return (
    <>
      <Title>Recent Payments</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell>Tag</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell>Value</TableCell>
            <TableCell>Currency</TableCell>
            <TableCell>Currency Rate</TableCell>
            <TableCell>Total value</TableCell>
            <TableCell>Currency utilized</TableCell>
            <TableCell>Editar/Excluir</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {payments.map((e) => (
            <TableRow key={e.description}>
              <TableCell>{e.description}</TableCell>
              <TableCell>{e.tag}</TableCell>
              <TableCell>{e.method}</TableCell>
              <TableCell>{e.value}</TableCell>
              <TableCell>{e.currency}</TableCell>
              <TableCell>{e.currencyRate}</TableCell>
              <TableCell align="right">{e.totalValue}</TableCell>
              <TableCell align="right">{e.currencyUtilized}</TableCell>
              <TableCell align="right">
                <Button onClick={() => deletePayment(e._id)} style={{ backgroundColor: 'darkred', color: 'white' }} type="button">Excluir</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
