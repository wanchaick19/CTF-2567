import React, { useState } from 'react';
import { Lv1GetEncryptText } from '../services/https';
import "./Lee.css"
const Level1: React.FC = () => {
    const [answer, setAnswer] = useState<string>("");
    const getLv1EncryptedText = async () => {
        await Lv1GetEncryptText();
    }

    const handleGetEncryptedText = async () => {
        getLv1EncryptedText();
    }

    return (

        <>
            <div className='bg'>
                <div className='box'>
                    <h1 className='str'>Level 01</h1><br />
                </div>
                <div className='btn_bg'><button onClick={handleGetEncryptedText} className='btn'>U can find encrypted text Here! using F12</button></div>


                <div className='box'>
                    <p>ชื่อ <strong className='str'>16 อักษร</strong>เป็นกุญแจสู่คำตอบ<br />4 คือเวลาทั้งหมด (ลงท้ายด้วย 7)</p>
                </div>

                <div className='btn_bg'>
                    <a href="https://www.youtube.com/watch?v=poa_QBvtIBA" target='_blank'><button className='btn'>key</button></a>
                </div>

                <div className='btn_bg'>
                    <a href="https://anycript.com/crypto" target='_black'><button className='btn'>Decrypt</button></a>
                </div>
                <div className='box'>
                    <input type="text"
                        value={answer}
                        placeholder='Insert Your Ans Here'
                        onChange={(e) => setAnswer(e.target.value)}
                    />
                    <button >Submit</button>
                </div></div>

        </>
    );
};

export default Level1

