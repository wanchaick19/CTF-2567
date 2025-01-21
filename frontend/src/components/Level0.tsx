import React from 'react';
import BG from '../assets/BGimg.jpg';
import './por.css';
import BGM from '../assets/ChillGay.mp3'

const Level0: React.FC = () => {
    return (
        <>
            <div className='intro'>
                <h1 style={{fontSize:'100px',margin:'0'}} className='Animaintro1'>WELCOME</h1>
                <h3 style={{fontSize:'40px',margin:'0'}} className='Animaintro2'>To the</h3>
                <h1 style={{fontSize:'160px',margin:'0'}} className='Animaintro3'>CTF</h1>
                <h2 style={{fontSize:'30px',margin:'0'}} className='Animaintro4'>GAME</h2>
            </div>
            <img width={100} className='NPC' src="https://static-resource.np.community.playstation.net/avatar/3RD/EP40401302046_95AEACDE8DC2977BF17B_L.png" alt="" />
            <img width={100} className='NPC2' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e65da592-7512-48b6-8afb-6f3cdbcfaf62/depq7l8-31980659-f3b4-4288-be0b-aa90f5c7edc7.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U2NWRhNTkyLTc1MTItNDhiNi04YWZiLTZmM2NkYmNmYWY2MlwvZGVwcTdsOC0zMTk4MDY1OS1mM2I0LTQyODgtYmUwYi1hYTkwZjVjN2VkYzcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.f9cjri1LmgcFZVUfEu3uLqTCryo9nySNT-OJ2TFNeJI" alt="" />
            <img width={100} className='NPC3' src="https://media.tenor.com/mcpNuaDanYwAAAAj/duck-ducky.gif" alt="" />
            <audio autoPlay loop>
                <source src={BGM} type="audio/mpeg" />
            </audio>
            <img className='BGgame' src={BG} alt="" />
        </>
    );
};

export default Level0