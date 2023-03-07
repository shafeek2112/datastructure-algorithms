/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    
    let result = [];
    result.push(intervals[0]);
    let lastInterval;
    let lastIntervalStartTime; let lastIntervalEndTime;
    let currentIntervalStartTime; let currentIntervalEndTime;
    for(let i = 1; i < intervals.length; i++) {
        lastInterval        = result[result.length -1];
        lastIntervalStartTime   = lastInterval[0]; lastIntervalEndTime     = lastInterval[1];
        currentIntervalStartTime=  intervals[i][0]; currentIntervalEndTime  =  intervals[i][1];

        //1. Current start > prev end OR  Current end < prev start =  No overlap
        if((currentIntervalStartTime > lastIntervalEndTime ) || (currentIntervalEndTime < lastIntervalStartTime)) {
            result.push(intervals[i]);
        } 
        //2. Current start time is in between Prev start & End time // curStart >= prevStart & curStart <= prevEnd
        else if(currentIntervalStartTime >= lastIntervalStartTime && currentIntervalStartTime <= lastIntervalEndTime) {
            let newEnd = (lastIntervalEndTime > currentIntervalEndTime) ? lastIntervalEndTime : currentIntervalEndTime;
            result[result.length -1] = [lastIntervalStartTime,newEnd];
        }
        //3. Current start time before than prevStart & current End is in between prevstart & end. //  curEnd >= prevStart & curEnd <= prevEnd
        else if(currentIntervalEndTime >= lastIntervalStartTime && currentIntervalEndTime <= lastIntervalEndTime) {
            let newStart = (currentIntervalStartTime < lastIntervalStartTime) ? currentIntervalStartTime : lastIntervalStartTime;
            result[result.length -1] = [newStart,lastIntervalEndTime];
        }
        //4. 
        else if(currentIntervalStartTime < lastIntervalStartTime && currentIntervalEndTime > lastIntervalStartTime) {
            let newEnd = (lastIntervalEndTime > currentIntervalEndTime) ? lastIntervalEndTime : currentIntervalEndTime;
            result[result.length -1] = [currentIntervalStartTime,newEnd];
        }
    }
    return result;
};

// console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
// console.log(merge([[1,4],[4,5]]));
// console.log(merge([[1,4],[3,8]]));
// console.log(merge([[1,9],[3,8]]));
// console.log(merge([[1,4],[0,4]]));
// console.log(merge([[1,4],[0,5]]));
console.log(merge([[1,3],[8,10],[2,6]]));
/* 
    {
        1 : [1,3]
        8 : 
    }

*/