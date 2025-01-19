import React, { useState } from 'react';
import './por.css';
import Enigma from '../assets/Enigma.png'
import { message, Modal } from 'antd';
import { CheckLevel7 } from '../services/https';

const Level7: React.FC = () => {
    const userLevel7 = localStorage.getItem("Level-7");

    const textToCopy = `-----BEGIN RSA PUBLIC KEY-----
MEgCQQCp1nVuBSC2Nwu138GITvVFUrPAnLd5Tc5pkFUO7hONeShKxq/K2r3W7w6z
98knyVgmI/B80CQYTWs7rj8OlNyhAgMBAAE=
-----END RSA PUBLIC KEY-----`;


const privateKEY = `-----BEGIN RSA PRIVATE KEY-----MIIBOwIBAAJBAKnWdW4FILY3C7XfwYhO9UVSs8Cct3lNzmmQVQ7uE415KErGr8ravdbvDrP3ySfJWCYj8HzQJBhNazuuPw6U3KECAwEAAQJAHpMC9NlreCIUs5siZf2A3gfzYBtWVDoTjKF1DokBcBgyMRngmJXBaBNyjnPNgTwrnKmvmqLS70V9m74lUEwbIQIhAOOvqrrK/SrP21yl1Hrm6AVtE40df8GuXcr47IiY2hCNAiEAvvUzRJRzKiPq43GCegTIOJ+Er9TH6NsxhvoSXXxs6WUCIEcwZrZOv4eCQ/kc1Gm1BrijmShXH9nj9el/mR1AhXYFAiEAh0F+ctEDUZHnSfqYhHzmpNS4UyLQBmtbhVOTtovvSNECIQC/cf8W2Bru0/LoshPZiWU5vUy/UsfBtRQK4wzAVY2WLQ==-----END RSA PRIVATE KEY-----`


    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy); // คัดลอกข้อความไปยังคลิปบอร์ด
            message.success("คัดลอกข้อความเรียบร้อยแล้ว!");
        } catch (error) {
            message.error("ไม่สามารถคัดลอกข้อความได้!");
        }
    };
    const handleCopyPrivatekey = async () => {
        try {
            await navigator.clipboard.writeText(privateKEY); // คัดลอกข้อความไปยังคลิปบอร์ด
            message.success("ได้รับสิ่งของบางอย่างจากมืออันสั่นกลัวของ อาเนียร์ ลักษณ์คล้ายกุจแจ", 8);
        } catch (error) {
            message.error("ไม่สามารถคัดลอกข้อความได้!");
        }
    };




    const [FormLevel7, setFormLevel7] = useState({
        key: '',
        Ciphertext1: '',
        Ciphertext2: '',
        Ciphertext3: '',
        Ciphertext4: '',
        Ciphertext5: '',
        Ciphertext6: '',
        countA: 0,
    });
    const handleChangeLevel7 = (e: any) => {
        const { name, value } = e.target;
        setFormLevel7({ ...FormLevel7, [name]: value });
    };
    const SumitLevel7 = async (e: any) => {
        e.preventDefault();
        FormLevel7.key = FormLevel7.Ciphertext1 + FormLevel7.Ciphertext2 + FormLevel7.Ciphertext3 + FormLevel7.Ciphertext4 + FormLevel7.Ciphertext5 + FormLevel7.Ciphertext6;
        console.log(FormLevel7.key);
        if (FormLevel7.key == "2c70e12b7a0646f92279f427c7b38e7334d8e5389cff167a1dc30e73f826b683") {
            window.location.href = "https://youtu.be/dQw4w9WgXcQ?si=BCURQaHpP4sGTane";
        } else if (FormLevel7.key == "") {
            message.info("The KEY : 2c70e12b7a0646f92279f427c7b38e7334d8e5389cff167a1dc30e73f826b683")
        } else {
            const AnswerToSend = {
                Answer7: FormLevel7.key
            }
            const res = await CheckLevel7(AnswerToSend);
            if (res.data.message === "correct") {
                message.success("เก่งมาก 🥳👏🏻")
                localStorage.setItem("Level-7", "ture");
            } else {
                message.error("ผิดจ้า 🥹")
            }
        }
    }







    //=========================================================================================
    const words = [
        "อย่ายอมแพ้นะ เจ้าหมูจอมพลัง! โลกนี้ยังมีขนมอร่อยๆ รอเธออยู่! 🍩🐷",
        "พักหายใจเถอะ เดี๋ยวแบตเธอก็เต็ม พร้อมลุยใหม่อีกครั้ง! 🔋💪",
        "แม้วันนี้จะเจอเมฆครึ้ม พรุ่งนี้ก็ต้องเจอรุ้งกินน้ำที่สดใสแน่นอน! 🌈☁️",
        "เธอเป็นเหมือนดาวระยิบระยับบนฟ้า อย่าให้ความมืดมาบดบังแสงของเธอนะ! ✨⭐",
        "ไม่มีใครสมบูรณ์แบบ แต่เธอน่ารักที่สุดในแบบของเธอเอง! 🌸💗",
        "คิดถึงตัวเองเหมือนซูเปอร์ฮีโร่ที่กำลังพักผ่อนก่อนกลับมาช่วยโลกอีกครั้ง! 🦸‍♀️🌍",
        "แม้โลกนี้จะมีปัญหาเยอะ แต่ก็ยังมีเธอที่เป็นเรื่องดีๆ อยู่เสมอ! 🌟😊",
        "อย่าลืมว่าแค่ยิ้มของเธอ ก็สามารถเปลี่ยนวันหม่นให้สดใสได้แล้วนะ! 😊🌼",
        "ถ้ารู้สึกเหนื่อย ก็แค่พักได้นะ เพราะเธอเก่งที่สุดแล้ว! 🛋️💤",
        "อย่าเครียดไปเลยนะ นึกไว้ว่าโลกนี้ยังมีชาไข่มุกอร่อยๆ ให้เธอกิน! 🧋💕",
        "หวังว่าคำพูดเหล่านี้จะช่วยเติมพลังใจให้นะ! 💖✨",
    ];


    const [Dark, setDark] = useState(false);
    const handleRandomize = () => {
        const randomIndex = Math.floor(Math.random() * words.length);
        message.info(words[randomIndex]);
        FormLevel7.countA = FormLevel7.countA + 1;
        if (FormLevel7.countA >= 10) {
            setDark(true)
        }
    };
    //=========================================================================================






    

    //=========================================================================================
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        handleCopyPrivatekey();
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    //=========================================================================================







    return (
        <>
            <div className='blackgroundLevel5' style={{ backgroundColor: 'var(--G3)' }}>
                <h1 className='Level5' style={{ color: 'var(--P1)' }}>LEVEL7</h1>
                <div style={{ margin: '0 10%' }}>
                    <h2 style={{ color: 'var(--P1)', fontSize: '40px' }}  >สู้เค้านะสนธยา</h2>
                    <a href='https://youtu.be/dQw4w9WgXcQ?si=BCURQaHpP4sGTane' style={{ color: 'var(--P1)', textDecoration: 'none', fontSize: '24px' }} >
                        ตอนนี้คุณคือ "สนธยา" สปายฝ่ายคุณธรรมผู้มากฝีมือ! ภารกิจสำคัญที่คุณได้รับคือการสอดแนมประเทศฝ่ายศัตรู เพื่อป้องกันการโจมตีและวางแผนหลีกเลี่ยงอย่างทันท่วงที ด้วยข้อมูลอันล้ำค่าที่ได้รับจากเครือข่ายสายลับของคุณ <br /> ต่อไปนี้คือสารลับที่ส่งถึงคุณ:
                    </a>
                </div>
                <div className='paper'>
                    <p>"สวัสดีสนธยา! ฉันมีทั้งข่าวร้ายและข่าวดีมาบอก ข่าวร้ายคือ ฝ่ายศัตรูรู้ตัวแล้วว่าเรากำลังดักฟังพวกเขาอยู่ พวกเขาเปลี่ยนวิธีการสื่อสารทั้งหมด และทำให้การถอดรหัสกลายเป็นเรื่องยากลำบากยิ่งกว่าเดิม แต่ข่าวดีก็คือ พวกเขาดูเหมือนจะใช้ระบบเข้ารหัสที่เรียกว่า 'Public Key' ซึ่งฉันเคยได้ยินมาว่านายเก่งกาจเรื่องนี้มาก! ดังนั้น ฉันต้องฝากฝีมืออันเป็นเลิศของนายในการไขรหัสเหล่านี้ นี่คือข้อมูลทั้งหมดที่เราดักจับมาได้ แต่มันถูกเข้ารหัสไว้ทั้งหมด ฉันเชื่อมั่นในตัวนาย สนธยา! ขอให้โชคดีในภารกิจนี้!"</p>
                </div>
                <div className='Data'>
                    <a className='E' target="_blank" href="https://www.starrytool.com/th-th/rsa-encrypt-decrypt.html?utm_source">
                        <img src={Enigma} />
                    </a>
                    <div className='Digets'>
                        <p style={{ fontSize: '30px', margin: '0' }}>ข้อมูล การสื่อสารที่ถูกเข้ารหัส</p>
                        <p>ฉันไม่รู้ว่าสิ่งนี้มันจะช่วยอะไรได้บ้างแต่กว่าจะได้มานั้นมันยากมาก "ขอให้ช่วยได้ด้วยเถอะ"</p>
                        <p onClick={handleCopy} className='item1'>กดเพื่อรับของที่อลิสส่งมาให้</p>
                        <p className='Ciphertext'>XgIU9Sl19guK6w1id6CiZ2M8DEocZ7dhP3bqyUlOwco9+ofmqe7vqG9iEVARRKqD9YkhLm33Iazxw4grjJ0gRA==</p>
                        <p className='Ciphertext'>ZuLXjQvgPVVmei/2f+BfHH5esVqBs0QtLDV4lRaGrxEscDOyGeg5t8jVxHKq4qeWr5RdxKceJSIXAoyIUhq6pw==</p>
                        <p className='Ciphertext'>jAbpTsJDj24hwtZjgu1muQuGG62ygMJzHMVmX0wdICFmcfd8lI5QQoz1KC9tluQYF+7JotEA3F8PGbRHzcbLeg==</p>
                        <p className='Ciphertext'>Yy9cvo60InTIDTrYCUVFV0tGXbC9HMdjjT1uqtJrUPRmnRzwhaG67j4cMhOb04vl9/oPGGssFjXr17G/V65Bbg==</p>
                        <p className='Ciphertext'>iUHnM9F5uNHyvyK3ckpGwNogDFJfPb0c7RhF2r8Hx8L4i+auxNEe6KHG1+eSs9kRgpr0F0fIYa3OxAB3ow1P2g==</p>
                        <p className='Ciphertext'>Z6VDQK95KIqJeVj6aZjXvTzcuZneYmI1UbNelEkBV0jy0eVIL3oJcWnoSR46XqChZARsuwVtiNkyfkWcw3iI3g==</p>
                        <p>จำไว้อย่าเชื่อใจใครทั้งนั้นแม้แต่คนไกล้ตัวนาย</p>
                    </div>
                </div>


                <div style={{ display: 'flex', justifyContent: 'center', margin: '10% 0 0' }}>
                    {userLevel7 ? (
                        <>
                            <p>ไม่มีใครอยู่ที่นี่</p>
                        </>
                    ) : (
                        <>
                            <img width={300} src="https://www.beartai.com/wp-content/uploads/2022/06/chara_anya_2-1.png" onClick={handleRandomize} />
                        </>
                    )}
                </div>
                <div className='C'>
                    <p className='Csub' onClick={handleRandomize}>คุยกับอาเนียร์</p>
                    <p className='Csub' onClick={handleRandomize}>เล่นกับอาเนียร์</p>
                    {Dark &&
                        <p className='Csub' onClick={showModal}>ชัก 9มม เป่ากระบาลอาเนียร์แล้วค้นกระเป๋าดู</p>
                    }
                </div>


                <Modal title="อาเนียร์อ่านใจได้" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>เนื่องจาก อาเนียร์สามรถอ่านใจคุณได้และรู้อยู่แล้วว่าคุณต้องการอะไร อาเนียร์ต้องการให้บางสิ่งกับคุณ แต่ดันอ่านใจ คุณไปเมื่อซักครู่ ทำให้อาเนียร์เกิดความกลัวและมอบบางอย่างให้กับคุณก่อนที่จะจากไปตลอดการ</p>
                    <p onClick={handleCopyPrivatekey} style={{backgroundColor:'var(--G1)',padding:'5px 10px',color:'#fff',borderRadius:'10px',cursor:'pointer'}}>รับของจากอาเนียร์</p>
                </Modal>



                <div>
                <form onSubmit={SumitLevel7} style={{ margin: '40px 10%' }}>
                        <input
                            className='inputLevel5'
                            style={{margin:'10px'}}
                            type="Ciphertext1"
                            id="Ciphertext1"
                            name="Ciphertext1"
                            placeholder="Ciphertext1"
                            value={FormLevel7.Ciphertext1}
                            onChange={handleChangeLevel7}
                        />
                        <input
                            className='inputLevel5'
                            style={{margin:'10px'}}
                            type="Ciphertext2"
                            id="Ciphertext2"
                            name="Ciphertext2"
                            placeholder="Ciphertext2"
                            value={FormLevel7.Ciphertext2}
                            onChange={handleChangeLevel7}
                        />
                        <input
                            className='inputLevel5'
                            style={{margin:'10px'}}
                            type="Ciphertext3"
                            id="Ciphertext3"
                            name="Ciphertext3"
                            placeholder="Ciphertext3"
                            value={FormLevel7.Ciphertext3}
                            onChange={handleChangeLevel7}
                        />
                        <input
                            className='inputLevel5'
                            style={{margin:'10px'}}
                            type="Ciphertext4"
                            id="Ciphertext4"
                            name="Ciphertext4"
                            placeholder="Ciphertext4"
                            value={FormLevel7.Ciphertext4}
                            onChange={handleChangeLevel7}
                        />
                        <input
                            className='inputLevel5'
                            style={{margin:'10px'}}
                            type="Ciphertext5"
                            id="Ciphertext5"
                            name="Ciphertext5"
                            placeholder="Ciphertext5"
                            value={FormLevel7.Ciphertext5}
                            onChange={handleChangeLevel7}
                        />
                        <input
                            className='inputLevel5'
                            style={{margin:'10px'}}
                            type="Ciphertext6"
                            id="Ciphertext6"
                            name="Ciphertext6"
                            placeholder="Ciphertext6"
                            value={FormLevel7.Ciphertext6}
                            onChange={handleChangeLevel7}
                        />
                        <button className='submitLevel5'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Level7;
