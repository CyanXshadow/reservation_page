import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import white6table from './imgs/white6table.jpeg';
import white4table from './imgs/white4table.jpeg';
import white2table from './imgs/white2table.jpeg';
import blue6table from './imgs/blue6table.jpeg';
import blue4table from './imgs/blue4table.jpeg';
import blue2table from './imgs/blue2table.jpeg';
import grey6table from './imgs/grey6table.jpeg';
import grey4table from './imgs/grey4table.jpeg';
import grey2table from './imgs/grey2table.jpeg';
import toilet from './imgs/toilet.jpeg';
import backg from './imgs/backg.jpeg';


const ImageChanger = ({ imageNumber }) => {
  const [imageColor, setImageColor] = useState('white');
  const [clickedImage, setClickedImage] = useState(null);
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');

  const handleReservation = async () => {
    try {
      await axios.post('/api/reserve', { date, timeSlot, imageId: clickedImage });

    } catch (error) {
    }
  };


  const changeImage = (imageElement) => {
    if (imageElement.src.includes("white6table")) {
      imageElement.src = blue6table;
    } else {
      imageElement.src = white6table;
    }
  };
  const changeImage2 = (imageElement) => {
    if (imageElement.src.includes("white4table")) {
      imageElement.src = blue4table;
    } else {
      imageElement.src = white4table;
    }
  };
  const changeImage3 = (imageElement) => {
    if (imageElement.src.includes("white2table")) {
      imageElement.src = blue2table;
    } else {
      imageElement.src = white2table;
    }
  };

  const getImageSource = () => {
    switch (imageNumber) {
      case "6":
        return imageColor === 'white' ? white6table : blue6table;
      case "4":
        return imageColor === 'white' ? white4table : blue4table;
      case "2":
        return imageColor === 'white' ? white2table : blue2table;
      default:
        return '';
    }
  };

  return (
    <div className="image-container">
      <h1>Reserve<br /> a Table</h1>
      <img src={backg} className="img_int" alt="background" />
      <div className="overlay">
        <table className="topt">
          <tr>
            <td><input type="date" className="input" /></td>
            <td>
              <table className="slots">
                <tr>
                  <td>
                    <select>
                      <option value="male">Slot selection</option>
                      <option value="male">09:00AM-10:00AM</option>
                      <option value="female">10:00AM-11:00AM</option>
                      <option value="others">11:00AM-12:00PM</option>
                    </select>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <div className="interior_rest">
          <table>
            <tr>
              <td><img src={getImageSource(`./imgs/${getImageSource()}`)} className={`img ${clickedImage === 'main_611' ? 'clicked' : ''}`} id={`main_611`} onClick={() => changeImage(document.getElementById('main_611'))}/></td>
              <td><img src={getImageSource(`./imgs/${getImageSource()}`)} className={`img ${clickedImage === 'main_612' ? 'clicked' : ''}`} id={`main_612`} onClick={() => changeImage(document.getElementById('main_612'))}/></td>
              <td><img src={getImageSource(`./imgs/${getImageSource()}`)} className={`img ${clickedImage === 'main_613' ? 'clicked' : ''}`} id={`main_613`} onClick={() => changeImage(document.getElementById('main_613'))}/></td>
              <td><img src={getImageSource(`./imgs/${getImageSource()}`)} className={`img ${clickedImage === 'main_614' ? 'clicked' : ''}`} id={`main_614`} onClick={() => changeImage(document.getElementById('main_614'))}/></td>
              <td><img src={getImageSource(`./imgs/${getImageSource()}`)} className={`img ${clickedImage === 'main_615' ? 'clicked' : ''}`} id={`main_615`} onClick={() => changeImage(document.getElementById('main_615'))}/></td>
              <td><img src={toilet} className="img3" /></td>
            </tr>
            <tr>
              <td><img src={getImageSource(`./imgs/${getImageSource()}`)} className={`img ${clickedImage === 'main_421' ? 'clicked' : ''}`} id={`main_421`} onClick={() => changeImage2(document.getElementById('main_421'))}/></td>
              <td></td>
              <td><img src={getImageSource(`./imgs/${getImageSource()}`)} className={`img ${clickedImage === 'main_223' ? 'clicked' : ''}`} id={`main_223`} onClick={() => changeImage3(document.getElementById('main_223'))}/></td>
              <td></td>
              <td><img src={getImageSource(`./imgs/${getImageSource()}`)} className={`img ${clickedImage === 'main_425' ? 'clicked' : ''}`} id={`main_425`} onClick={() => changeImage2(document.getElementById('main_425'))}/></td>
            </tr>
            <tr>
              <td><img src={getImageSource(`./imgs/${getImageSource()}`)} className={`img ${clickedImage === 'main_431' ? 'clicked' : ''}`} id={`main_431`} onClick={() => changeImage2(document.getElementById('main_431'))}/></td>
              <td><img src={getImageSource(`./imgs/${getImageSource()}`)} className={`img ${clickedImage === 'main_232' ? 'clicked' : ''}`} id={`main_232`} onClick={() => changeImage3(document.getElementById('main_232'))}/></td>
              <td><img src={getImageSource(`./imgs/${getImageSource()}`)} className={`img ${clickedImage === 'main_233' ? 'clicked' : ''}`} id={`main_233`} onClick={() => changeImage3(document.getElementById('main_233'))}/></td>
              <td><img src={getImageSource(`./imgs/${getImageSource()}`)} className={`img ${clickedImage === 'main_234' ? 'clicked' : ''}`} id={`main_234`} onClick={() => changeImage3(document.getElementById('main_234'))}/></td>
              <td><img src={getImageSource(`./imgs/${getImageSource()}`)} className={`img ${clickedImage === 'main_435' ? 'clicked' : ''}`} id={`main_435`} onClick={() => changeImage2(document.getElementById('main_435'))}/></td>
            </tr>
            <tr>
              <td><img src={getImageSource(`./imgs/${getImageSource()}`)} className={`img ${clickedImage === 'main_441' ? 'clicked' : ''}`} id={`main_441`} onClick={() => changeImage2(document.getElementById('main_441'))}/></td>
              <td></td>
              <td><img src={getImageSource(`./imgs/${getImageSource()}`)} className={`img ${clickedImage === 'main_243' ? 'clicked' : ''}`} id={`main_243`} onClick={() => changeImage3(document.getElementById('main_243'))}/></td>
              <td></td>
              <td><img src={getImageSource(`./imgs/${getImageSource()}`)} className={`img ${clickedImage === 'main_445' ? 'clicked' : ''}`} id={`main_445`} onClick={() => changeImage2(document.getElementById('main_445'))}/></td>
            </tr>
            <tr>
              <td><img src={getImageSource(`./imgs/${getImageSource()}`)} className={`img ${clickedImage === 'main_451' ? 'clicked' : ''}`} id={`main_451`} onClick={() => changeImage2(document.getElementById('main_451'))}/></td>
              <td><img src={getImageSource(`./imgs/${getImageSource()}`)} className={`img ${clickedImage === 'main_452' ? 'clicked' : ''}`} id={`main_452`} onClick={() => changeImage2(document.getElementById('main_452'))}/></td>
              <td><img src={getImageSource(`./imgs/${getImageSource()}`)} className={`img ${clickedImage === 'main_653' ? 'clicked' : ''}`} id={`main_653`} onClick={() => changeImage(document.getElementById('main_653'))}/></td>
              <td><img src={getImageSource(`./imgs/${getImageSource()}`)} className={`img ${clickedImage === 'main_654' ? 'clicked' : ''}`} id={`main_654`} onClick={() => changeImage(document.getElementById('main_654'))}/></td>
            </tr>
          </table>
        </div>
        <button className="" value="Select the menu" href="#">Select the menu</button>
      </div>
    </div>
  );
}

// const App = () => {
//   return (
//     <div>
//       <ImageChanger imageNumber="6" />
//       <ImageChanger imageNumber="4" />
//       <ImageChanger imageNumber="2" />
//     </div>
//   );
// };

export default ImageChanger;
