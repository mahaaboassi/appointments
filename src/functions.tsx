export const getDays = ()=>{
    const today = new Date();
    console.log(today);
    // Sunday = 0, Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, friday = 5, Saturday = 6 
    const todayDay = today.getDay(); // 0 (Sun) - 6 (Sat)

    // Calculate days to Friday (5)
    const diffToFriday = (5 - todayDay + 7) % 7;

    console.log("today Day", todayDay, "diffToFriday", diffToFriday);

    const diffToFridayDays = [];

    // Make a copy so we don't modify 'today' directly
    let tempDate = new Date(today);

    for (let i = 0; i <= diffToFriday; i++) {
      // Push a copy of the date for each day
      diffToFridayDays.push(new Date(tempDate));
      // Move to next day
      tempDate.setDate(tempDate.getDate() + 1);
    }
    const nextWeekDays = [];
    let nextWeekStart = new Date(tempDate);
    for (let i = 0; i <= 5; i++) {
      nextWeekDays.push(new Date(nextWeekStart));
      nextWeekStart.setDate(nextWeekStart.getDate() + 1);
      
    }
    const weekAfterNext = []
    let weekAfterNextStart = new Date(nextWeekStart)
    for (let i = 0; i <= 5; i++) {
      weekAfterNext.push(new Date(weekAfterNextStart));
      weekAfterNextStart.setDate(nextWeekStart.getDate() + 1);
    }
    return({
      thisWeek: diffToFridayDays.map(d => d.toDateString()),
      nextWeek: nextWeekDays.map(d => d.toDateString()),
      weekAfterNext: weekAfterNext.map(d => d.toDateString())
    })
     
}