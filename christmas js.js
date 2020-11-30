day = new Date();
christmas = new Date('December 25th 2020');
msPerDay = 24*60*60*1000;
timeLeft = (christmas.getTime() - day.getTime());
calculateDays = timeLeft / msPerDay;
daysLeft = Math.floor(calculateDays);
document.write("The remaining days are" + daysLeft + 'days');