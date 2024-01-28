import style from "./styles/slider.module.css"
import cross from './images/кросы.jpg'
import nagiev from "./images/нагиев.jpg"
import dominic from './images/доминик.jpeg'
import gatsby from './images/гетсби.jpg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,

  };
  return (
      <div className={style.sliderContainer}>
          <Slider {...settings}>

              <div>
                  <img src={gatsby} />
                  <p>Из какого фильма кадр?</p>
              </div>
              <div>
                  <img src={dominic} />
                  <p>Кто это такой уставший и забытый?</p>
              </div>
              <div>
                  <img src={nagiev} />
                  <p>Кто хозяин лысины?</p>
              </div>
              <div>
                  <p1>Я стою на краю обрыва над рекой, неподвижный – ни рукой, ни головой.<br/>
                  Внезапно в сердце сжалось, и в моей голове что-то застряло, словно замкнулось.<br/>
                      Теперь могу только петь то, что ветер надул в мои мысли.<br/>
                      Мелодия повторяется в голове, словно пленник собственных мыслей.<br/>
                      Я застываю, пока ветер несёт новые звуки – "Ла-Ла-Ла".</p1>
              </div>
              <div>
                  <p>Любая git команда</p>
              </div>
              <div>
                <p>Фильм, в котором девушка не могла понять кто ее парень, а он блестел на солнце</p>
              </div>
          </Slider >
      </div >
  );
}