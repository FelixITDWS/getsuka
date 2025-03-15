import './Character.scss'
import NameCard from './NameCard/NameCard';

import mama from '../../assets/mama.jpg';
import aka from '../../assets/AKA.jpg';
import nami from '../../assets/nami.png';

const characterData = [
    {
        info: '繪師麻麻：貓柳吟葉',
        link: 'https://x.com/bacon_rotg',
        img: mama,
    },
    {
        info: 'Live2D：AKA',
        link: 'https://x.com/akafireinlive2d',
        img: aka,
    },
    {
        info: '3D：娜米老公',
        link: 'https://x.com/NamiHusband_1',
        img: nami,
    }
];

function Character() {
    return(
        <>
            <div className="character-container">
            {characterData.map((c, idx) => {
            return (
                <NameCard
                key={`c-${idx}`}
                info={c.info}
                img={c.img}
                link={c.link}
                />
            )
            })}
            </div>
        </>
    );
}

export { Character };
