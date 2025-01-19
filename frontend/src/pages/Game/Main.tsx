import React, { useState } from "react";
import "./main.css";
import Level1 from "../../components/Level1";
import Level2 from "../../components/Level2";
import Level3 from "../../components/Level3";
import Level4 from "../../components/Level4";
import Level5 from "../../components/Level5";
import Level6 from "../../components/Level6";
import { message } from "antd";
import Level7 from "../../components/Level7";


const Main: React.FC = () => {
    const userLevel1 = localStorage.getItem("Level-1");
    const userLevel2 = localStorage.getItem("Level-2");
    const userLevel3 = localStorage.getItem("Level-3");
    const userLevel4 = localStorage.getItem("Level-4");
    const userLevel5 = localStorage.getItem("Level-5");
    const userLevel6 = localStorage.getItem("Level-6");
    const userLevel7 = localStorage.getItem("Level-7");

    const reset = () => {
        localStorage.clear();
        message.success("reset your level.");
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    };

    const [pageLevel, setLevel] = useState(1);
    const totalPages = 7;

    return (
        <>
            {/* แทบที่จะเช็คว่าทำข้อไหนผ่านไปแล้วบ้าง */}
            <div className="Level-user">
                <div onClick={() => setLevel(1)} className={`Level-sub ${userLevel1 == 'ture' ? 'pass' : 'no'}`}>I</div>
                <div onClick={() => setLevel(2)} className={`Level-sub ${userLevel2 == 'ture' ? 'pass' : 'no'}`}>II</div>
                <div onClick={() => setLevel(3)} className={`Level-sub ${userLevel3 == 'ture' ? 'pass' : 'no'}`}>III</div>
                <div onClick={() => setLevel(4)} className={`Level-sub ${userLevel4 == 'ture' ? 'pass' : 'no'}`}>IV</div>
                <div onClick={() => setLevel(5)} className={`Level-sub ${userLevel5 == 'ture' ? 'pass' : 'no'}`}>V</div>
                <div onClick={() => setLevel(6)} className={`Level-sub ${userLevel6 == 'ture' ? 'pass' : 'no'}`}>VI</div>
                <div onClick={() => setLevel(7)} className={`Level-sub ${userLevel7 == 'ture' ? 'pass' : 'no'}`}>VII</div>
            </div>
            <p className="reset" onClick={reset}>RESET</p>
            {/* ข้อมูลหน้าปัจจุบัน */}
            <div className="Page">
                <p >{pageLevel}</p>
            </div>
            <div className="BtnNextpage">
                {/* ปุ่มย้อนกลับ */}
                {pageLevel > 1 && (
                    <p onClick={() => setLevel(pageLevel - 1)}>◀ Previous</p>
                )}


                {/* ปุ่มไปหน้าถัดไป */}
                {pageLevel < totalPages && (
                    <p onClick={() => setLevel(pageLevel + 1)}>Next Page ▶</p>
                )}
            </div>

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






        </>
    );
};

export default Main;
