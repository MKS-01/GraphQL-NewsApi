export const FormateDateTime = (dateTime, format) => {
  const d = new Date(dateTime);

  switch (format) {
    case "yyyy-mm-dd hh-mm-ss":
      const date = d.toISOString().split("T")[0];
      const time = d.toTimeString().split(" ")[0];
      return `${date} ${time}`;

    default:
      return String(d);
  }
};
