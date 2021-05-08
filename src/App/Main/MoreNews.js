import React from "react"
import '../../common/style/base.css'
import "./main.css"

import c_1 from '../img/01.jpg'
import c_2 from '../img/02.jpg'
import c_3 from '../img/03.jpg'
import c_4 from '../img/04.jpg'
import c_5 from '../img/05.jpg'
import c_6 from '../img/06.jpg'
import c_7 from '../img/07.jpg'


const MoreNews = () => {
  return (
    <>
      <div className="row img-btn-box">
        <div className="col-md-12 col-xs-12 main-box-wrapper">
          <div className="wrap-main-cont">
            <div className="cont-img1">
              <img src={c_1} alt="no-image" />
              <div className="main-cont-line main-cont-line1"></div>
              <div className="caption-block">
                <div className="caption">
Among Us вошла в топ-10 игр
                        </div>
              </div>
            </div>
            <div className="cont-img2">
              <img src={c_2} alt="no-image" />
              <div className="main-cont-line main-cont-line2"></div>
              <div className="caption-block2">
                <div className="caption2">
Рецензия на фильм Джентльмены 
                        </div>
              </div>
            </div>
            <div className="cont-img3">
              <img src={c_3} alt="no-image" className="img3" />
              <div className="main-cont-line main-cont-line2"></div>
              <div className="caption-block2">
                <div className="caption2">
Смотреть обзор Холодное сердце 2
                        </div>
              </div>
            </div>
            <div className="cont-img4">
              <img src={c_4} alt="no-image" />
            </div>
            <div className="cont-img5">
              <img src={c_5} alt="no-image" />
              <div className="main-cont-line main-cont-line5"></div>
              <div className="caption-block5">
                <div className="caption2 caption5">
Пираты Карибского моря: Мертвецы не рассказывают сказки
                        </div>
              </div>
            </div>
            <div className="cont-img6">
              <img src={c_6} alt="no-image" />
            </div>
            <div className="comment-img6">
              <div className="triangle-left"></div>
              <div className="main-cont-line main-cont-line3"></div>
              <div className="comment-img6-name">
                <span className="img6-name-b">Тролли</span> Мировой тур
                      </div>
              <div className="comment-img6-text">
              Краткий обзор мультфильма. Новый остросюжетный мультфильм ворвался в российский прокат.
                      </div>
            </div>
            <div className="comment-img7">
              <div className="triangle-top"></div>
              <div className="main-cont-line main-cont-line3"></div>
              <div className="comment-img6-name">
                <span className="img6-name-b">
1+1
</span>(Один плюс Один) 
                      </div>
              <div className="comment-img6-text">
               Лучшие фильмы, вышедшие за последние 10 лет смотреть онлайн подборку.
 Фильм 2012 Драма, Комедия, Биография
                      </div>
            </div>
            <div className="cont-img7">
              <img
                src={c_7}
                className="img7"
                alt="no-image"
              />
              <div className="main-cont-line main-cont-line7"></div>
              <div className="caption-block7">
                <div className="caption2 caption7">
 Рейтинг
                          <span className="img6-name-b"> лучших </span>
                          фильмов года по мнению зрителей 
                        </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
  export default MoreNews