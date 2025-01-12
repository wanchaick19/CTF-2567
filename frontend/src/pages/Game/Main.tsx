import React from "react";
import "./main.css";
import Level1 from "../../components/Level1";
import Level3 from "../../components/Level3";
import Level4 from "../../components/Level4";
import Level5 from "../../components/Level5";
import Level6 from "../../components/Level6";


const Main: React.FC = () => {
    
    return (
        <>
            <div>Hello</div>
            <Level1 />
            
            <Level3 />
            <Level4 />
            <Level5 />
            <Level6 />
        </>
    );
};

export default Main;
