import React, { useState } from 'react';
import { Lv1GetEncryptText ,Lv1CheckAns} from '../services/https';
import "./Lee.css"
import { message } from 'antd';
const Level1: React.FC = () => {
    const [answer, setAnswer] = useState<string>("");
    const [messageApi, contextHolder] = message.useMessage();

    const getLv1EncryptedText = async () => {
        await Lv1GetEncryptText();
    }

    const handleGetEncryptedText = async () => {
        getLv1EncryptedText();
    }

    const handleAnsSub = async ()=>{
        const ansToSend = {
            Answer:answer
        };
        const res = await Lv1CheckAns(ansToSend);
        if(res.data.message === "C"){
            messageApi.success("Praying for you 🕯 Oh Great Mila 💗");
            localStorage.setItem("Level-1", "ture");
        }else{
            messageApi.error("Incorrect");
        }
        
    }

    return (

        <>
            {contextHolder}
            <div className='bg'>
                <div className='box'>
                    <h1 className='str'>Level 01</h1><br />
                </div>
                {/*Praying for you 🕯 Oh Great Mila 💗*/}
                
                <p className='hidden_wall'>using F12</p>
                <div className='btn_bg'><button onClick={handleGetEncryptedText} className='btn'><p className='btn_text'>You can find <b className='enText_style'>encrypted</b> text Here! </p> </button></div>
                <div className='box'>
                    <p>ชื่อ <strong className='str'>16 อักษร</strong>เป็นกุญแจสู่คำตอบ<br />IV คือเวลาทั้งหมด (ลงท้ายด้วย 7)</p>
                </div>
                
                <div className='btn_bg'>
                    <a href="https://www.youtube.com/watch?v=poa_QBvtIBA" target='_blank'><button className='btn'><p className='btn_text'>key</p></button></a>
                    <a href="https://anycript.com/crypto" target='_black'><button className='btn'><p className='btn_text'>Decrypt</p></button></a>
                    <button className='btn_submit' onClick={handleAnsSub}><b className='btn_text_submit'>SUBMIT</b></button>
                    <a href="https://www.youtube.com/watch?v=RN3QW9SVnds" target='_blank' ><button className='btn_skip'><p className='btn_text_skip'><b>SKIP</b></p></button></a>
                    
                </div>
                
                <div className='box'>
                    <input type="text"
                        value={answer}
                        placeholder='DECRYPTED TEXT'
                        onChange={(e) => setAnswer(e.target.value)}
                        className='input-text-sub'
                    />
                    
                </div></div>
        </>
    );
};

export default Level1

