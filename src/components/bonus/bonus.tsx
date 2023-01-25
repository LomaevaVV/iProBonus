export default function Bonus(): JSX.Element {
  return (
    <section className="page-main__bonus bonus">
      <h2 className="visually-hidden">
        Бонусы
      </h2>
      <div className="bonus__wrapper">
        <div className="bonus__features">
          <p className="bonus__currentQuantity">300 бонусов</p>
          <div className="bonus__burning">
            <p className="bonus__goodateBurning">29.03 сгорит</p>
            <span className="bonus__burningIcon"></span>
            <p className="bonus__forBurningQuantity">250 бонусов</p>
          </div>
        </div>
        <button className="bonus__informationButton" type="button">
          <span className="visually-hidden">Открыть блок Информации</span>
        </button>
      </div>
    </section>
  );
}
