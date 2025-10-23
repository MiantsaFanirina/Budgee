export const formatDateWithTime = (dateInput: string | Date) => {
  const date = new Date(dateInput);

  // Day
  const day = date.getDate();

  // Month name
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const month = monthNames[date.getMonth()];

  // Year
  const year = date.getFullYear();

  // Hours and minutes in 12-hour format
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;

  return `${hours}:${minutes} ${ampm} - ${day} ${month} ${year}`;
};
