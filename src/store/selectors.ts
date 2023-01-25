import { Bonus } from '../types/bonus';
import { State } from '../types/state';

export const getBonus = (state: State): Bonus | undefined => state.bonus;
export const getOffersFetchStatus = (state: State): string => state.bonusFetchStatus;
