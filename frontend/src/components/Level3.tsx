import React, { useState } from 'react';
import { AjanParin, CheckAjanParin } from "../services/https";
import { message } from "antd";
import "./Arm.css"

const Level3: React.FC = () => {
    const [answer, setAnswer] = useState<string>("");
    const [hint, setHint] = useState<string>(""); // สถานะสำหรับแสดง Hint
    const [messageApi, contextHolder] = message.useMessage();

    const getAjaparin = async () => {
        await AjanParin();
    };

    const handleAjanParinClick = async () => {
        getAjaparin();
    };

    const handleAnswerSubmit = async () => {
        const AnswerToSend = {
            Answer: answer
        }
        const res = await CheckAjanParin(AnswerToSend);
        if (res.data.message === "correct") {
            messageApi.success("รู้ได้ไงว้า อย่างเจ๋ง o_o");
        }
        else {
            messageApi.error("ม่ายช่าย ม่ายช่าย");
        }
    };

    const handleHintClick = (hintNumber: number) => {
        let newHint = "";
        switch (hintNumber) {
            case 1:
                newHint = 'ลองจิ้มอาจารย์ปริญญ์ดูสิ อาจจะเกิดอะไรขึ้นก็ได้นะ ;^;';
                break;
            case 2:
                newHint = 'คุณอาจจะต้องดู "Network" ของอาจารย์ปริญญ์สักหน่อย อาจจะได้อะไรก็ได้นะ :)';
                break;
            case 3:
                newHint = "บิตคอยน์ใช้อัลกอริทึมอะไรกันน้า แค่สงสัยน่ะ ไม่เกี่ยวกับคำตอบหรอก ห้ามค้นหานะ!!!!!!";
                break;
            default:
                newHint = "";
                break;
        }
    
        // ถ้า Hint ที่กดตรงกับ Hint ปัจจุบัน ให้ซ่อน Hint
        if (hint === newHint) {
            setHint("");
        } else {
            setHint(newHint);
        }
    };
    

    return (
        <>
            {contextHolder}
            <div className='Level3'>
                <h1 className='Level5'>LEVEL3</h1>
                <div style={{ textAlign: 'center', fontSize: '50px', color: 'var(--P1)' }}>
                    ENG23 3053 เครือข่ายคอมพิวเตอร์(Computer <span style={{ textDecoration: 'underline' }}>Network</span>)
                </div>
                <div className='ajanparinPicture'>
                    <img
                        key={"ajanparin"}
                        src={
                            "https://beta.sut.ac.th/ie-cpe/wp-content/uploads/sites/91/2023/07/Parin-1-270x450.png"
                        }
                        onClick={handleAjanParinClick}
                        alt="อาจารย์ ปริญญ์"
                    />
                    <div style={{ textAlign: 'center', fontSize: '20px', color: 'var(--P1)' }}>อาจารย์ผู้สอน: อาจารย์ ดร.ปริญญ์ ศรเลิศล้ำวาณิช</div>

                    {/* ลิงก์เพิ่มเติม */}
                    <div className="link-section">
                        <a
                            href="https://cryptotools.dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="external-link"
                            style={{ fontSize: "18px" }}
                        >
                            <span style={{ textDecoration: 'underline' }}>คลิ๊กดูสิอาจจะมีประโยชน์ก็ได้นะ!!!!</span>
                        </a>
                    </div>

                    {/* ส่วนสำหรับกรอกคำตอบ */}
                    <div className="answer-section">
                        <input
                            type="text"
                            placeholder="กรอกคำตอบของคุณ"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            className="answer-input"
                        />
                        <button onClick={handleAnswerSubmit} className="submit-button">
                            ยืนยันคำตอบ
                        </button>
                    </div>

                    {/* ปุ่ม Hint */}
                    <div className="hint-section">
                        <button onClick={() => handleHintClick(1)} className="hint-button">Hint 1</button>
                        <button onClick={() => handleHintClick(2)} className="hint-button">Hint 2</button>
                        <button onClick={() => handleHintClick(3)} className="hint-button">Hint 3</button>
                    </div>

                    {/* แสดง Hint */}
                    {hint && <div className="hint-display">{hint}</div>}
                </div>
            </div>
        </>
    );
};

export default Level3;
