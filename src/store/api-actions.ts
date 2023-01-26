import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { toast } from 'react-toastify';
import { ACCESS_KEY, APIRoute } from '../const';
import { Bonus } from '../types/bonus';
import { AppDispatch, State } from '../types/state';
import { AuthData } from '../types/auth-data';
import { BonusResponseData, TokenResponseData } from '../types/response-data';


export const fetchBonusAction = createAsyncThunk<Bonus, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchBonus',
  async (token, {extra: api}) => {
    try {
      const {data: bonus} = await api.get<BonusResponseData>(`${APIRoute.IBonus}/${token}`,
        {headers: {
          'AccessKey': ACCESS_KEY,
        }});

      return bonus?.data;
    } catch(e) {
      toast.error('Не удается загрузить бонусы', {
        position: toast.POSITION.TOP_CENTER,
      });

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
      const {data: accessToken} = await api.post<TokenResponseData>(APIRoute.Login,
        {
          'idClient': DefaultAuthData.idClient,
          'accessToken': DefaultAuthData.accessToken,
          'paramName': DefaultAuthData.paramName,
          'paramValue': DefaultAuthData.paramValue,
          'latitude': DefaultAuthData.latitude,
          'longitude': DefaultAuthData.longitude,
          'sourceQuery': DefaultAuthData.sourceQuery
        },
        {headers: {
          'AccessKey': ACCESS_KEY,
        }});

      return accessToken.accessToken;
    } catch(e) {
      toast.error('Ошибка авторизации', {
        position: toast.POSITION.TOP_CENTER,
      });

      throw e;
    }
  },
);
