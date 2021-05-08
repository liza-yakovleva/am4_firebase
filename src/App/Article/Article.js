// import React,{useState} from 'react'
import Slider from 'react-slick'
import CustomSelect from "../Main/CustomSelect"
import '../../common/style/base.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './article.css'
import { database } from '../../firebase'
import ArticleItem from './ArticleItem'
import React, { Component } from 'react'
import settings from '../../common/settings'
import {styles} from '../../common/settings'
import {optionsArticle} from '../../common/settings'
class Article extends Component {
  constructor(props) {
        super(props);
    this.state = {
        // data_article: [],
        selectedCategory: "all",
            }
  }
  
  componentDidMount() {
    database.ref('/0/article_base/').on('value', (snapshot) => {
      this.setState({
        data_article: snapshot.val()
      })
    })
    }
  
 onChangeInput = (val) => {
         this.setState({
           selectedCategory: val.value, 
         })
   
    }
  
  render() {
    
    // console.log(this.state.data_article)
    // console.log(settings)
    // console.log(styles)
    // console.log(optionsArticle)
    console.log(this.props)
    
    if (this.state.data_article) {
      return (
        <div className="container">
          <div className="row artc-main-row">
            <div className="col-md-12 col-xs-12 artc-main-box">
              <div className="row artc-sort-row">
                <div className="col-md-6 col-xs-5 main-choice-cont">
                  <CustomSelect
                    style={styles.select}
                    options={optionsArticle}
                    defaultValue={optionsArticle[0]}
                    onChange={this.onChangeInput}
                  />
                </div>
                <div className="col-md-6 col-xs-7 artc-main-sort">
                  <div className="col-md-6 col-xs-6 artc-btn-popular">
                    <button
                      onClick={() => this.setState({ selectedCategory: "popular" })}
                      className="artc-popular"
                    >
                      Популярные
                </button>
                  </div>
                  <div className="col-md-6 col-xs-6 artc-btn-new">
                    <button
                      onClick={() => this.setState({ selectedCategory: "new" })}
                      className="artc-new"
                    >
                      Новые
                </button>
                  </div>
                </div>
              </div>
              <div className="artc-wrap-block">
                <div className="artc-bl">
                  <div className="artc-block" />
                </div>
                <div className="artc-art-container">
                  <div className="row artc-wrap-main-line">
                    <div className="col-md-2 col-xs-2 artc-news artc-news-art">
                      <div className="artc-main-name">Статьи</div>
                    </div>
                    <div className="col-md-1 col-xs-1` artc-news">
                      <div className="artc-name-noties-box">
                        <div className="artc-name-noties">{this.state.selectedCategory}</div>
                      </div>
                    </div>

                    <div className="col-md-7 col-xs-7 "></div>
                  </div>

                  <div className="row artc-art-cards-row">
                    <div className="artc-art-cards">
                      <Slider {...settings}>
                        {this.state.selectedCategory !== "all" &&
                          this.state.selectedCategory !== "new" &&
                          this.state.selectedCategory !== "popular"
                          ? this.state.data_article
                            .filter((item) => item.category === this.state.selectedCategory)
                            .map(
                              ({
                                id,
                                date,
                                month,
                                image,
                                s_name,
                                share,
                                comment,
                                name,
                                description,
                                text,
                              }) => (
                              
                                <div className="artc-art-card" key={id}>
                                  <ArticleItem
                                    id={id}
                                    date={date}
                                    month={month}
                                    image={image}
                                    s_name={s_name}
                                    share={share}
                                    comment={comment}
                                    name={name}
                                    description={description}
                                    text={text}
                                  />
                                </div>
                              
                              )
                            )
                          : this.state.selectedCategory !== "all"
                            ? this.state.data_article
                              .filter((item) => item.genre === this.state.selectedCategory)
                              .map(
                                ({
                                  id,
                                  date,
                                  month,
                                  image,
                                  s_name,
                                  share,
                                  comment,
                                  name,
                                  description,
                                  text,
                                }) => (
                                  <div className="artc-art-card" key={id}>
                                    <ArticleItem
                                      id={id}
                                      date={date}
                                      month={month}
                                      image={image}
                                      s_name={s_name}
                                      share={share}
                                      comment={comment}
                                      name={name}
                                      description={description}
                                      text={text}
                                    />
                                  </div>
                                )
                              )
                            : this.state.data_article.map(
                              ({
                                id,
                                date,
                                month,
                                image,
                                s_name,
                                share,
                                comment,
                                name,
                                description,
                                text,
                              }) => (
                                <div className="artc-art-card" key={id}>
                                  <ArticleItem
                                    id={id}
                                    date={date}
                                    month={month}
                                    image={image}
                                    s_name={s_name}
                                    share={share}
                                    comment={comment}
                                    name={name}
                                    description={description}
                                    text={text}
                                  />
                                </div>
                              )
                            )}
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    } else {return null}
  }
}

export default Article;
