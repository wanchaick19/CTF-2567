import React, { useState } from 'react';
import { Lv2CheckAns } from '../services/https';
import "./Lee.css"
import "./LeeMajorOrder.css"
import { message } from 'antd';
const Level2_2: React.FC = () => {

    const [answer, setAnswer] = useState<string>("");
    const [messageApi, contextHolder] = message.useMessage();

    const handleAnsSub = async ()=>{
        const ansToSend = {
            Answer:answer
        };
        const res = await Lv2CheckAns(ansToSend);
        if(res.data.message === "Corr"){
            messageApi.success("Initiating launch sequence");
            localStorage.setItem("Level-2", "ture");
        }else{
            messageApi.error("Error");
        }
        
    }

    return (
        <>
        {contextHolder}
        <div className="full-bg">
            <div>
                <div className="MOcard">
                    <div className="MObg">
                        <div className="bold-gold-text"> <b>Details</b></div>
                        <div className="MOinfoText">
                            <p>
                            ด้วยมาตรการด้านความปลอดภัยรหัสการยิงจะ<b> ถูกแบ่ง </b>
                            เป็นสองส่วน <br />ได้แก่ <b className="bold-gold-text">PlainText</b> และ 
                            <b className="bold-gold-text"> SecretKey </b>
                            จำเป็นต้องมีรหัสทั้งสองส่วนเพื่อทำให้รหัสยิงสามารถใช้การได้
                            </p>
                        </div>
                    </div>
                    <div className="MObg">
                        <div >
                           
                            <img src="https://preview.redd.it/why-dont-automotons-just-destroy-the-terminals-to-win-are-v0-woomo52hcylc1.jpeg?width=1080&crop=smart&auto=webp&s=6ccd169a96862db66cc8b66682ae1066ec885e01" alt=""
                            className="imgforlv2" />
                        </div>
                       <div >
                            <b className="bold-gold-text">Confirmation Text (Encrypted PlainText)</b>
                            <p className="safty-key">Take the encrypted message and arrange it according to Roman numerals. 
                            <br /><b>(Insert "==" at the end)</b> FOR Secret-K use "1111111111111111" <br /><br />
                            <b>Sorting order: II-X-IV-XII-XV <a href="https://anycript.com/crypto"
                            target="_blank"
                            ><button className="btn-float-right"> 
                                <b >Decryption tool</b>
                           </button>
                           </a></b><br />
                        
                            <br />🟥🟥🟥🟥Ea2T <br />🟩🟥🟥🟥O9WO 
                            <br />🟥🟥🟥🟩CAE  <br />🟩🟥🟥🟩CUNny
                            <br />🟥🟥🟩🟥UY7FZ <br />🟩🟥🟩🟥TVR75O
                            <br />🟥🟥🟩🟩ASA  <br />🟩🟥🟩🟩jiY
                            <br />🟥🟩🟥🟥6hP8H  <br />🟩🟩🟥🟥PWR
                            <br />🟥🟩🟥🟩SEG  <br />🟩🟩🟥🟩KRm
                            <br />🟥🟩🟩🟥7a9  <br />🟩🟩🟩🟥RUUk8
                            <br />🟥🟩🟩🟩Br9T <br />🟩🟩🟩🟩UfA
                            </p>
                       </div>
                    </div>
                    <div className="MObg">
                        <div >
                            
                            <img src="https://theguidehall.com/wp-content/uploads/2024/02/Helldivers-2-Missile.jpg" alt="" 
                            className="imgforlv2" />
        
                            <b className="bold-gold-text">Launch Code (SecretKey)</b>
                            <p className="MOinfoText"> <br />
                            รหัสยิงนั้นมีอยู่หลายชุด โดยการยิงหนึ่งครั้งรหัสจะถูกเลื่อนไปข้างหน้าเสมอยกเว้นกรณีทดสอบระบบ <br />
                            <b>ในกรณีที่ระบบล้มเหลวแต่ไม่ใช่การทดสอบรหัสจะยังรันตามปกติ</b>
                            <br />
                            เมื่อรหัสยิงถูกยิงครบชุดแล้วจะย้อนกลับไปใช้รหัสแรก
                            สามารถตรวจสอบประวัติการยิงได้ว่าเจ้าหน้าที่คนไหนเป็นคนยิง และ 
                            เจ้าหน้าที่แต่ละคนยังมีรหัสส่วนตัวเพื่อใช้ผสมกับรหัสยิงเพื่อให้รหัสสมบูรณ์
                            เพื่อนำไปสู่รหัสยิง 
                            <br /><br />
                            <b>List of files</b>
                             <br />
                            <a href="https://docs.google.com/spreadsheets/d/13XelLroTg3u4qgFRNATK-yC04SUWl_F4H3qbDPlHpvE/edit?usp=sharing"
                            target="_blank">
                            <b className="launch-his-text">|__ Launch History</b>
                            </a>
                            <br />
                            <a href="https://docs.google.com/spreadsheets/d/1YTPwdxjh5sPjalvCRJ7z9xSj7_AIiy9iwZENwd6yEp4/edit?usp=sharing"
                            target="_blank">
                            <b className="launch-his-text">|__ Key Holders</b>
                            </a>
                            <br />
                            <a href="https://youtu.be/LaEgpNBt-bQ?si=NKoq47sW9sKv0Sye&t=85"
                            target="_blank">
                            <b className="launch-his-text">|__ Do Not Open!</b>
                            </a>
                            <br />
                            <a href="https://www.youtube.com/watch?v=iDLmYZ5HqgM"
                            target="_blank">
                            <b className="launch-his-text">|__ Metal pipe</b>
                            </a>
                            </p>
                            
                            
                       </div>
                    </div>
                    <div className="Lv2f">
                        <p  className="bold-gold-text"><b>Send Encrypted Confirmation Text <br /> (Confirmation Text + Launch Code)</b></p>
                        <input type="text"
                        value={answer}
                        placeholder='ENCRYPTED LAUNCHCODE'
                        onChange={(e) => setAnswer(e.target.value)}
                        className='input-text-sub' />
                        <p>
                            <button className="btn_submit" onClick={handleAnsSub}><p className="btn_text_submit"><b>Launch</b></p></button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
export default Level2_2