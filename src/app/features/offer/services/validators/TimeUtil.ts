export const mergeDateAndTime = (
  date: string,
  time: string): Date => {
  const formatedDate = new Date(date);
  const formatedTime = new Date(time);
  formatedDate.setHours(formatedTime.getHours());
  formatedDate.setMinutes(formatedTime.getMinutes());
  formatedDate.setSeconds(0);
  return formatedDate;

}
