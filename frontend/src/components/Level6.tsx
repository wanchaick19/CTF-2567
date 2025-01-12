import { message } from 'antd';
import React, { useState } from 'react';

const Level6: React.FC = () => {
    //Hide message
    const [Massage, setMessage] = useState(true);


    const Hint1 = async () => {
        message.success("มองหาข้อความเข้ารหัสไม่เจอเลย สงสัยต้องลองกดดูมั่วๆแล้ว", 8)
    };
    return (
        <>
            <div className='blackgroundLevel5' style={{ backgroundColor: 'var(--G4)' }}>
                <h1 className='Level5' style={{ color: 'var(--P1)' }} onClick={Hint1}>LEVEL6</h1>

                <p style={{ color: 'var(--G4)' }}>MDc5LTgtMTY0NTctMCBLIFBMVVM=</p>

                <div className='Phone'>
                    {Massage ?
                        <>
                            <div className='PhoneHead'>
                                <img
                                    src="https://www.1999.co.jp/itbig103/11035208a2_m.jpg"
                                    alt="Hu Tao"
                                />
                                <p>ยาย</p>
                            </div>
                            <div className='Message'>
                                <div className='MessageMeBox'>
                                    <p className='MessageMe'>สวัสดีครับคุณยาย! ผม...เอ่อ...อีลอน มัสก์ครับ!</p>
                                </div>
                                <div className='MessageYouBox'>
                                    <p className='MessageYou'>อะไรนะ? อีลอนอะไรนะ? ที่ขายรถไฟฟ้านั่นน่ะเหรอ?</p>
                                </div>
                                <div className='MessageMeBox'>
                                    <p className='MessageMe'>ใช่แล้วครับคุณยาย! ผมนี่แหละ อีลอนตัวจริง เสียงจริงเลยครับ!</p>
                                </div>
                                <div className='MessageYouBox'>
                                    <p className='MessageYou'>แล้วอีลอน มัสก์มาโทรหายายทำไมล่ะ?</p>
                                </div>
                                <div className='MessageMeBox'>
                                    <p className='MessageMe'>เอ่อ...คือแบบนี้ครับยาย ผมกำลังเดินทางไปประชุมเรื่องส่งคนไปดาวอังคาร แต่เครื่องบินตกกลางทาง แล้วกระเป๋าตังค์ผมก็หาย!</p>
                                </div>

                                <div className='MessageYouBox'>
                                    <p className='MessageYou'>โถ ๆ ลูกเอ๊ย แล้วทำไมไม่โทรหาคนที่ดาวอังคารให้ช่วยล่ะ?</p>
                                </div>

                                <div className='MessageMeBox'>
                                    <p className='MessageMe'>อ๋อ พอดีสายที่ดาวอังคารมันเสียครับยายผมเลยต้องโทรหาคุณยายแทน!</p>
                                </div>
                                <div className='MessageYouBox'>
                                    <p className='MessageYou'>แล้วจะให้ยายช่วยยังไงล่ะลูก?</p>
                                </div>
                                <div className='MessageMeBox'>
                                    <p className='MessageMe'>คือแบบนี้ครับ ผมต้องการเงินด่วน 100,000 บาท เพื่อซ่อมยานและซื้อตั๋วกลับบ้าน แค่โอนเข้าบัญชีนี้ ยานผมก็พร้อมจะออกตัวไปดาวอังคารทันทีเลย!</p>
                                </div>
                                <div className='MessageYouBox'>
                                    <p className='MessageYou'>เดี๋ยวนะ...เอ๊ะ แล้วนี่อีลอน มัสก์ทำไมพูดไทยคล่องจัง?</p>
                                </div>
                                <div className='MessageMeBox'>
                                    <p className='MessageMe'>อ๋อ! ผมเรียนไทยออนไลน์ครับยาย เพราะชอบกินส้มตำกับน้ำปลาร้า!</p>
                                </div>
                                <div className='MessageYouBox'>
                                    <p className='MessageYou'>เอื้ม...ดีนะลูก งั้นยายถามหน่อย Elon นี่สะกดยังไง?</p>
                                </div>
                                <div className='MessageMeBox'>
                                    <p className='MessageMe'> เอ่อ...E-L-...E...เอ่อ...ยาย...คือ...</p>
                                </div>
                                <div className='MessageYouBox'>
                                    <p className='MessageYou'>อย่ามาหลอกยายเลย! ยายรู้ทัน! ยายเรียนวิธีจับแก๊งคอลเซ็นเตอร์จาก TikTok มา!</p>
                                </div>
                                <div className='MessageYouBox'>
                                    <p className='MessageYou'>แต่ไม่เป็นไรนะ เดี๋ยวยายให้ตัง ยายกำลังเหงาและ รวยอยู่พอดี</p>
                                </div>
                                <div className='MessageYouBox'>
                                    <p className='MessageYou'>ส่งเลข บัญชีมาเลยพ่อหนุ่ม</p>
                                </div>
                            </div>
                            <div className='BottomPhone'>
                                <img height={50} src="https://static.vecteezy.com/system/resources/previews/005/988/950/non_2x/photo-camera-icon-free-vector.jpg" alt="" />
                                <img height={40} src="https://icons.iconarchive.com/icons/praveen/minimal-outline/512/gallery-icon.png" alt="" />
                                <div className='Messagebar'>Message</div>
                            </div>
                        </>
                        :
                        <>
                            <div className='PhoneHead'>
                                <img
                                    src="https://i.pinimg.com/736x/e3/3e/b5/e33eb51b3e252104dddde3cba5cab99b.jpg"
                                    alt="Hu Tao"
                                />
                                <p>หัวหน้า</p>
                            </div>
                            <div className='Message'>
                                <div className='MessageYouBox'>
                                    <p className='MessageYou'>วันนี้ต้องได้เหยื่ออย่างน้อยไม่ต่ำกว่า 2 คน</p>
                                </div>
                                <div className='MessageYouBox'>
                                    <p className='MessageYou'>ไม่งั้นแกไม่มีทางได้กลับบ้านไปหาลูก หาเมียแกแน่</p>
                                </div>
                                <div className='MessageMeBox'>
                                    <p className='MessageMe'>ขอโทษครับหัวหน้า ผมจะตั้งใจทำงานครับ อย่าทำอะไรผมเลย</p>
                                </div>
                                <div className='MessageYouBox'>
                                    <p className='MessageYou'>อะนี่เลขบัญชีจดไว้ซะ เวลาเหยื่อติดกับก็ให้มันโอนเข้ามาในนี้เลย</p>
                                </div>
                                <div className='MessageYouBox'>
                                    <p className='MessageYou'>4Liq4Lih4Lia4Lix4LiV4Li04LiC4Lit4LiH4LiJ4Lix4LiZ4LiZ4LmI4Liw4LmA4Lir4Lij4LitIOC4luC5ieC4suC4reC4ouC4suC4geC5hOC4lOC5ieC4geC5h+C5gOC4reC4suC5hOC4m+C4i+C4tCDguYTguJvguKvguLLguYDguK3guLLguYDguKXguKIg4LiJ4Lix4LiZ4LmA4Lit4Liy4LiX4Li44LiB4Lit4Lii4LmI4Liy4LiH4Lia4LiZ4LmC4Lil4LiB4LmE4Lib4LmE4Lin4LmJ4LiX4Li14LmI4LiZ4Lix4LmJ4LiZ4Lir4Lih4LmB4Lil4LmJ4Lin</p>
                                </div>
                                <div className='MessageMeBox'>
                                    <p className='MessageMe'>ขอโทษนะครับหัวหน้า สิ่งนี้มันคือเลขบัญชีจริงๆหรือ</p>
                                </div>
                                <div className='MessageYouBox'>
                                    <p className='MessageYou'>🙄 เด็กสมัยนี้ไม่รู้จัก Base64 กันบ้างรึไง</p>
                                </div>
                                <div className='MessageMeBox'>
                                    <p className='MessageMe'>👏🏻👏🏻👏🏻👏🏻</p>
                                </div>
                            </div>
                            <div className='BottomPhone'>
                                <img height={50} src="https://static.vecteezy.com/system/resources/previews/005/988/950/non_2x/photo-camera-icon-free-vector.jpg" alt="" />
                                <img height={40} src="https://icons.iconarchive.com/icons/praveen/minimal-outline/512/gallery-icon.png" alt="" />
                                <div className='Messagebar'>Message</div>
                            </div>
                        </>
                    }
                </div>

                <div>
                    <p className='SwitchSPhone' onClick={() => setMessage(!Massage)}>{Massage ? 'สลับไปคุยกับหัวหน้า' : 'สลับไปคุยกับไอแก่'}</p>
                </div>


                <div style={{ margin: '0 10%' }}>
                    <h2 style={{ color: 'var(--P1)', fontSize: '40px' }}  >รีบดูดเงินจากเหยื่อเร็วเข้า</h2>
                    <a href='https://youtu.be/dQw4w9WgXcQ?si=BCURQaHpP4sGTane' style={{ color: 'var(--P1)', textDecoration: 'none', fontSize: '24px' }} >
                        ตอนนี้คุณเป็น แก๊งคอลเซ็นเตอร์คุณต้องการจะทำการล่อล่วงคนแก่ เพื่อให้โอนเงินมาให้เจ้านายของคุณ และตอนนี้ดูเหมือนว่ายายแกจะหลงเชื่อคำลวงของคุณเรียบร้อยแล้ว และต้องการจะโอนเงินให้คุณตามที่ต้องการ แต่เดี๋ยวนะ ไอหัวหน้าของคุณ
                        มันดัน เข้ารหัสเลขบัญชีที่ต้องส่งให้ยายแก่ แถมต้อนนี้ยายเริ่มดูเหมือนจะเริ่มไม่เชื่อเราแล้ว เร็วเข้าคุณต้องหาวิธีถอดรหัสหาเลขบัญชีนะ ว่าแต่ข้อความที่เข้ารหัสมันอยู่ไหน
                    </a>
                </div>

            </div>
        </>
    );
};

export default Level6;
