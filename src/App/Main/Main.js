import React from "react"
import CustomSelect from "./CustomSelect"
import '../../common/style/base.css'
import "./main.css"
import LoadMore from "./LoadMore"




import main_decor from '../img/main-decor.png'
import cont_img1 from '../img/cont-img1.png'
import cont_img2 from '../img/cont-img2.png'
import cont_img3 from '../img/cont-img3.jpg'
import cont_img4 from '../img/cont-img4.png'
import cont_img5 from '../img/cont-img5.png'
import cont_img6 from '../img/cont-img6.png'
import cont_img7 from '../img/cont-img7.png'

const Main =()=> {
    return (
      <main className="main">
        <div className="container">
          <div className="row main-row">
            <div className="col-md-12 col-xs-12 main-box">
              <div className="row sort-row">
                <div className="col-md-6 col-xs-6 decor-none">
                  <div className="main-decor">
                    <img
                      src={main_decor}
                      alt="decor"
                      className="main-decor-img"
                    />
                  </div>
                </div>
              </div>
              <div className="row wrap-main-line">
                <div className="col-md-8 col-xs-8 news">
                  <div className="main-name">ГЛАВНАЯ</div>
                </div>
                <div className="col-md-1 col-xs-1 news">
                  <div className="name-noties-box">
                    <div className="name-noties">Все новости</div>
                  </div>
                </div>
                <div className="col-md-7 col-xs-7 main-choice-cont">
                  
                 
                  
                </div>
              </div>
              <div className="row img-btn-box">
                <div className="col-md-12 col-xs-12 main-box-wrapper">
                  <div className="wrap-main-cont">
                    <div className="cont-img1">
                      <img src={cont_img1} alt="no-image"/>
                      <div className="main-cont-line main-cont-line1"></div>
                      <div className="caption-block">
                        <div className="caption">
                          Как инди-студия утерла нос Telltale
                        </div>
                      </div>
                    </div>
                    <div className="cont-img2">
                      <img src={cont_img2} alt = "no-image"/>
                      <div className="main-cont-line main-cont-line2"></div>
                      <div className="caption-block2">
                        <div className="caption2">
                          Elite: Dangerous в Steam за 3000 р
                        </div>
                      </div>
                    </div>
                    <div className="cont-img3">
                      <img src={cont_img3} alt="no-image" className="img3"/>
                      <div className="main-cont-line main-cont-line2"></div>
                      <div className="caption-block2">
                        <div className="caption2">
                          Русский трейлер ПК-версии GTA V
                        </div>
                      </div>
                    </div>
                    <div className="cont-img4">
                      <img src={cont_img4} alt="no-image"/>
                    </div>
                    <div className="cont-img5">
                    <img src={cont_img5} alt="no-image"/>
                      <div className="main-cont-line main-cont-line5"></div>
                      <div className="caption-block5">
                        <div className="caption2 caption5">
                          Карточный домик продлили до 4-го сезона!
                        </div>
                      </div>
                    </div>
                    <div className="cont-img6">
                      <img src={cont_img6} alt="no-image"/>
                    </div>
                    <div className="comment-img6">
                      <div className="triangle-left"></div>
                      <div className="main-cont-line main-cont-line3"></div>
                      <div className="comment-img6-name">
                        <span className="img6-name-b">Рейб</span>- новый босс в
                        Crawl
                      </div>
                      <div className="comment-img6-text">
                        Crawl — онлайновый слэшер для ПК, в котором игроки по
                        очереди играют за героя и всех монстров в лабиринте.
                      </div>
                    </div>
                    <div className="comment-img7">
                      <div className="triangle-top"></div>
                      <div className="main-cont-line main-cont-line3"></div>
                      <div className="comment-img6-name">
                        <span className="img6-name-b">Diablo 3</span> с видом от
                        третьего лица
                      </div>
                      <div className="comment-img6-text">
                        Если вы когда-либо задавались вопросом, как бы выглядела
                        Diablo 3 с видом от третьего лица, то вашим
                        теоретическим изысканиям настал конец.
                      </div>
                    </div>
                    <div className="cont-img7">
                      <img
                        src={cont_img7}
                        className="img7"
                        alt="no-image"
                     />
                      <div className="main-cont-line main-cont-line7"></div>
                      <div className="caption-block7">
                        <div className="caption2 caption7">
                          Это то, зачем нужны игры: мы спасли
                          <span className="img6-name-b">350</span>
                          сирийских детей
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-xs-12">
                  
                  
                  <LoadMore />
                 
                    
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
export default Main