import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { getBonus, getToken } from '../../store/selectors';
import { useEffect } from 'react';
import { fetchBonusAction } from '../../store/api-actions';
import dayjs from 'dayjs';

export default function Bonus(): JSX.Element {
  const token = useAppSelector(getToken);
  const dispatch = useAppDispatch();

  useEffect(() => {
    token !== '' && dispatch(fetchBonusAction(token));
  }, [dispatch, token]);

  const bonus = useAppSelector(getBonus);

  return (
    <section className="page-main__bonus bonus">
      <h2 className="visually-hidden">
        Бонусы
      </h2>
      <div className="bonus__wrapper">
        <div className="bonus__features">
          <p className="bonus__currentQuantity">{bonus?.currentQuantity} бонусов</p>
          <div className="bonus__burning">
            <p className="bonus__goodateBurning">{dayjs(bonus?.dateBurning).format('DD/MM')} сгорит</p>
            <span className="bonus__burningIcon"></span>
            <p className="bonus__forBurningQuantity">{bonus?.forBurningQuantity} бонусов</p>
          </div>
        </div>
        <button className="bonus__informationButton" type="button">
          <span className="visually-hidden">Открыть блок Информации</span>
        </button>
      </div>
    </section>
  );
}
