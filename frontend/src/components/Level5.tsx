import React from 'react';
import './por.css';

const Level5: React.FC = () => {
    return (
        <>
            <div className='blackgroundLevel5'>
                <h1 className='Level5'>LEVEL5</h1>
                <div className='Phone'>
                    <div className='PhoneHead'>
                        <img
                            src="https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/hu_tao/image.png?strip=all&quality=75&w=256"
                            alt="Hu Tao"
                        />
                        <p>Hu Tao</p>
                    </div>
                    <div className='Message'>
                        <div className='MessageMeBox'>
                            <p className='MessageMe'>Hello! How are you?</p>
                        </div>
                        <div className='MessageYouBox'>
                            <p className='MessageYou'>I'm good! How about you?</p>
                        </div>
                        <div className='MessageMeBox'>
                            <p className='MessageMe'>I'm doing great. Thanks!</p>
                        </div>
                    </div>
                </div>
                <div style={{margin:'0 10%'}}>
                    <h2 style={{color:'var(--P1)',fontSize:'40px'}}>สองคนนี่คุยอะไรกันอยู่นะ</h2>
                    <a href='https://youtu.be/dQw4w9WgXcQ?si=BCURQaHpP4sGTane' style={{color:'var(--P1)',textDecoration: 'none', fontSize:'24px'}} >ด่านนี้จะให้คุณสวมบทบาทเป็น Man In The Middle เพื่อดูว่าสองคนนี้ เค้ากำลัง คุยอะไรกันอยู่ แต่เดี๋ยวนะ !!! ทำไมข้อความเป็นแบบนี้ อ่านไม่ออกเลย หรือว่า หรือว่าาาา ต้องจิ้มที่ข้อความนี้ดูกันนะ</a>
                    
                
                </div>
            </div>
        </>
    );
};

export default Level5;
