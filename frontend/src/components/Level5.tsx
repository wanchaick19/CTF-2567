import React, { useEffect, useState } from 'react';
import { message } from "antd";
import './por.css';
import { GetKeyLevel5 } from '../services/https';

const Level5: React.FC = () => {
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
    const SumitLevel5 = async (e:any) => {
        e.preventDefault();
        if (FormLevel5.key == "2c70e12b7a0646f92279f427c7b38e7334d8e5389cff167a1dc30e73f826b683") {
            window.location.href = "https://youtu.be/dQw4w9WgXcQ?si=BCURQaHpP4sGTane";
        }else if (FormLevel5.key == "") {
            message.info("The KEY : 2c70e12b7a0646f92279f427c7b38e7334d8e5389cff167a1dc30e73f826b683")
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
                        <div className='MessageMeBox'>
                            <p className='MessageMe'>สวัสดีค้าบ</p>
                        </div>
                        <div className='MessageYouBox'>
                            <p className='MessageYou'>อะไรว้ะ</p>
                        </div>
                        <div className='MessageMeBox'>
                            <p className='MessageMe'>ไม่มีอะไรแล้วค้าบ👏🏻</p>
                        </div>
                    </div>
                </div>
                <div style={{ margin: '0 10%' }}>
                    <h2 style={{ color: 'var(--P1)', fontSize: '40px' }} onClick={gettheFkey} >สองคนนี่คุยอะไรกันอยู่นะ</h2>
                    <a href='https://youtu.be/dQw4w9WgXcQ?si=BCURQaHpP4sGTane' style={{ color: 'var(--P1)', textDecoration: 'none', fontSize: '24px' }} >ด่านนี้จะให้คุณสวมบทบาทเป็น Man In The Middle เพื่อดูว่าสองคนนี้ เค้ากำลัง คุยอะไรกันอยู่ แต่เดี๋ยวนะ !!! ทำไมข้อความเป็นแบบนี้ อ่านไม่ออกเลย หรือว่า หรือว่าาาา ต้องจิ้มที่ข้อความนี้ดูกันนะ</a>
                    <br />
                    <a href="https://toolbox.googleapps.com/apps/encode_decode/?lang=th&utm_source=chatgpt.com" target="_blank" style={{ color: 'var(--G1)', textDecoration: 'none', fontSize: '24px'}}>นี่เว็ปถอดรหัสค้าบ</a>
                    <form onSubmit={SumitLevel5} style={{margin:'40px 0'}}>
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
