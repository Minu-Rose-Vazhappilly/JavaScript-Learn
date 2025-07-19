function getTime(){
//predefined - class - Date - used to access the date and time of your system
    //create an instance
    const time = new Date()
    let hour = time.getHours()
    let min = time.getMinutes()
    let sec = time.getSeconds()
    result.innerHTML = `${hour}:${min}:${sec}:${hour>=12?'PM':'AM'}`
    setTimeout(()=>{
        getTime()
    },1000)
}

getTime()