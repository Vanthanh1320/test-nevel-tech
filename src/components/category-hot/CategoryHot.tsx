import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import music from '../../assets/images/music.png'
import poker from '../../assets/images/poker.png'
import hottesCate1 from '../../assets/images/hosttes-cate-1.png'
import hottesCate2 from '../../assets/images/hosttes-cate-2.png'
import hottesCate3 from '../../assets/images/hosttes-cate-3.png'
import hottesCate4 from '../../assets/images/hosttes-cate-4.png'
import pokerSvg from '../../assets/svgs/poker.svg'
import musicSvg from '../../assets/svgs/music.svg'
import plusSvg from '../../assets/svgs/plus.svg'

import 'swiper/css'
import 'swiper/css/navigation'
import './category-hot.scss'
import { useRef } from 'react'
import { NavigationOptions } from 'swiper/types'

const categoryHots = [
	{ id: 1, 
		icon: musicSvg,
		title: 'Music',
		desc: 'Music makes everything better, and these games will grove to it!',
		bgColor: '#5C6EFF',
		srcImage: music,
		imageTop: [
			{srcImage: hottesCate1},
			{srcImage: hottesCate2},
		],
		imageBottom: [
			{srcImage: hottesCate3},
			{srcImage: hottesCate4},
		]
	},
	{ id: 2, 
		icon: pokerSvg,
		title: 'Table Games',
		desc: 'The classic table games for the gentlemen and ladies.',
		bgColor: '#19796A',
		srcImage: poker,
		imageTop: [
			{srcImage: hottesCate1},
			{srcImage: hottesCate2},
		],
		imageBottom: [
			{srcImage: hottesCate3},
			{srcImage: hottesCate4},
		]
	},
	{ id: 3, 
		icon: musicSvg,
		title: 'Music',
		desc: 'Music makes everything better, and these games will grove to it!',
		bgColor: '#5C6EFF',
		srcImage: music,
		imageTop: [
			{srcImage: hottesCate1},
			{srcImage: hottesCate2},
		],
		imageBottom: [
			{srcImage: hottesCate3},
			{srcImage: hottesCate4},
		]
	},
	{ id: 4, 
		icon: pokerSvg,
		title: 'Table Games',
		desc: 'The classic table games for the gentlemen and ladies.',
		bgColor: '#19796A',
		srcImage: poker,
		imageTop: [
			{srcImage: hottesCate1},
			{srcImage: hottesCate2},
		],
		imageBottom: [
			{srcImage: hottesCate3},
			{srcImage: hottesCate4},
		]
	},
	{ id: 5, 
		icon: pokerSvg,
		title: 'Table Games',
		desc: 'The classic table games for the gentlemen and ladies.',
		bgColor: '#19796A',
		srcImage: poker,
		imageTop: [
			{srcImage: hottesCate1},
			{srcImage: hottesCate2},
		],
		imageBottom: [
			{srcImage: hottesCate3},
			{srcImage: hottesCate4},
		]
	},
]
function CategoryHot() {
	const navigationPrevRef = useRef(null);
	const navigationNextRef = useRef(null);

  return (
		<div className="category-hot">
			<div className="category-hot__group">
				<Swiper
					loop={true}
					modules={[Navigation, Pagination]}
					spaceBetween={0}
					slidesPerView={1}
					navigation={{
						prevEl: navigationPrevRef.current,
						nextEl: navigationNextRef.current,
					}}
					pagination={{ clickable: true }}
					onBeforeInit={(swiper) => {
						if (swiper.params.navigation) {
							(swiper.params.navigation as NavigationOptions).prevEl = navigationPrevRef.current;
							(swiper.params.navigation as NavigationOptions).nextEl = navigationNextRef.current;
						}
					}}
					breakpoints={{
						768: {
							slidesPerView: 2,
							spaceBetween: 20
						},
					}}
				>
					{categoryHots.map(({id, icon, srcImage, title, desc, imageTop, imageBottom, bgColor }) => {
						return (
							<SwiperSlide key={id} className='category-hot__slide'>
								<div className="category-hot__left">
									<div className="category-hot__content" style={{background: `${bgColor}`}}>
										<img src={icon} alt="icon" />
										<h3>{title}</h3>
										<p>{desc}</p>
									</div>
									<div className="category-hot__image">
										{imageBottom.map(({srcImage}, index) => {
											return (
												<img key={index} src={srcImage} alt="image" />
											)
										})}
									</div>
								</div>
								<div className="category-hot__right">
									<div className="category-hot__image">
										{imageTop.map(({srcImage}, index) => {
											return (
												<img key={index} src={srcImage} alt="image" />
											)
										})}
									</div>
									<div className="category-hot__image-large">
										<img src={srcImage} alt="" />
									</div>
								</div>
							</SwiperSlide>
						)
					})}
				</Swiper>
				<div className='category-hot__navigation'>
					<button className="button-prev" ref={navigationPrevRef}>
						<svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M7.99978 15.0711L9.41399 13.6569L3.75714 8L9.41399 2.34315L7.99978 0.928932L0.928711 8L7.99978 15.0711Z" fill="black"/>
						</svg>
					</button>
					<button className="button-next" ref={navigationNextRef}>
						<svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M8.00022 0.928932L6.58601 2.34315L12.2429 8L6.58601 13.6569L8.00022 15.0711L15.0713 8L8.00022 0.928932Z" fill="black"/>
						</svg>
					</button>
				</div>

				<button className='btn btn-load d-none'>
					Load More
					<img src={plusSvg} alt="plus" />
				</button>
			</div>
		</div>
	)
}

export default CategoryHot
