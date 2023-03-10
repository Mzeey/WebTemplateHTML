export class TimeHandler{
    #Time = {
        Hour : "",
        Minute: "",
        Second: "",
    }
    #DefaultTimeString  = "00:00:00";

    constructor(timestring = this.#DefaultTimeString ){
        if(timestring == "") timestring = this.#DefaultTimeString;
        const splittedString = timestring.split(":");
        this.#Time.Hour = splittedString[0];
        this.#Time.Minute = splittedString[1] || "00";
        this.#Time.Second = splittedString[2] || "00";
    }

    get12Hour = ()=>{
        let flag = "AM";
        let minute = this.#Time.Minute;
        let hour = this.#Time.Hour;
        if((parseInt(hour) <= 12)){
            hour = parseInt(hour);
        }else{
            hour = parseInt(hour) - 12;
            flag = "PM";
        }

        if(hour == 12){
            flag = "PM";
        } else if(hour == 0){
            hour = 12;
            flag = "AM";
        }
        
        return `${hour}:${minute} ${flag}`;
    }

    get24Hour = () =>{
        return `${this.#Time.Hour} ${this.#Time.Minute}`;
    }
}