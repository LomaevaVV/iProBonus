
import { AuthData } from './types/auth-data';

export enum AppRoute {
  Main = '/'
}

export const APIRoute = {
  Login: '/api/v3/clients/accesstoken',
  IBonus: '/api/v3/ibonus/generalinfo/'
} as const;

export const DefaultAuthData: AuthData = {
  'idClient': '2c44d8c2-c89a-472e-aab3-9a8a29142315',
  'accessToken': '',
  'paramName': 'device',
  'paramValue': '7db72635-fd0a-46b9-813b-1627e3aa02ea',
  'latitude': 0,
  'longitude': 0,
  'sourceQuery': 0,
};

export const enum FetchStatus {
  Idle = 'IDLE',
  Loading = 'LOADING',
  Success = 'SUCCESS',
  Rejected = 'REJECTED',
}


