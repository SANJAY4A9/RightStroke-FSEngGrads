var weekday;
(function (weekday) {
    weekday[weekday["Monday"] = 1] = "Monday";
    weekday[weekday["Tuesday"] = 2] = "Tuesday";
    weekday[weekday["Wednesday"] = 3] = "Wednesday";
    weekday[weekday["Thursday"] = 4] = "Thursday";
    weekday[weekday["Friday"] = 5] = "Friday";
    weekday[weekday["Saturday"] = 6] = "Saturday";
    weekday[weekday["Sunday"] = 7] = "Sunday";
})(weekday || (weekday = {}));
for (var d = 1; d <= 7; d++) {
    console.log('Day ' + d + ' of the week is ' + weekday[d]);
}
