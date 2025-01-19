
export const mergeDateAndTime = (date: string, time: string): Date => {
  const formatedDate = new Date(date);
  const formatedTime = new Date(time);
  formatedDate.setHours(formatedTime.getUTCHours());
  formatedDate.setMinutes(formatedTime.getUTCMinutes());
  formatedDate.setSeconds(formatedTime.getUTCSeconds());
  formatedDate.setMilliseconds(formatedTime.getUTCMilliseconds());
  return formatedDate;
}
