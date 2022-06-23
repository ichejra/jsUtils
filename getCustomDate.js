export const getCustomDate = (delay) => {
  const days = [
    "dimanche",
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi",
  ];
  const months = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "aout",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ];

  let date = new Date();

  date.setDate(date.getDate() + delay);

  const year = date.getFullYear();
  const weekDay = days[date.getDay()];
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month = months[date.getMonth()];
  const monthNum =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const time = `${
    date.getHours() < 10 ? `0${date.getHours()}}` : date.getHours()
  }:${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}`;
  return { weekDay, day, month, time, monthNum, year };
};
