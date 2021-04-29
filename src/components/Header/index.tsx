import styles from "./styles.module.scss";

export function Header() {
  const date = new Date();
  //const currentDate = new Date().toLocaleDateString().split("/")[0];

  enum Months {
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sabado",
  }

  enum Weekday {
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sabado",
  }

  const currentDate = (date) => {
    return [
      Weekday[date.getDay()],
      date.getDate(),
      Months[date.getMonth()],
    ].join(", ");
  };

  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="podcaster" />
      <p>O melhor para você ouvir, sempre</p>
      <span>{currentDate(date)}</span>
    </header>
  );
}
