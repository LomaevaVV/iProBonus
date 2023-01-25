import Bonus from '../bonus/bonus';

function App(): JSX.Element {
  return (
    <div className="page-body__wrapper">
      <header className="page-header">
        <div className="page-header__wrapper wrapper">
          <a className="page-header__logo logo" href='/'>
            Логотип
          </a>
          <button className="page-header__information" type="button">
            <span className="visually-hidden">Открыть блок Информации</span>
          </button>
        </div>
      </header>
      <main className="page-main">
        <div className="page-main__wrapper wrapper">
          <h1 className="visually-hidden">Бонусы</h1>
          <Bonus />
        </div>
      </main>
    </div>
  );
}

export default App;
