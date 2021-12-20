var MONTHS;
(function (MONTHS) {
    MONTHS[MONTHS["JANUARY"] = 1] = "JANUARY";
    MONTHS[MONTHS["FEBRUARY"] = 2] = "FEBRUARY";
    MONTHS[MONTHS["MARCH"] = 3] = "MARCH";
    MONTHS[MONTHS["APRIL"] = 4] = "APRIL";
    MONTHS[MONTHS["MAY"] = 5] = "MAY";
    MONTHS[MONTHS["JUNE"] = 6] = "JUNE";
    MONTHS[MONTHS["JULY"] = 7] = "JULY";
    MONTHS[MONTHS["AUGUST"] = 8] = "AUGUST";
    MONTHS[MONTHS["SEPTEMBER"] = 9] = "SEPTEMBER";
    MONTHS[MONTHS["OCTOBER"] = 10] = "OCTOBER";
    MONTHS[MONTHS["NOVEMBER"] = 11] = "NOVEMBER";
    MONTHS[MONTHS["DECEMBER"] = 12] = "DECEMBER";
})(MONTHS || (MONTHS = {}));
var thismonth = MONTHS.AUGUST;
console.log("This month number is : " + thismonth);
