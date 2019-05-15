// #1 addTimeFunction
function intDiv(x, y) {
    var result=0;
    while(x>y){
        x = x - y;
        result++;
    }
    return result;
}

function showTime(d,h,m) {
    var sh, sm, sd, r;
    if(h<10){
        sh = "0" + h;
    } else {
        sh = h;
    }
    if(m<10){
        sm = "0" + m;
    } else {
        sm = m;
    }
    r = sh + ":" + sm;
    if(d>0) {
        r = d + "d " + r;
    }
    return r;
}

var addTime = function(hours, mins, add) {
        var days = 0;
        var tmp = 0;
        mins+=add;
        if(mins>60){
            tmp = intDiv(mins, 60);
            hours+=tmp;
            mins-=tmp*60;
        }
        while(hours>23) {
            hours-=24;
            days++;
        }
        return showTime(days, hours, mins);
};

console.info(addTime(23,32,7000));

