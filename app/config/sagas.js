
import { takeEvery, call, put, select } from 'redux-saga/effects';

// 1. Swap currency
// 2. Change base cuurency
// 3. Upon intial app load

import { 
    SWAP_CURRENCY, 
    CHANGE_BASE_CURRENCY, 
    GET_INTIAL_CONVERSION, 
    CONVERSION_RESULT,
    CONVERSION_ERROR 
} from '../actions/currencies';

export const getLatestRate = currency => fetch(`http://fixer.handlebarlabs.com/latest?base=${currency}`);

const fetchLatestConversionRates = function* (action) {
//  console.log('TODO: Update the things',action);
  try
  {
        let currency = action.currency;
        console.log('saga currency',currency);
        if (currency === undefined) {
            currency = yield select(state => state.currencies.baseCurrency);
        }
        //console.log('currency',currency);
        const response = yield call(getLatestRate, currency);
        console.log('url',getLatestRate);
        const result = yield response.json();
        if(result.error) 
        {
            yield put({ type: CONVERSION_ERROR, error: result.error });
        } else 
        {
            yield put({ type: CONVERSION_RESULT,result });
        }
  }catch (e) 
  {
        console.log('error',e);
        yield put({ type: CONVERSION_ERROR, error: e.message });
  }
};

const rootSaga = function* () {
    yield takeEvery(GET_INTIAL_CONVERSION, fetchLatestConversionRates);
    yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
    yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);

};
export default rootSaga;
