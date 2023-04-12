import React from 'react';
import Answers from './Answers'
import './EightBall.css'
import { useState } from "react";

const EightBall = () => {
    const [answer, setAnswer] = useState('Think of a Question')
    const [color, setColor] = useState('black')
    const handleClick = () => {
        let randomAnswer =  Answers[Math.floor(Math.random()*Answers.length)];
        setColor(randomAnswer.color);
        setAnswer(randomAnswer.msg);
    }
    return (
    <div className='EightBall' onClick={handleClick} style={{backgroundColor: color}}> 
        <div className='EightBall-Answers'>
            {answer}
        </div>
    </div>)
}

export default EightBall;