/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits({ payments }) {
  const classes = useStyles();
  return (
    <>
      <Title>Total</Title>
      <Typography component="p" variant="h4">
        {payments.reduce((acc, e) => acc + Number(e.totalValue), 0)}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 25 jul, 2021
      </Typography>
    </>
  );
}
