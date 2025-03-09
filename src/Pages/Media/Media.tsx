import './Media.scss'

import youtube from '../../assets/youtube.svg'
import x from '../../assets/x.svg'
import discord from '../../assets/discord.svg'
import twitch from '../../assets/twitch.svg'
import instagram from '../../assets/instagram.svg'

function Media() {
    return(
        <div>
            <div className='media-container'>
                <ul>
                    <li>
                        <a href='https://www.youtube.com/@GetsukaCh' target='_blank'>
                            <img src={youtube} alt='youtube' />
                        </a>
                        <span>Youtube</span>
                    </li>
                    <li>
                        <a href='https://x.com/GetsukaV' target='_blank'>
                            <img src={x} alt='x' />
                            <span>X</span>
                        </a>
                    </li>
                    <li>
                        <a href='https://discord.com/invite/bDNTsjnKDq' target='_blank'>
                            <img src={discord} alt='discord' />
                            <span>Discord</span>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.twitch.tv/getsuka1008' target='_blank'>
                            <img src={twitch} alt='twitch' />
                            <span>Twitch</span>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/getsukav' target='_blank'>
                            <img src={instagram} alt='instagram' />
                            <span>Instagram</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export { Media }