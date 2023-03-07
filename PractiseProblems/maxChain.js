
export function insertInterval(existingIntervals, newInterval){
    
    //Your code will replace the placeholder return statement.
    let result = [];
    let merged = false;
    for(let i =0; i < existingIntervals.length; i++) {
        let currentS = existingIntervals[i]['start']; let currentE = existingIntervals[i]['end'];
        if(!merged) {
            let newS = newInterval[0]['start']; let newE = newInterval[0]['end'];
            if(newS >= currentS && newS <= currentE) {
                merged = true;
            } 
            else if(newE >= currentS && newE <= currentE) {
                merged = true;
            }
            else if(newS < currentS && newE > currentS) {
                merged = true;
            }
            if(merged) {
                let start = (newS >= currentS) ? currentS : newS;
                let end   = (currentE > newE) ? currentE : newE;
                result[i] = new Interval(start,end);
            }
        } else {
            let prev = result[result.length-1]; 
            let prevS = prev['start']; let prevE = prev['end'];
        
            //1. No overlap;
            if(currentS > prevE || currentE < prevS) {
                result.push(new Interval(existingIntervals[i].start, existingIntervals[i].end));
            }
            //2. currentS is in between prev interval.
            if(currentS >= prevS && currentS <= prevE) {
                let newE = (currentE > prevE) ? currentE : prevE;
                result[result.length-1] = new Interval(prevS,newE);
            }
            //3. End is in between the prev interval.
            if(currentE >= prevS && currentE <= prevE) {
                let newS = (currentS > prevS) ? prevS : currentS;
                let newE = (currentE > prevE) ? currentE : prevE;
                result[result.length-1] = new Interval(newS,newE);
            }
        }
    }
    console.log(result)
    return result;
}

export class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
        this.closed = true; // the interval is closed by default

        this.setClosed = function (closed) {
            this.closed = closed;
        };

        this.formatInterval = function () {
            return this.closed
                ? "[" + this.start + ", " + this.end + "]"
                : "(" + this.start + ", " + this.end + ")";
        };
    }
}

console.log(insertInterval([[1, 2], [3, 4], [5, 8], [9, 15]] , [2, 5]));
