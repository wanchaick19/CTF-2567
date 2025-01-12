import React from "react";
import "./main.css";
import Level3 from "../../components/Level3";
import Level4 from "../../components/Level4";
import Level5 from "../../components/Level5";
import Level6 from "../../components/Level6";
import { message } from "antd";

const Main: React.FC = () => {
    const userLevel1 = localStorage.getItem("Level-1");
    const userLevel2 = localStorage.getItem("Level-2");
    const userLevel3 = localStorage.getItem("Level-3");
    const userLevel4 = localStorage.getItem("Level-4");
    const userLevel5 = localStorage.getItem("Level-5");
    const userLevel6 = localStorage.getItem("Level-6");

    const reset = () => {
        localStorage.clear();
        message.success("reset your level.");
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    };
    return (
        <>
            {/* แทบที่จะเช็คว่าทำข้อไหนผ่านไปแล้วบ้าง */}
            <div className="Level-user">
                <div className={`Level-sub ${userLevel1 == 'ture' ? 'pass' : 'no'}`}>I</div>
                <div className={`Level-sub ${userLevel2 == 'ture' ? 'pass' : 'no'}`}>II</div>
                <div className={`Level-sub ${userLevel3 == 'ture' ? 'pass' : 'no'}`}>III</div>
                <div className={`Level-sub ${userLevel4 == 'ture' ? 'pass' : 'no'}`}>IV</div>
                <div className={`Level-sub ${userLevel5 == 'ture' ? 'pass' : 'no'}`}>V</div>
                <div className={`Level-sub ${userLevel6 == 'ture' ? 'pass' : 'no'}`}>VI</div>
            </div>
            <p className="reset" onClick={reset}>RESET</p>
            <Level3 />
            <Level4 />
            <Level5 />
            <Level6 />
        </>
    );
};

export default Main;
