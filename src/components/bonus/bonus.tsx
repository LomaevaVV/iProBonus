export default function Bonus(): JSX.Element {
  return (
    <section className="page-main__bonus bonus">
      <h2 className="visually-hidden">
            Ваши бонусы
      </h2>
      <p className="bonus__currentQuantity">300 бонусов</p>
      <p className="bonus__goodateBurning">29.03 сгорит</p>
      <p className="bonus__forBurningQuantity">250 бонусов</p>
      <button className="bonus__information" type="button">
        <span className="visually-hidden">Открыть блок Информации</span>
      </button>
    </section>
  );
}
