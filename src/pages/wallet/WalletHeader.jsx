/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
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

function WalletHeader({ currency, newPayment, login }) {
  const classes = useStyles();
  const [currencyU, setCurrency] = useState('USD');
  const [methodU, setMethod] = useState('Dinheiro');
  const [tagU, setTag] = useState('Lazer');
  const [valueU, setValue] = useState(0);
  const [descriptionU, setDescription] = useState('');
  return (
    <>
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel>Currency</InputLabel>
          <Select
            required
            value={currencyU}
            onChange={({ target }) => setCurrency(target.value)}
          >
            {
              currency.map((e) => <MenuItem value={e.code}>{e.code}</MenuItem>)
            }
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>Method</InputLabel>
          <Select
            required
            value={methodU}
            onChange={({ target }) => setMethod(target.value)}
          >
            {
              method.map((e) => <MenuItem value={e}>{e}</MenuItem>)
            }
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>Tag</InputLabel>
          <Select
            className={classes.selectEmpty}
            value={tagU}
            onChange={({ target }) => setTag(target.value)}
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
            <TextField
              required
              type="number"
              value={valueU}
              onChange={({ target }) => setValue(target.value)}
            />
          </InputLabel>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>
            Description
            <TextField
              required
              value={descriptionU}
              onChange={({ target }) => setDescription(target.value)}
            />
          </InputLabel>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={() => newPayment(valueU, descriptionU, methodU, tagU, currencyU, login)}
            >
              {' '}
              Add
              {' '}

            </Button>
          </InputLabel>
        </FormControl>
      </div>
    </>
  );
}

export default WalletHeader;
