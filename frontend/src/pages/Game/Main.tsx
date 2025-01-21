import React, { useEffect, useRef, useState } from "react";
import "./main.css";
import Level0 from "../../components/Level0";
import Level1 from "../../components/Level1";
import Level2 from "../../components/Level2";
import Level3 from "../../components/Level3";
import Level4 from "../../components/Level4";
import Level5 from "../../components/Level5";
import Level6 from "../../components/Level6";
import { message } from "antd";
import Level7 from "../../components/Level7";
import Music from "../../assets/CanyouFeelMyHeart.mp3";


const Main: React.FC = () => {
    const [userLevels, setUserLevels] = useState({
        userLevel1: localStorage.getItem("Level-1"),
        userLevel2: localStorage.getItem("Level-2"),
        userLevel3: localStorage.getItem("Level-3"),
        userLevel4: localStorage.getItem("Level-4"),
        userLevel5: localStorage.getItem("Level-5"),
        userLevel6: localStorage.getItem("Level-6"),
        userLevel7: localStorage.getItem("Level-7"),
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setUserLevels({
                userLevel1: localStorage.getItem("Level-1"),
                userLevel2: localStorage.getItem("Level-2"),
                userLevel3: localStorage.getItem("Level-3"),
                userLevel4: localStorage.getItem("Level-4"),
                userLevel5: localStorage.getItem("Level-5"),
                userLevel6: localStorage.getItem("Level-6"),
                userLevel7: localStorage.getItem("Level-7"),
            });
        }, 1000);

        // ล้าง interval เมื่อ component ถูก unmount
        return () => clearInterval(interval);
    }, []);

    const reset = () => {
        localStorage.clear();
        message.success("reset your level.");
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    };

    const [pageLevel, setLevel] = useState(0);
    const totalPages = 7;



    //========================================เพลง========================================
    const [isPlaying, setIsPlaying] = useState(false); // สถานะการเล่นเพลง
    const audioRef = useRef<HTMLAudioElement | null>(null); // อ้างอิงถึง audio element



    const toggleMusic = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause(); // หยุดเพลง
            } else {
                audioRef.current.play(); // เล่นเพลง
            }
            setIsPlaying(!isPlaying); // สลับสถานะการเล่นเพลง
        }
    };

    const handleAudioLoaded = () => {
        if (audioRef.current) {
            audioRef.current.volume = 0.1; // ตั้งค่าระดับเสียง
        }
    };
    return (
        <>
            {/* แทบที่จะเช็คว่าทำข้อไหนผ่านไปแล้วบ้าง */}
            <div className="Level-user">
                <div onClick={() => setLevel(1)} className={`Level-sub ${userLevels.userLevel1 == 'ture' ? 'pass' : 'no'}`}>I</div>
                <div onClick={() => setLevel(2)} className={`Level-sub ${userLevels.userLevel2 == 'ture' ? 'pass' : 'no'}`}>II</div>
                <div onClick={() => setLevel(3)} className={`Level-sub ${userLevels.userLevel3 == 'ture' ? 'pass' : 'no'}`}>III</div>
                <div onClick={() => setLevel(4)} className={`Level-sub ${userLevels.userLevel4 == 'ture' ? 'pass' : 'no'}`}>IV</div>
                <div onClick={() => setLevel(5)} className={`Level-sub ${userLevels.userLevel5 == 'ture' ? 'pass' : 'no'}`}>V</div>
                <div onClick={() => setLevel(6)} className={`Level-sub ${userLevels.userLevel6 == 'ture' ? 'pass' : 'no'}`}>VI</div>
                <div onClick={() => setLevel(7)} className={`Level-sub ${userLevels.userLevel7 == 'ture' ? 'pass' : 'no'}`}>VII</div>
            </div>
            <p className="reset" onClick={reset}>RESET</p>
            {/* ข้อมูลหน้าปัจจุบัน */}
            <div className="Page">
                <p >{pageLevel}</p>
            </div>
            <div className="BtnNextpage">
                {/* ปุ่มย้อนกลับ */}
                {pageLevel > 0 && (
                    <p className="BtnNextpagesub" onClick={() => setLevel(pageLevel - 1)}>◀ Previous</p>
                )}


                {/* ปุ่มไปหน้าถัดไป */}
                {pageLevel < totalPages && (
                    <p className="BtnNextpagesub" onClick={() => setLevel(pageLevel + 1)}>Next Page ▶</p>
                )}
            </div>

            {pageLevel == 0 &&
                <Level0 />
            }
            {pageLevel == 1 &&
                <div className="animation-Next-page">
                    <Level1 />
                </div>
            }
            {pageLevel == 2 &&
                <div className="animation-Next-page">
                    <Level2 />
                </div>
            }
            {pageLevel == 3 &&
                <div className="animation-Next-page">
                    <Level3 />
                </div>
            }
            {pageLevel == 4 &&
                <div className="animation-Next-page">
                    <Level4 />
                </div>
            }
            {pageLevel == 5 &&
                <div className="animation-Next-page">
                    <Level5 />
                </div>
            }
            {pageLevel == 6 &&
                <div className="animation-Next-page">
                    <Level6 />
                </div>
            }
            {pageLevel == 7 &&
                <div className="animation-Next-page">
                    <Level7 />
                </div>
            }


            <div>
                <audio
                    ref={audioRef}
                    src={Music} // ใส่ URL เพลงที่ต้องการ
                    loop // เล่นวนลูป
                    onLoadedMetadata={handleAudioLoaded} // ตั้งค่าเสียงเมื่อโหลดสำเร็จ
                ></audio>

                <button onClick={toggleMusic} className="Music">
                    {isPlaying ? "🔕" : "🎉"}
                </button>
            </div>

        </>
    );
};

export default Main;
