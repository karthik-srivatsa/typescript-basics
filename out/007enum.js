"use strict";
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["MON"] = 0] = "MON";
    DaysOfWeek[DaysOfWeek["TUE"] = 1] = "TUE";
    DaysOfWeek[DaysOfWeek["WED"] = 2] = "WED";
    DaysOfWeek[DaysOfWeek["THU"] = 3] = "THU";
    DaysOfWeek[DaysOfWeek["FRI"] = 4] = "FRI";
    DaysOfWeek[DaysOfWeek["SAT"] = 5] = "SAT";
    DaysOfWeek[DaysOfWeek["SUN"] = 6] = "SUN";
})(DaysOfWeek || (DaysOfWeek = {}));
;
var day;
day = DaysOfWeek.MON;
if (day === DaysOfWeek.MON) {
    console.log("you're screwed");
}
