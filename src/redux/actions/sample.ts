import * as types from '../types';

export interface Action {
    type:String,
    count?: number
};

export const incrementOne:Action = { type: types.INCREMENT_ONE };

export const incrementByCount = (count: number):Action => ({ count, type: types.INCREMENT_BY_COUNT });
