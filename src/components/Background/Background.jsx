import './Background.css';
import video1 from '../../../public/Assets/video1.mp4';
import img1 from '../../../public/Assets/image1.png';
import img2 from '../../../public/Assets/image2.png';
import img3 from '../../../public/Assets/image3.png';

const Background = ({playStatus, heroCount}) => {
  if (playStatus) {
    return (
      <video className="background fad-in" autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={img1} className="background fad-in" alt="" />;
  } else if (heroCount === 1) {
    return <img src={img2} className="background fad-in" alt="" />;
  } else if (heroCount === 2) {
    return <img src={img3} className="background fad-in" alt="" />;
  }
};

export default Background;
