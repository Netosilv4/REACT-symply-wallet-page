import axios from 'axios';

const setNewPayment = (paymentData) => ({
  type: 'setNewPayment',
  paymentData,
});

const processNewPayment = (value,
  description, method, tag, currency, login) => async (dispatch) => {
  let refreshCurrencys = await fetch('https://economia.awesomeapi.com.br/json/all');
  refreshCurrencys = await refreshCurrencys.json();
  const currencyRate = Object.values(refreshCurrencys).find((e) => e.code === currency && e.codein !== 'BRLT');
  const paymentData = {
    login,
    description,
    tag,
    method,
    value,
    currency,
    currencyRate: currencyRate.ask,
    totalValue: (value * currencyRate.ask).toFixed(2),
    currencyUtilized: 'BRL',
  };
  await axios.post('https://simply-wallet-api.herokuapp.com/newpayment', {
    ...paymentData,
  });

  return dispatch(setNewPayment(paymentData));
};
export default processNewPayment;
