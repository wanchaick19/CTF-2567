import React, { useState } from 'react';
import {  CheckFlagLevel4, GetKeyLevel4 } from "../services/https";
import { message } from "antd";
import { Button, Modal } from 'antd';
import "./Arm.css"

const Level4: React.FC = () => {
    const [answer, setAnswer] = useState<string>("");
    const [hint, setHint] = useState<string>(""); // สถานะสำหรับแสดง Hint
    const [messageApi, contextHolder] = message.useMessage();
    const [Massage, setMessage] = useState(true);
    const [finish, setFinish] = useState(false);

    const pass = localStorage.getItem("Level-4");

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };


    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };


    const private1Click = async () => {
        messageApi.success("หนมน้า หนมน้า");
        setTimeout(() => window.location.href = 'https://www.youtube.com/watch?v=f8TGg0fMiU0', 2000);
    };

    const private2Click = async () => {
        messageApi.success("ยังไม่เข็ดหรอ");
        setTimeout(() => window.location.href = 'https://www.youtube.com/watch?v=f8TGg0fMiU0', 2000);
    };

    const handleAnswerSubmit = async () => {
        const AnswerToSend = {
            Answer: answer
        }
        const res = await CheckFlagLevel4(AnswerToSend);
        if (res.data.message === "correct") {
            messageApi.success("เก่งมาดดด ;^;");
            localStorage.setItem("Level-4", "ture");
            setFinish(true);
        }
        else {
            messageApi.error("ม่ายช่าย ม่ายช่าย");
        }
    };

    const handleHintClick = (hintNumber: number) => {
        let newHint = "";
        switch (hintNumber) {
            case 1:
                newHint = 'กุญแจอยู่ใน "ที่เกิดเหตุ"';
                break;
            case 2:
                newHint = 'กุญแจนั้นอยู่ใกล้คุณมากกว่าที่คิด';
                break;
            case 3:
                newHint = "ใช้ RSA Decryption สิครับสุดหล่อต่อยตึง";
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

    const SwitchPage = async () => {
        if(Massage) {
            GetKeyLevel4();
        }
        setMessage(!Massage)
    };

    

    return (
        <>
            {contextHolder}
            <div className='Level4'>
                <h1 className='Level5'>LEVEL4</h1>
                <div style={{ textAlign: 'center', fontSize: '50px', color: 'var(--P1)', marginBottom: "20px" }}>
                    <span 
                    style={{ textDecoration: 'underline' }}>
                        คุณคือ เจ้าหน้าที่
                    </span>
                </div>
                <div style={{ textAlign: 'center', fontSize: '26px', color: 'var(--P1)' , margin: '0 10%' }}>
                เจ้าหน้าที่สามารถจับกุมแฮกเกอร์ที่พยายามขโมยข้อมูลลับของบริษัทได้สำเร็จ และพบข้อความที่ถูกเข้ารหัสไว้ อย่างไรก็ตาม
                กุญแจสำหรับถอดรหัสข้อความ <span onClick={private1Click}
                    style={{ textDecoration: 'underline' ,cursor: 'pointer' }}> key
                    </span> ถูกแฮกเกอร์ซ่อนเอาไว้ในที่เกิดเหตุ หน้าที่ของคุณคือค้นหากุญแจลับ <span onClick={private2Click}
                    style={{ textDecoration: 'underline' ,cursor: 'pointer'  }}> key
                    </span> ที่ซ่อนอยู่ให้พบ และนำมาใช้ถอดรหัสข้อความ เพื่อเปิดเผยข้อมูลสำคัญก่อนที่มันจะสายเกินไป!
                </div>

                <div className='fourarm' style={{marginTop:"20px"}}>
                    {Massage ?
                        <>
                            <img
                            key={"doc"}
                            src={
                                "https://i.redd.it/jbcj0uqbihg41.jpg"
                            }
                        />
                            <div style={{ textAlign: 'center' , marginBottom: "20px",marginTop: "20px"}}>
                                <Button type="primary" onClick={showModal}>
                                    ดูข้อความของ Hacker
                                </Button>
                                <Modal
                                    title="รายละเอียดเอกสาร"
                                    open={isModalOpen}
                                    onOk={handleOk}
                                    onCancel={handleCancel}
                                    okText="Close"
                                    cancelButtonProps={{ style: { display: 'none' } }}
                                >
                                    <div style={{ fontSize: '16px'}}>
                                    <p>
                                        <strong>Message:</strong>{' '}
                                        NVSYdrONoljra8kPhWvm8Stkm8Eq8Dc5U2eFoQbI8/0Fw7QCHei+0VUm1UN3BDQCHYUSA1QlhZBx4QruVUokQQ==
                                    </p>
                                    <button
                                        style={{
                                            marginTop: '10px',
                                            padding: '5px 10px',
                                            backgroundColor: '#4CAF50',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer',
                                        }}
                                        onClick={() => {
                                            const textToCopy =
                                                'NVSYdrONoljra8kPhWvm8Stkm8Eq8Dc5U2eFoQbI8/0Fw7QCHei+0VUm1UN3BDQCHYUSA1QlhZBx4QruVUokQQ==';
                                            navigator.clipboard.writeText(textToCopy).then(() => {
                                                messageApi.success("คัดลอกข้อความเรียบร้อยคัฟ")
                                            });
                                        }}
                                    >
                                        คัดลอกข้อความ
                                    </button>
                                    </div>
                                </Modal>
                                </div>
                        </>
                        :
                        <>
                            <img
                            key={"computer"}
                            src={
                                "https://th.bing.com/th/id/R.2219031af0f653f24985abe5476bcddd?rik=CJwRvsoEDHBi6g&pid=ImgRaw&r=0"
                            }
                        />
                            <div style={{ textAlign: 'center', fontSize: '20px', color: 'var(--P1)' , marginBottom: "20px"}}><a
                                    href="https://docs.google.com/spreadsheets/d/1bgoPk8EGmb1w4GpHaHRChDWa5aunPGDtq6FY24RXOvc/edit?gid=0#gid=0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="external-link"
                                    style={{ fontSize: "18px" }}
                                >
                                    <span style={{ textDecoration: 'underline' }}>คอมพิวเตอร์ที่เปิดอะไรน่าสงสัยเอาไว้</span>
                                </a>
                                </div>
                        </>
                    }
                </div>

                <div>
                    <p className='SwitchSPhone' onClick={() => SwitchPage()}>{Massage ? 'ที่เกิดเหตุ' : 'แฮกเกอร์'}</p>
                </div>

                <div className='fourarm'>

                    {/* ลิงก์เพิ่มเติม */}
                    <div className="link-section">
                        <a
                            href="https://www.javainuse.com/rsagenerator"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="external-link"
                            style={{ fontSize: "18px" }}
                        >
                            <span style={{ textDecoration: 'underline' }}>เว็บไซต์สำหรับ Decryption</span>
                        </a>
                    </div>

                    {/* ส่วนสำหรับกรอกคำตอบ */}
                        <div className="answer-section">
                            <label>คำตอบ: </label>
                            <input
                                type="text"
                                placeholder="กรอกคำตอบของคุณ"
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                                className="answer-input"
                            />
                            <button
                                onClick={handleAnswerSubmit}
                                className="submit-button"
                                style={{ marginTop: "20px" }}
                            >
                                ส่งคำตอบ
                            </button>
                        </div>
                        

                { (finish || pass )?
                    (<div>
                        <div style={{ textAlign: 'center', fontSize: '20px', color: 'var(--P1)' ,marginTop: "20px"}}>คุณนั้นสุดจะเจ๋งแจ๋ว ;^;</div>
                    <img
                        key={"เย่"}
                        src={
                            "https://media.tenor.com/NmNFBhKOpSMAAAAC/mobius-elysia.gif"
                        }
                    /> </div>): (
                    <div className="hint-section">
                        <button onClick={() => handleHintClick(1)} className="hint-button">Hint 1</button>
                        <button onClick={() => handleHintClick(2)} className="hint-button">Hint 2</button>
                        <button onClick={() => handleHintClick(3)} className="hint-button">Hint 3</button>
                    </div>
                    )
                    }

                    {/* แสดง Hint */}
                    {hint && <div className="hint-display">{hint}</div>}
                </div>
            </div>
        </>
    );
};

export default Level4;
