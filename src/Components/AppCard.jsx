import { useNavigate } from "react-router";


function formatNumber(num) {
  if (isNaN(num) || num === null) {
    return '0';
  }
  if (num >= 1_000_000_000) {
    const formattedNum = (num / 1_000_000_000).toFixed(1);
    return parseFloat(formattedNum) + 'B';
  }
  if (num >= 1_000_000) {
    const formattedNum = (num / 1_000_000).toFixed(1);
    return parseFloat(formattedNum) + 'M';
  }

  if (num >= 1_000) {
    const formattedNum = (num / 1_000).toFixed(1);
    return parseFloat(formattedNum) + 'K';
  }
  return num.toString();
}

const AppCard = ({image, name, downloads, ratings, id}) => {
    const navigate = useNavigate()
    return (
        <div onClick={()=> navigate(`/app/${id}`)} className="app-card">
            <img src={image} alt="" className="app-image" />
            <p className="app-name">{name}</p>
            <div className="app-states">
                <div className="app-downloads">
                    <img src="/assets/installed-app-download.svg" alt="" className="download-icon" /> {formatNumber(downloads)}
                </div>
                <div className="app-ratings">
                    <img src="/assets/icon-ratings.png" alt="" className="rating-icon" /> {ratings}
                </div>
            </div>
        </div>
    );
};

export default AppCard;