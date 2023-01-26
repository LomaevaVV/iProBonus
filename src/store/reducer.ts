import { createReducer } from '@reduxjs/toolkit';
import { FetchStatus } from '../const';
import { Bonus } from '../types/bonus';
import { fetchBonusAction, checkAuthAction } from './api-actions';

type DataBonus = {
  bonus?: Bonus;
  bonusFetchStatus: string;
  accessToken: string;
};

const initialState: DataBonus = {
  bonusFetchStatus: FetchStatus.Idle,
  accessToken: ''
};

export const reducer = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(fetchBonusAction.pending, (state) => {
        state.bonusFetchStatus = FetchStatus.Loading;
      })
      .addCase(fetchBonusAction.fulfilled, (state, action) => {
        state.bonus = action.payload;
        state.bonusFetchStatus = FetchStatus.Success;
      })
      .addCase(fetchBonusAction.rejected, (state) => {
        state.bonusFetchStatus = FetchStatus.Rejected;
      })
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.accessToken = action.payload;
      });
  }
);
