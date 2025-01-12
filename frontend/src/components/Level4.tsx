import React, { useState } from 'react';
import { CheckAjanParin } from "../services/https";
import { message } from "antd";
import "./Arm.css"

const Level4: React.FC = () => {
    const [answer, setAnswer] = useState<string>("");
    const [hint, setHint] = useState<string>(""); // สถานะสำหรับแสดง Hint
    const [messageApi, contextHolder] = message.useMessage();

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

    // ฟังก์ชันสำหรับจัดการปุ่ม Hint
    const handleHintClick = (hintNumber: number) => {
        switch (hintNumber) {
            case 1:
                setHint('ลองจิ้มอาจารย์ปริญญ์ดูสิ อาจจะเกิดอะไรขึ้นก็ได้นะ ;^;');
                break;
            case 2:
                setHint('คุณอาจจะต้องดู "Network" ของอาจารย์ปริญญ์สักหน่อย อาจจะได้อะไรก็ได้นะ :)');
                break;
            case 3:
                setHint("บิตคอยน์ใช้อัลกอริทึมอะไรกันน้า แค่สงสัยน่ะ ไม่เกี่ยวกับคำตอบหรอก ห้ามค้นหานะ!!!!!!");
                break;
            default:
                setHint("");
                break;
        }
    };

    return (
        <>
            {contextHolder}
            <div className='Level3'>
                <h1 className='Level5'>LEVEL4</h1>
            </div>
        </>
    );
};

export default Level4;