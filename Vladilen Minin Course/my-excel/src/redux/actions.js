import {CHANGE_TEXT, TABLE_RESIZE} from './types';

export function tableResizeActionCr(data) {
  return {
    type: TABLE_RESIZE,
    data
  }
}

export function changeTextAction(data) {
  return {
    type: CHANGE_TEXT,
    data: data
  }
}
