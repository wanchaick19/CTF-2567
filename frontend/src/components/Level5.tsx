import React, { useEffect, useState } from 'react';
import { message } from "antd";
import './por.css';
import { CheckLevel5, GetKeyLevel5 } from '../services/https';

const Level5: React.FC = () => {
    //Hide message
    const [Massage, setMessage] = useState(false);
    //GetKeyLevel5
    useEffect(() => {
        GetKeyLevel5();
    }, []);
    const ClickHutaoToGetthekey = async () => {
        message.success("ตึก F12 แต่ไม่ใช่ตึก")
        GetKeyLevel5();
    };

    const gettheFkey = async () => {
        message.success("2c70e12b7a0646f92279f427c7b38e7334d8e5389cff167a1dc30e73f826b683")
    }
    const [FormLevel5, setFormLevel5] = useState({
        key: '',
    });
    const handleChangeLevel5 = (e: any) => {
        const { name, value } = e.target;
        setFormLevel5({ ...FormLevel5, [name]: value });
    };
    const SumitLevel5 = async (e: any) => {
        e.preventDefault();
        if (FormLevel5.key == "2c70e12b7a0646f92279f427c7b38e7334d8e5389cff167a1dc30e73f826b683") {
            window.location.href = "https://youtu.be/dQw4w9WgXcQ?si=BCURQaHpP4sGTane";
        } else if (FormLevel5.key == "") {
            message.info("The KEY : 2c70e12b7a0646f92279f427c7b38e7334d8e5389cff167a1dc30e73f826b683")
        } else {
            const AnswerToSend = {
                KeyLevel6: FormLevel5.key
            }
            const res = await CheckLevel5(AnswerToSend);
            if (res.data.message === "correct") {
                message.success("เก่งมาก 🥳👏🏻")
                setMessage(true)
            } else {
                message.error("ผิดจ้า 🥹")
            }
        }

        console.log("hello")
    }
    return (
        <>
            <div className='blackgroundLevel5'>
                <h1 className='Level5'>LEVEL5</h1>
                <div className='Phone'>
                    <div className='PhoneHead'>
                        <img
                            src="https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/hu_tao/image.png?strip=all&quality=75&w=256"
                            alt="Hu Tao"
                            onClick={ClickHutaoToGetthekey}
                        />
                        <p>Hu Tao</p>
                    </div>
                    <div className='Message'>
                        {Massage ?
                            <>
                                <div className='MessageMeBox'>
                                    <p className='MessageMe'>เธอๆ กินข้าวยัง?</p>
                                </div>
                                <div className='MessageYouBox'>
                                    <p className='MessageYou'>กินแล้วจ้า เธอล่ะ?</p>
                                </div>
                                <div className='MessageMeBox'>
                                    <p className='MessageMe'>กำลังจะกิน… วันนี้ฉันสั่งหมูเด้งมาด้วยแหละ ชอบมากเลย!</p>
                                </div>
                                <div className='MessageYouBox'>
                                    <p className='MessageYou'>หมูเด้งเนี่ยนะ? ไม่น่ารักเลยเธอ มันก็แค่หมูก้อนๆ กลมๆ ธรรมดาอ่ะ 😅</p>
                                </div>
                                <div className='MessageMeBox'>
                                    <p className='MessageMe'> เฮ้ย! อย่าดูถูกหมูเด้งสิ! นุ่มนิ่ม เด้งดึ๋ง น่ารักจะตาย ❤️</p>
                                </div>
                                <div className='MessageYouBox'>
                                    <p className='MessageYou'>จะน่ารักตรงไหนเนี่ย หมูเด้งไม่มีหน้า ไม่มีตา ก้อนกลมๆ เฉยๆ 😂</p>
                                </div>
                                <div className='MessageMeBox'>
                                    <p className='MessageMe'>นั่นแหละเสน่ห์ของมัน! เวลากัดลงไปแล้วได้กลิ่นหอมๆ แถมสัมผัสเด้งดึ๋ง มันคือความสุขในชีวิตเลยนะ 🥹</p>
                                </div>
                                <div className='MessageYouBox'>
                                    <p className='MessageYou'>โอ๊ย ขนาดนั้นเลยเหรอ? เธอนี่เว่อร์จริงๆ</p>
                                </div>
                                <div className='MessageMeBox'>
                                    <p className='MessageMe'>ไม่เว่อร์! เธอเคยลองกินหมูเด้งที่จิ้มกับน้ำจิ้มแซ่บๆ ไหม? อร่อยมากกกก!</p>
                                </div>
                                <div className='MessageYouBox'>
                                    <p className='MessageYou'>เอาจริงก็เคยนะ… แต่ฉันว่ามันก็เฉยๆ อ่ะ</p>
                                </div>
                                <div className='MessageMeBox'>
                                    <p className='MessageMe'>เฉยๆ ไม่ได้! ฉันจะเปลี่ยนใจเธอเอง เอาไว้พาไปกินร้านโปรดฉัน เด้งนุ่มถึงใจแน่นอน!</p>
                                </div>
                                <div className='MessageYouBox'>
                                    <p className='MessageYou'>โอเคๆ ถ้าเธอชอบขนาดนี้ ฉันจะลองอีกทีละกัน 😅</p>
                                </div>
                                <div className='MessageMeBox'>
                                    <p className='MessageMe'>ดีมาก! รับรองเธอต้องหลงรักหมูเด้งเหมือนฉันแน่นอน! 🐷💕</p>
                                </div>
                                <div className='MessageYouBox'>
                                    <p className='MessageYou'>จะรอดูละกันนะเธอ ว่าหมูเด้งจะเปลี่ยนใจฉันได้มั้ย 😏</p>
                                </div>
                            </>
                            :
                            <>
                                <div className='MessageMeBox'>
                                    <p className='MessageMe'>@$&$ @#$%*@?</p>
                                </div>
                                <div className='MessageYouBox'>
                                    <p className='MessageYou'>#%$&%^ $#$@?**</p>
                                </div>
                                <div className='MessageMeBox'>
                                    <p className='MessageMe'>%@#$+&@$#… @$%^+ @$&^%@%$%^+$%# @$@*&%@+!</p>
                                </div>
                                <div className='MessageYouBox'>
                                    <p className='MessageYou'>*$#%^@&+$? @$&^&+%@%@%@! @%@%@% $+@%@%@$&%^ 😅</p>
                                </div>
                                <div className='MessageMeBox'>
                                    <p className='MessageMe'> #@%@! $%@%#@%@#%@%@%@%@%@%@! @$%@% @$%@%@%@%@%@%@%@ ❤️</p>
                                </div>
                                <div className='MessageYouBox'>
                                    <p className='MessageYou'> %@%@%@%@%@%@%@%@%@%@%@% $%@%@%@%@%@%@%@%@%@%@%@%@ 😂</p>
                                </div>
                                <div className='MessageMeBox'>
                                    <p className='MessageMe'>ฟหกดหฟดำหด! ฟหดำดหฟำดำด ีระัีระัดเำภพดกหเะเีดเ้กหดเ่าั ฟหฟหกดฟหำดฟหำดหกดอหแ ว</p>
                                </div>
                                <div className='MessageYouBox'>
                                    <p className='MessageYou'>ฟหดหฟ ฟหดฟหำดฟหำักหดเ? ฟหำดำพัสสส</p>
                                </div>
                                <div className='MessageMeBox'>
                                    <p className='MessageMe'>ฟหดำ! ฟหดำดหำดหกร่ีาน่แสา่อนหรฟด ฟหด? ฟหดำดหำัก้ดเ!</p>
                                </div>
                                <div className='MessageYouBox'>
                                    <p className='MessageYou'>ฟหดำดหฟำกดฟหไำดฟหำด ฟหดฟหำดฟหดำฟดฟหำด ฟหดำา</p>
                                </div>
                                <div className='MessageMeBox'>
                                    <p className='MessageMe'>ฟหดำ ฟหำดำ! ฟหำดฟำหดหำพเดห้เ ฟหดำฟหไะัพีเ่ัรีนร ส้่รสีรส่าส่านส!</p>
                                </div>
                                <div className='MessageYouBox'>
                                    <p className='MessageYou'>แอืืื หกเหก ดก้ดกะ้ดะ้ดะ้ ง</p>
                                </div>
                                <div className='MessageMeBox'>
                                    <p className='MessageMe'>หฟกดำ ฟหำดำดหำดหกดฟหำดำพ้สรนยรย! าัืะั้ ะ</p>
                                </div>
                                <div className='MessageYouBox'>
                                    <p className='MessageYou'>ฟหกดหฟกด ฟหกดฟหดฟำหด้ราี้สา้สส้ า</p>
                                </div>
                            </>
                        }
                    </div>
                </div>
                <div style={{ margin: '0 10%' }}>
                    <h2 style={{ color: 'var(--P1)', fontSize: '40px' }} onClick={gettheFkey} >สองคนนี่คุยอะไรกันอยู่นะ</h2>
                    <a href='https://youtu.be/dQw4w9WgXcQ?si=BCURQaHpP4sGTane' style={{ color: 'var(--P1)', textDecoration: 'none', fontSize: '24px' }} >ด่านนี้จะให้คุณสวมบทบาทเป็น Man In The Middle เพื่อดูว่าสองคนนี้ เค้ากำลัง คุยอะไรกันอยู่ แต่เดี๋ยวนะ !!! ทำไมข้อความเป็นแบบนี้ อ่านไม่ออกเลย หรือว่า หรือว่าาาา ต้องจิ้มที่ข้อความนี้ดูกันนะ</a>
                    <br />
                    <a href="https://toolbox.googleapps.com/apps/encode_decode/?lang=th&utm_source=chatgpt.com" target="_blank" style={{ color: 'var(--G1)', textDecoration: 'none', fontSize: '24px' }}>นี่เว็ปถอดรหัสค้าบ</a>
                    <form onSubmit={SumitLevel5} style={{ margin: '40px 0' }}>
                        <input
                            className='inputLevel5'
                            type="text"
                            id="key"
                            name="key"
                            placeholder="key"
                            value={FormLevel5.key}
                            onChange={handleChangeLevel5}
                        />
                        <button className='submitLevel5'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Level5;
