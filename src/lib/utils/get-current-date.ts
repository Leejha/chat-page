export function getCurrentDate() {
  const date = new Date();

  const month = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();

  return `${year}년 ${month}월 ${day}일 `;
}
