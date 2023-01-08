const dateTime = new Date();

export const localDate = dateTime.toLocaleDateString();
export const localTime = dateTime.toLocaleTimeString();
export const localDateTime = dateTime.toLocaleString();

export const toLocalDate = (iSOStringOrDate: string | Date) => {
  if (typeof iSOStringOrDate === "string") {
    const dateTimetoString = new Date(iSOStringOrDate);
    return dateTimetoString.toLocaleDateString();
  } else {
    return iSOStringOrDate.toLocaleDateString();
  }
};
