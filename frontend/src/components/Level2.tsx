import React,{useState} from "react";

import "./Lee.css"
const Level2: React.FC = () => {
    
    return(
        <div>
            <div className="bg">
                <div className="box">
                    <h1 className="str">Level 02 </h1>
                </div>
                <div className="display-linebreak">
                    <div className="box-left">

                        <div className="major-order-text">
                            <div className="major-order-text">New Major Order</div>
                        </div>

                        <div className="box">
                            <p>คุณคือหน่วยรบแนวหน้าสุดแกร่งของกองกำลัง Super Earth</p>
                        </div>

                    </div>
                </div>
                <div className="box">
                    <img src="https://media1.tenor.com/m/CWJFL-nA1wIAAAAC/helldivers-2-democracy.gif" alt="" />
                </div>
            </div>
        </div>
    );
};
export default Level2