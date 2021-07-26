/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { tag, method } from '../../utilityData/selectData';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function WalletHeader({ currencyInfo }) {
  const classes = useStyles();

  return (
    <>
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Currency</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-helper-label">Method</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
          >
            {
              method.map((e) => <MenuItem value={e}>{e}</MenuItem>)
            }
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-helper-label">Tag</InputLabel>
          <Select
            displayEmpty
            className={classes.selectEmpty}
            inputProps={{ 'aria-label': 'Without label' }}
          >
            {
              tag.map((e) => <MenuItem value={e}>{e}</MenuItem>)
          }
          </Select>
        </FormControl>
      </div>
      <div style={{
        display: 'flex', alignItems: 'center', height: '100%',
      }}
      >
        <FormControl className={classes.formControl}>
          <InputLabel>
            Value
            <TextField />
          </InputLabel>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>
            Description
            <TextField />
          </InputLabel>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>
            <Button variant="contained" color="primary"> Add </Button>
          </InputLabel>
        </FormControl>
      </div>
    </>
  );
}

export default WalletHeader;
