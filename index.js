var isValidTime;
isValidTime = function (hours, mins) {
    if (hours <= 23 && hours >= 0 && mins >= 0 && mins <= 59) {
        return true;
    } else {
        return false;
    }
};