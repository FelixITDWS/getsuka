import './Getsuka.scss'

import getsukaHi from '../../assets/getsuka-hi.png'

function Getsuka() {
    return(
    <div className='profile'>
      <div className="left-title-bg">
    </div>
    <div className="container">
      <h2 className="left-title">自我介紹</h2>
    </div>
    <div className="profile-content-bg">
      <div className="container profile-container">
        <div className="profile-content">
          <div className="profile-subtitle">
            <img src={getsukaHi} alt="hi" />
            <h3>玥華です！</h3>
          </div>
          <ul className="profile-text">
            <li>
              <p>是隻世界上比較聰明的金魚！</p>
            </li>
            <li>
              <p>為了尋找同類離開了家鄉，來到了這裡 ✦</p>
            </li>
            <li>
              <p>願意成為我的朋友嗎 ( ^ω^)</p>
            </li>
            <li>
              <p>喜歡 遊戲 ✶ 拼圖！</p>
            </li>
            <li className="mail">
              <p>信箱：<a href="mailto:getsuka1008@gmail.com">getsuka1008@gmail.com</a></p>
            </li>
          </ul>
        </div>
        <ul className="profile-tags">
          <li>個人勢</li>
          <li><span>粉絲名: </span>魚玥飯</li>
          <li><span>FanArt: </span>#華畫</li>
          <li><span>Call: </span>#華到這</li>
          <li><span>直播: </span>#GetsukaLive</li>
        </ul>
      </div>
    </div>
        </div>
    );
}

export default Getsuka