var floatAge, floatDays, floatWeeks, floatMonths, floatFortnights;
     floatAge = parseFloat(prompt("How old are you? Please enter in years."));
     floatDays=parseFloat(floatAge*365.25).toFixed(2);
     floatMonths=parseFloat(floatAge*12).toFixed(2);
     floatWeeks=parseFloat(floatDays/7).toFixed(2);
     floatFortnights=(floatDays/14).toFixed(2);
  
   alert("Thanks for the info. We swear that this won't be sold to a major corporation.\nYou are:\n" +floatDays +" days old\n" +floatMonths +" months old\n" +floatWeeks +" weeks old\n...and, " +floatFortnights +" fortnights old");