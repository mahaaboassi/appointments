export const getWeeksFromFridayToThursday = () => {
   const  date = new Date()
   
  const day = date.getDay(); // Sunday=0, Monday=1, ..., Saturday=6
  const diffToFriday = (5 - day + 7) % 7;
  const now = new Date();
  console.log(day,"diffToFriday",diffToFriday);
    console.log("Local time:", now.toString());
    console.log("Day number:", now.getDay());

  // This Friday
  const thisFriday = new Date(date);
  console.log("thisFriday", thisFriday);
  
  thisFriday.setDate(date.getDate() + diffToFriday - (diffToFriday === 0 && day < 5 ? 7 : 0));

  // This Thursday (6 days after Friday)
  const thisThursday = new Date(thisFriday);
  thisThursday.setDate(thisFriday.getDate() + 6);

  // Next Friday (7 days after this Friday)
  const nextFriday = new Date(thisFriday);
  nextFriday.setDate(thisFriday.getDate() + 7);

  // Next Thursday (6 days after next Friday)
  const nextThursday = new Date(nextFriday);
  nextThursday.setDate(nextFriday.getDate() + 6);

  return {
    thisWeek: { start: thisFriday, end: thisThursday },
    nextWeek: { start: nextFriday, end: nextThursday },
  };
};

export const getDaysBetween = (start:any, end:any) => {
  const days = [];
  const current = new Date(start);
  current.setHours(0, 0, 0, 0);
  const endDate = new Date(end);
  endDate.setHours(0, 0, 0, 0);

  while (current <= endDate) {
    days.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }
  return days;
};

// ✅ Separate logs — fixed to stop on Thursday
export const getSeparatedWeeks = () => {
  const date = new Date()
  const { thisWeek, nextWeek } = getWeeksFromFridayToThursday(date);
  const today = new Date(date);
getWeeksFromFridayToThursday(date)
  // 🟢 Remaining days of THIS week only (today → this Thursday)
  const remainingThisWeek =
    today <= thisWeek.end
      ? getDaysBetween(today, thisWeek.end)
      : []; // if today is already after Thursday, nothing remains this week

  // 🔵 FULL NEXT WEEK (Friday → Thursday)
  const fullNextWeek = getDaysBetween(nextWeek.start, nextWeek.end);

  console.log("🟢 Remaining This Week:");
  remainingThisWeek.forEach((d) => console.log(d.toDateString()));

  console.log("🔵 Full Next Week:");
  fullNextWeek.forEach((d) => console.log(d.toDateString()));

  return { remainingThisWeek, fullNextWeek };
};


