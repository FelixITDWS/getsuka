import './NameCard.scss'

function NameCard({info, img, link}:{info: string, img: string, link: string}){
  return (
    <div className="card">
        <div className="card-header">
            <p className="character-info">{info}</p>
        </div>
        <a href={link} target="_blank">
            <img className="character-img" src={img} alt={info} />
        </a>
    </div>
  );
};

export default NameCard;