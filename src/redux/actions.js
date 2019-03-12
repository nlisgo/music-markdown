import {
  TRANSPOSE,
  UPDATE_COLUMN_COUNT
} from './actionTypes';

let transposeAmount = 0;
let columnCount = 1;

export const transpose = (isIncreaseTransposeAmount) => ({
  type: TRANSPOSE,
  payload: {
    transposeAmount: isIncreaseTransposeAmount ? ++transposeAmount : --transposeAmount
  }
});

export const updateColumnCount = (isIncreaseColumnCount) => ({
  type: UPDATE_COLUMN_COUNT,
  payload: {
    columnCount: isIncreaseColumnCount ? ++columnCount : --columnCount
  }
});
