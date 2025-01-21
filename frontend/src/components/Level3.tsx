import React, { useState } from 'react';
import { CheckFlagLevel3} from "../services/https";
import { message } from "antd";
import { Button, Modal } from 'antd';
import "./Arm.css"

const Level3: React.FC = () => {
    const [answer, setAnswer] = useState<string>("");
    const [hint, setHint] = useState<string>(""); // สถานะสำหรับแสดง Hint
    const [messageApi, contextHolder] = message.useMessage();
    const [finish, setFinish] = useState(false);

    const pass = localStorage.getItem("Level-3");

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


    const handleClick = async () => {
        messageApi.success("ทำไมคลิ๊กซี้ซั้วจังอะ เอานี่ไป🫵");
        setTimeout(() => window.location.href = 'https://youtube.com/shorts/exgvlxkHgn0?si=ZWTVuPIOj9WHo2uV', 2000);
    };

    const handleAnswerSubmit = async () => {
        const AnswerToSend = {
            Answer: answer
        }
        const res = await CheckFlagLevel3(AnswerToSend);
        if (res.data.message === "correct") {
            messageApi.success("เก่งมาดดด ;^;");
            localStorage.setItem("Level-3", "ture");
            setFinish(true);
            setwin(true);
        }
        else {
            messageApi.error("ม่ายช่าย ม่ายช่าย");
        }
    };

    const handleHintClick = (hintNumber: number) => {
        let newHint = "";
        switch (hintNumber) {
            case 1:
                newHint = 'สมุดโน๊ตได้บอกใบ้เส้นทางสู่รหัสผ่าน';
                break;
            case 2:
                newHint = 'รหัสผ่านก่อน hash มีความยาว 8 ตัวอักษร';
                break;
            case 3:
                newHint = 'จุดเริ่มต้นของแต่ละวันนำไปสู่รหัสผ่าน';
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
    


    const userLevel3 = localStorage.getItem("Level-3");
    const [win, setwin] = useState(false);
    return (
        <>
            {contextHolder}
            <div className='Level3'>
                <h1 className='Level5'>LEVEL3</h1>
                <div style={{ textAlign: 'center', fontSize: '50px', color: 'var(--P1)', marginBottom: "20px" }}>
                    <span 
                    style={{ textDecoration: 'underline' }}>
                        คุณคือ คนไม่ดี
                    </span>
                </div>
                <div style={{ textAlign: 'center', fontSize: '26px', color: 'var(--P1)' , margin: '0 10%' , marginBottom: '20px'}}>
                    คุณพยายามที่จะ Hack บัญชีของ user ที่ชื่อว่า nuay ว่าแต่รหัสผ่านของผู้ใช้คนนี้มีความปลอดภัยสูงมาก รหัสผ่านมีการ Hash ตั้งแต่ตัวผู้ใช้ก่อนแล้ว
                    แต่คุณบังเอิญเจอสมุดโน๊ตของเหยื่อวางอยู่ รหัสผ่านนั้นคืออะไรกันนะ ลองหาดูสิในนี้อาจจะมี <span onClick={handleClick}
                    style={{ textDecoration: 'underline', cursor: 'pointer'}}>
                        เบาะแส
                    </span> อะไรก็ได้  
                </div>

                <div className='fourarm' >
                            <img
                            key={"doc"}
                            src={
                                "https://cdn.pixabay.com/photo/2013/07/12/13/43/diary-147191_1280.png"
                            }
                        />
                            <div style={{ textAlign: 'center' , marginBottom: "20px"}}>
                                <Button type="primary" onClick={showModal}>
                                    ดูเนื้อหาในสมุดโน๊ต
                                </Button>
                                <Modal
                                    title="ไดอารี่ของ nuay"
                                    open={isModalOpen}
                                    onOk={handleOk}
                                    onCancel={handleCancel}
                                    okText="Close"
                                    cancelButtonProps={{ style: { display: 'none' } }}
                                    width={800}
                                    style={{ fontFamily: "'Poppins', sans-serif", padding: '20px' }}
                                >
                                    <div style={{
                                        fontSize: '16px',
                                        backgroundColor: '#f9f9f9',
                                        border: '1px solid #ddd',
                                        borderRadius: '8px',
                                        padding: '20px',
                                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                        lineHeight: '1.6'
                                    }}>
                                        <p style={{ fontWeight: 'bold', fontSize: '18px', color: '#7A4D37' }}><strong>วันที่ 1: Power</strong></p>
                                        <p>วันนี้รู้สึกมีพลังมากขึ้นจากการเริ่มต้นโปรเจคใหม่ และทำงานร่วมกับทีมที่มีความสามารถ การได้เห็นผลลัพธ์ที่ดีทำให้รู้สึกว่ามีพลังในการทำงานมากขึ้น</p>
                                        
                                        <p style={{ fontWeight: 'bold', fontSize: '18px', color: '#7A4D37' }}><strong>วันที่ 2: Adventure</strong></p>
                                        <p>วันนี้เป็นการผจญภัยใหม่ ๆ ในการทำงาน เริ่มต้นโปรเจคที่ไม่เคยทำมาก่อน ทุกการเรียนรู้และการเผชิญกับความท้าทายทำให้รู้สึกตื่นเต้นและสนุกกับการเดินทางนี้</p>

                                        <p style={{ fontWeight: 'bold', fontSize: '18px', color: '#7A4D37' }}><strong>วันที่ 3: Success</strong></p>
                                        <p>วันนี้รู้สึกภูมิใจในความสำเร็จของตัวเอง หลังจากที่ทำงานหนักเพื่อให้โปรเจคเสร็จสมบูรณ์ ความสำเร็จในวันนี้เป็นผลมาจากการทุ่มเทและความพยายาม</p>

                                        <p style={{ fontWeight: 'bold', fontSize: '18px', color: '#7A4D37' }}><strong>วันที่ 4: Self-care</strong></p>
                                        <p>วันนี้ให้ความสำคัญกับการดูแลตัวเอง หลังจากการทำงานอย่างหนัก ฉันไปออกกำลังกายและผ่อนคลาย เพื่อฟื้นฟูทั้งร่างกายและจิตใจให้พร้อมสำหรับวันใหม่</p>

                                        <p style={{ fontWeight: 'bold', fontSize: '18px', color: '#7A4D37' }}><strong>วันที่ 5: Wisdom</strong></p>
                                        <p>วันนี้ได้เรียนรู้บทเรียนใหม่จากการเผชิญกับปัญหาในที่ทำงาน ความรู้และประสบการณ์ที่ได้รับช่วยให้ฉันมองสิ่งต่างๆ อย่างมีสติและสามารถตัดสินใจได้ดีขึ้น</p>

                                        <p style={{ fontWeight: 'bold', fontSize: '18px', color: '#7A4D37' }}><strong>วันที่ 6: Opportunities</strong></p>
                                        <p>วันนี้ได้พบโอกาสใหม่ๆ ในการพัฒนาอาชีพและตัวเอง สิ่งเหล่านี้ทำให้ฉันรู้สึกตื่นเต้นกับอนาคตที่กำลังจะมาถึง</p>

                                        <p style={{ fontWeight: 'bold', fontSize: '18px', color: '#7A4D37' }}><strong>วันที่ 7: Resilience</strong></p>
                                        <p>วันนี้ได้ทบทวนถึงความอดทนที่ผ่านมาของตัวเองในการเผชิญกับอุปสรรค ความอดทนและความแข็งแกร่งที่มีทำให้สามารถก้าวข้ามทุกอุปสรรคไปได้</p>

                                        <p style={{ fontWeight: 'bold', fontSize: '18px', color: '#7A4D37' }}><strong>วันที่ 8: Dreams</strong></p>
                                        <p>วันนี้ได้คิดถึงความฝันและเป้าหมายในชีวิตที่ยังคงรอคอย การตั้งเป้าหมายในชีวิตและมุ่งมั่นทำให้ฉันมีแรงขับเคลื่อนในการทำงานและชีวิต</p>
                                    </div>
                                </Modal>
                            </div>
                </div>

                <div className='fourarm'>

                    {/* ลิงก์เพิ่มเติม */}
                    <div className="link-section">
                        <a
                            href="https://cryptotools.dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="external-link"
                            style={{ fontSize: "18px" }}
                        >
                            <span style={{ textDecoration: 'underline' }}>เว็บไซต์สำหรับ Hash</span>
                        </a>
                    </div>

                    {/* ส่วนสำหรับกรอกคำตอบ */}
                    <div>
                        <div className="answer-section">
                            <label>Password: </label>
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
                            >
                                ยืนยันคำตอบ
                            </button>
                        </div>
                    </div>                
                { (finish || pass )?
                    (<div>
                        <div style={{ textAlign: 'center', fontSize: '20px', color: 'var(--P1)' ,marginTop: "20px"}}>เก่งมาดดด ผ่านแล้ว เย่ ;^;</div>
                    <img
                        key={"เย่"}
                        src={
                            "https://media.tenor.com/KwyOcA00uecAAAAi/blue-archive-bluesechi.gif"
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
                {(win || userLevel3) &&
                    <div className='WinBG'></div>
                }
            </div>
        </>
    );
};

export default Level3;
