import { Bonus } from '../types/bonus';
import { State } from '../types/state';

export const getBonus = (state: State): Bonus | undefined => state.bonus;
export const getBonusFetchStatus = (state: State): string => state.bonusFetchStatus;
export const getToken = (state: State): string => state.accessToken;
