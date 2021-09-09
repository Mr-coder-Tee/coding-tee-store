import React, { Component,useState,useRef,useEffect } from 'react';




function SaleCountDown() {
    // ------hooks------
    let interval=useRef();
    const [day,setDay]=useState('00');
    const [hour,setHour]=useState('00');
    const [minute,setMinute]=useState('00');
    const [second,setSecond]=useState('00');

    const startTime=()=>{
        const newYear=new Date('September 15,2021 23:59:59').getTime();
        // December 31,2021 23:59:59

        interval=setInterval(()=>{
            const today=new Date().getTime();
            const distance=newYear-today;
            /*
            Stack overflow time calculations
            Time calculations: https://stackoverflow.com/questions/10804042/calculate-time-difference-with-javascript
            */

            const days=Math.floor(distance/(1000*60*60*24));
            const hours=Math.floor((distance%(1000*60*60*24)/(1000*60*60)));
            const minutes=Math.floor((distance%(1000*60*60))/(1000*60));
            const seconds=Math.floor((distance %(1000*60))/1000);

            if(distance<0){
                clearInterval(interval.current);
            }else{
                setDay(days);
                setHour(hours);
                setMinute(minutes);
                setSecond(seconds);
            }


        },1000);
    }
    
    useEffect(()=>{
        startTime();
        return ()=>{
            clearInterval(interval.current);
        };
    });

    const [savedDate,saveDate]=useState([]);

    const setSavedDate=()=>{
        saveDate([...savedDate,{
            dayId:saveDate.length,
            myday: day+" : "+ hour +" : "+minute+" : "+second
        }])
    }


  return (
      <div className="sale">
        <div className="countdowncard">
            <div className="header">
                <h3>Count Down To Grand Opening </h3>
                <p>September 15,2021 <br /> We are some time away from opeing in the mean time check out our collection.</p>
            </div>
            <div className="timer-container">

                <div className="timer-element">
                    <div className="timebx">
                        <span className="time">{day}</span>
                    </div>
                    <div className="timetype">
                        <small>Days</small>
                    </div>
                </div>
                <div className="mark"><span>:</span></div>
                <div className="timer-element">
                    <div className="timebx">
                        <span className="time">{hour}</span>
                    </div>
                    <div className="timetype">
                        <small>hours</small>
                    </div>
                </div>

                <div className="mark"><span>:</span></div>
                
                <div className="timer-element">
                    <div className="timebx">
                        <span className="time">{minute}</span>
                    </div>
                    <div className="timetype">
                        <small>minutes</small>
                    </div>
                </div>

                <div className="mark"><span>:</span></div>

                <div className="timer-element">
                    <div className="timebx">
                        <span className="time">{second}</span>
                    </div>
                    <div className="timetype">
                        <small>Seconds</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default SaleCountDown;