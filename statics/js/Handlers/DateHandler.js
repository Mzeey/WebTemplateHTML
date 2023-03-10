export class DateHandler{
    #shortMonthNames = [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
    ]
    #MonthNames = [
        "JANAURY",
        "FEBURARY",
        "MARCH",
        "APRIL",
        "MAY",
        "JUNE",
        "JULY",
        "AUGUST",
        "SEPTEMBER",
        "OCTOBER",
        "NOVEMBER",
        "DECEMBER",
    ]

    constructor(dateString){
    }

    
    getShortMonthNames = (monthIndex) => {
        return this.#shortMonthNames[monthIndex];
    }

}