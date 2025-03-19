export const financeMock = {
  by: 'default',
  valid_key: true,
  results: {
    currencies: {
      source: 'BRL',
      USD: {
        name: 'Dollar',
        buy: 5.67,
        sell: 5.6689,
        variation: -0.264
      },
      EUR: {
        name: 'Euro',
        buy: 6.1909,
        sell: 6.192,
        variation: -0.242
      },
      GBP: {
        name: 'Pound Sterling',
        buy: 7.3641,
        sell: null,
        variation: -0.249
      },
      ARS: {
        name: 'Argentine Peso',
        buy: 0.0051,
        sell: null,
        variation: 0
      },
      CAD: {
        name: 'Canadian Dollar',
        buy: 3.9661,
        sell: null,
        variation: -0.274
      },
      AUD: {
        name: 'Australian Dollar',
        buy: 3.6177,
        sell: null,
        variation: -0.232
      },
      JPY: {
        name: 'Japanese Yen',
        buy: 0.0379,
        sell: null,
        variation: -0.263
      },
      CNY: {
        name: 'Renminbi',
        buy: 0.7842,
        sell: null,
        variation: 0
      },
      BTC: {
        name: 'Bitcoin',
        buy: 500552.956,
        sell: 500552.956,
        variation: -0.994
      }
    },
    stocks: {
      IBOVESPA: {
        name: 'BM&F BOVESPA',
        location: 'Sao Paulo, Brazil',
        points: 130833.96,
        variation: 1.46
      },
      IFIX: {
        name: 'Índice de Fundos de Investimentos Imobiliários B3',
        location: 'Sao Paulo, Brazil',
        points: 3220.09,
        variation: 0.23
      },
      NASDAQ: {
        name: 'NASDAQ Stock Market',
        location: 'New York City, United States',
        points: 17808.66,
        variation: 0.31
      },
      DOWJONES: {
        name: 'Dow Jones Industrial Average',
        location: 'New York City, United States',
        points: 41841.63,
        variation: 0.85
      },
      CAC: {
        name: 'CAC 40',
        location: 'Paris, French',
        points: 8073.98,
        variation: 0.57
      },
      NIKKEI: {
        name: 'Nikkei 225',
        location: 'Tokyo, Japan',
        points: 37396.52,
        variation: 0.93
      }
    },
    available_sources: ['BRL'],
    bitcoin: {
      blockchain_info: {
        name: 'Blockchain.info',
        format: ['USD', 'en_US'],
        last: 83380.55,
        buy: 83380.55,
        sell: 83380.55,
        variation: -0.879
      },
      bitstamp: {
        name: 'BitStamp',
        format: ['USD', 'en_US'],
        last: 83397,
        buy: 83290,
        sell: 83280,
        variation: -0.782
      },
      foxbit: {
        name: 'FoxBit',
        format: ['BRL', 'pt_BR'],
        last: 475726,
        variation: -0.822
      },
      mercadobitcoin: {
        name: 'Mercado Bitcoin',
        format: ['BRL', 'pt_BR'],
        last: 475810.07537541,
        buy: 475471.24120919,
        sell: 475810.07537541,
        variation: -0.678
      }
    },
    taxes: [
      {
        date: '2025-03-14',
        cdi: 13.25,
        selic: 13.25,
        daily_factor: 1.00049037,
        selic_daily: 13.15,
        cdi_daily: 13.15
      }
    ]
  },
  execution_time: 0,
  from_cache: true
}
