/* suppose we have a collection on intervals. Now we have to sort it by start time and then end time */
var intervals = [{start: 1, end: 3}, {start: 2, end: 6}, {start: 4, end: 5}, {start: 2, end: 4}];

intervals.sort((a, b) => {
    if (a.start > b.start) return 1;
    else if (a.start < b.start) return -1;
    else {
        if (a.end > b.end) return 1;
        else if (a.end < b.end) return -1;
        else return 0;
    }
});

console.log(intervals);
// print: [{"start":1,"end":3}, {"start":2,"end":4}, {"start":2,"end":6}, {"start":4,"end":5}]
