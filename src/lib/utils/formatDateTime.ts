export function formatDateTime(dateTimeString: string) {
  const date = new Date(dateTimeString);

  let hours = date.getHours();
  const minutes = date.getMinutes();

  const ampm = hours >= 12 ? "오후" : "오전";

  hours = hours % 12;
  hours = hours ? hours : 12;

  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  const formattedTime = `${ampm} ${hours}:${formattedMinutes}`;

  return formattedTime;
}
