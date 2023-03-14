function pointsPer48(ppg, mpg) {
    let myTime = ((ppg / mpg) * 48).toFixed(1);
    if(ppg == 0 && mpg == 0){
        return 0;
    }
    return Number(myTime);
}

console.log(pointsPer48(12, 20)); // 28.8
console.log(pointsPer48(10, 10)); // 48.0
console.log(pointsPer48(5, 17)); // 14.1
console.log(pointsPer48(0, 0)); // 0
console.log(pointsPer48(30.8, 34.7)); // 42.6