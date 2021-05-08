	export const items = [
    { value: "Новости", to: "/", icon: "far fa-newspaper" },
    { value: "Статьи", to: "article", icon: "fas fa-book-reader" },
    { value: "Трейлеры",to: "trailer", icon: "fas fa-video" },
    { value: "Игры", to: "game", icon: "fas fa-gamepad" },
  ]

export const styles = {
  select: {
    width: '100%',
        maxWidth: 450,
            fontSize: 25,
  },
}

export const optionsArticle = [
     { value: 'all', label: 'Все' },
  { value: 'article_serials', label: 'О сериалах' },
  { value: 'article_film', label: 'О фильмах' },
 { value: 'article_game', label: 'О играх' },
  { value: 'popular', label: 'Популярные' },
   { value: 'new', label: 'Новые' },
]

export const optionsGame = [
     { value: 'all', label: 'Все' },
  { value: 'game_action', label: 'Экшен' },
  { value: 'game_horror', label: 'Ужастик' },
 { value: 'game_fantasy', label: 'Фантастика' },
  { value: 'popular', label: 'Популярные' },
   { value: 'new', label: 'Новые' },
]

export const optionsTrailer = [
	{ value: 'all', label: 'Все' },
	{ value: 'trailer_action', label: 'Экшен' },
	{ value: 'trailer_horror', label: 'Ужасы' },
	{ value: 'trailer_fantasy', label: 'Фантастика' },
	{ value: 'popular', label: 'Популярные' },
	{ value: 'new', label: 'Новые' }
]

const settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 2,
		slidesToScroll: 1,
		rows: 2,

		autoplay: true,
		autoplaySpeed: 5000,
		cssEase: 'linear',
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					rows: 2,
					slidesToShow: 1,
					dots: true,
					variableWidth: true
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,

					dots: false,
					rows: 1
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,

					dots: false,
					rows: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					dots: false,
					slidesToScroll: 1,
					rows: 1
				}
			}
		]
}
		

export const settingsFavor = {
	dots: true,
	infinite: true,
	speed: 1000,
	slidesToShow: 1,
	slidesToScroll: 1,
	rows: 1,
	autoplay: true,
	autoplaySpeed: 5000,
	cssEase: 'linear',
	initialSlide: 0,
	responsive: [{
			breakpoint: 1200,
			settings: {
				dots: true,
				variableWidth: true
			}
		},
		{
			breakpoint: 900,
			settings: {
				dots: false,
			}
		},
	]
}


export default settings