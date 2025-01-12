import React, { useState } from 'react';
import { AjanParin, CheckAjanParin } from "../services/https";
import { message } from "antd";
import "./Arm.css"

const Level3: React.FC = () => {

    const [answer, setAnswer] = useState<string>("");
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
            messageApi.success("correct!!!!");
        }
        else {
            messageApi.error("wrong!!!!");
        }
    };

    return (
        <>
            {contextHolder}
            <div className='Level3'>
                <h1 className='Level5'>LEVEL3</h1>
                <div style={{ textAlign: 'center', fontSize: '30px', color: 'var(--P1)' }}>ENG23 3053 เครือข่ายคอมพิวเตอร์</div>
                <div className='ajanparinPicture'>
                    <img
                        key={"ajanparin"}
                        src={
                            "https://beta.sut.ac.th/ie-cpe/wp-content/uploads/sites/91/2023/07/Parin-1-270x450.png"
                        }
                        onClick={handleAjanParinClick}
                        alt="อาจารย์ ปริญญ์"
                    />
                    <div>อาจารย์ผู้สอน: อาจารย์ ดร.ปริญญ์ ศรเลิศล้ำวาณิช</div>

                    {/* ลิงก์เพิ่มเติม */}
                    <div className="link-section">
                        <a
                            href="https://cryptotools.dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="external-link"
                        >
                            ไปที่ CryptoTools.dev
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
                </div>

            </div>
        </>
    );
};

export default Level3;