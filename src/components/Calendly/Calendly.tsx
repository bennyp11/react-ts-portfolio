import React from "react";
import { InlineWidget } from "react-calendly";
import './Calendly.css';


export function Calendly (){
    return (
        <div className="calendly"><InlineWidget url="https://calendly.com/ben-r-pollock" />
      </div>
    ); 
}