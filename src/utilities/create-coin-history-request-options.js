import { translateSelectedTimeframe } from './translate-selected-timeframe';

const createCoinHistoryRequestOptions = (coin, timeFrame) => {
  const timePeriod = translateSelectedTimeframe(timeFrame);
  return {
    method: 'GET',
    url: `https://coinranking1.p.rapidapi.com/coin/${coin}/history`,
    params: {
      referenceCurrencyUuid: '5k-_VTxqtCEI',
      timePeriod: timePeriod,
    },
    headers: {
      'X-RapidAPI-Key': '26261a3c2bmsh2e89cd95909fdedp1caf3cjsnf8454a673e57',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    },
  };
};

export default createCoinHistoryRequestOptions;
