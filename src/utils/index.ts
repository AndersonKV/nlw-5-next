export function convertDurationToTimeString(duration: number) {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = duration % 60;

  const result = [hours, minutes, seconds]
    .map((unit) => String(unit).padStart(2, "0"))
    .join(":");

  return result;
}
enum Months {
  "01" = "Jan",
  "02" = "Fev",
  "03" = "Mar",
  "04" = "Abr",
  "05" = "Mai",
  "06" = "Jun",
  "07" = "Jul",
  "08" = "Ago",
  "09" = "Set",
  "10" = "Out",
  "11" = "Nov",
  "12" = "Dez",
}

export const currentDate = (date) => {
  const separete = date?.split(" ")[0].split("-")[1];
  const year = date.split(" ")[0].split("-")[0];
  const month = separete[0]?.split("-")[1];
  const day = date.split("-")[2].split(" ")[0]; // + date[0].split("-").charAt(3);
  return `${day}, ${Months[separete]}, ${year}`;
};
