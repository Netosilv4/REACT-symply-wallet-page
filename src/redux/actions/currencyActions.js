const setCurrency = (data) => ({
  type: 'setCurrency',
  data,
});

const fetchCurrency = () => async (dispatch) => {
  let request = await fetch('https://economia.awesomeapi.com.br/json/all');
  request = await request.json();
  return dispatch(setCurrency(Object.values(request)));
};

export default fetchCurrency;
