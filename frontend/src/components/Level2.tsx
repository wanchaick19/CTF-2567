import React,{useState} from "react";
import "./Lee.css"
import "./LeeMajorOrder.css"
const Level2: React.FC = () => {
    
    return(
        <div>
            <div className="bg">
                <div className="box">
                    <h1 className="str">Level 02    </h1>
                </div>

                    <div className="MOcard">
                        <div className="MObg">
                            <div className="MOtext">
                                <b>New Major Order</b>
                            </div>
                            <p className="MOinfoText">&emsp;&emsp;&emsp;เนื่องจากสงครามอันยาวนานในแนวรบฝั่งตะวันตกกับพวก AUTOMATON
                            ในที่สุดทางเบื้องบนก็มีแผนการในการยุติสงครามในครั้งนี้ โดยเราได้รับรายงานจากหน่วยข่าวกรองของ SUPER EARTH 
                            ว่า ณ ดาว AURORA BAY ยังคงมีเครื่องกำเนิดหลุมดำพร้อมกับเครื่องส่งวัตถุข้ามดวงดาว
                            สภาพพร้อมใช้งานที่ยังไม่ถูกค้นพบ รหัสยิง (LaunchCode) เพื่อให้ตัวอาวุธพร้อมใช้งาน<br /><br />
                            <b>ภารกิจของคุณ</b> ในฐานะ Helldiver ผู้มากประสบการ์ณ คือ <br /><br />
                            <li><b>เปิดใช้งาน Super Weapon เพื่อยิงถล่มดาวที่เป็นฐานที่มันหลักของศัตรู</b></li> 
                            </p>
                        </div> 
                        <div className="start-btn-container">
                            <div>
                                <a href="./Level2_2" target="_blank" className="startMission-btn">
                                    <button className="startMission-btn">
                                        <b>
                                            <p className="startMission-text">
                                                Find Launchcode
                                            </p>
                                        </b>
                                    </button>
                                </a>  
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