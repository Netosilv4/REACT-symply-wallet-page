/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data

export default function Orders({ payments = [] }) {
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
          </TableRow>
        </TableHead>
        <TableBody>
          {payments.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
