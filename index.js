function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();

function mondayWork(activity1 = "go to the office") {
    return `This Monday, I will ${activity1}.`;
}
mondayWork();

function wrapAdjective (flair = "*") {
    return function (default1 = "special") {
        return `You are ${flair}${default1}${flair}!`
    }
};

wrapAdjective();
