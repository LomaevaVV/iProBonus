import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { Bonus } from '../types/bonus';
import { AppDispatch, State } from '../types/state';
import { AuthData } from '../types/auth-data';


export const fetchBonusAction = createAsyncThunk<Bonus, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchBonus',
  async (_arg, {extra: api}) => {
    try {
      const {data} = await api.get<Bonus>(APIRoute.IBonus);

      return data;
    } catch(e) {
      window.console.log('Ошибка загрузки бонусов');

      throw e;
    }
  });

export const checkAuthAction = createAsyncThunk<string, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async (DefaultAuthData, {extra: api}) => {
    try {
      const {data: accessToken} = await api.post<string>(APIRoute.Login,
        { body: {
          'idClient': DefaultAuthData.idClient,
          'accessToken': DefaultAuthData.accessToken,
          'paramName': DefaultAuthData.paramName,
          'paramValue': DefaultAuthData.paramValue,
          'latitude': DefaultAuthData.latitude,
          'longitude': DefaultAuthData.longitude,
          'sourceQuery': DefaultAuthData.sourceQuery
        }},
        {headers: {
          'AccessKey': '891cf53c-01fc-4d74-a14c-592668b7a03c',
        }});

      return accessToken;
    } catch(e) {
      window.console.log('Ошибка авторизации');

      throw e;
    }
  },
);
