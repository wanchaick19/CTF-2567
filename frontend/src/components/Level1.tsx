import { useState } from 'react';
import { CheckFish } from '../services/https';
import "./Lee.css"
const Level1: React.FC = () => {
    const [answer, setAns] = useState<string>("");
return (

    <>
        <div className='box'>
            <h1 className='str'>Level 01</h1><br />
        </div>

        <div className='box'>
            <p className='hidden_wall'>NVXOUExP2TTnlwuMySAFBQ==</p>
        </div>

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
            <form action="http://localhost:8000/submit" method='POST'>
                <p>Decrypted Text </p>
                <input type="text" />
            </form>
        </div>
    </>
);
};

export default Level1

