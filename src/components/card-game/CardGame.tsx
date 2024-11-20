import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import mahJongWays from '../../assets/images/mahjong-ways.png'
import mahJongWaysSmall from '../../assets/images/mahjong-ways-small.png'
import wildBandito from '../../assets/images/wild-bandito.png'
import wildBanditoSmall from '../../assets/images/wild-bandito-small.png'
import tree from '../../assets/images/tree.png'
import treeSmall from '../../assets/images/hosttes-cate-1.png'

import 'swiper/css'
import 'swiper/css/navigation'
import './card-game.scss'
import { useRef } from 'react'
import { NavigationOptions } from 'swiper/types'

const gamehots = [
	{ id: 1, 
		srcImage: mahJongWays, 
		srcImageSmall: mahJongWaysSmall,
		title: 'Mahjong Ways', 
		description: '4TECH™ has just launched their very first Mahjong inspired slot machine gam…'
	},
	{ id: 2, 
		srcImage: wildBandito, 
		srcImageSmall: wildBanditoSmall, 
		title: 'Wild Bandito', 
		description: 'Águila which means ‘The Eagle’ is a three-person Mexican bandit team that is activ…'
	},
	{ id: 3, 
		srcImage: mahJongWays, 
		srcImageSmall: mahJongWaysSmall, 
		title: 'Mahjong Ways', 
		description: '4TECH™ has just launched their very first Mahjong inspired slot machine gam…'
	},
	{ id: 4, 
		srcImage: wildBandito, 
		srcImageSmall: wildBanditoSmall, 
		title: 'Wild Bandito', 
		description: 'Águila which means ‘The Eagle’ is a three-person Mexican bandit team that is activ…'
	},
]

function CardGame() {
	const navigationPrevRef = useRef(null);
	const navigationNextRef = useRef(null);

  return (
		<div className="card-game">
			<div className="card-game__group">
				<Swiper
					loop={true}
					modules={[Navigation]}
					spaceBetween={0}
					slidesPerView={1}
					navigation={{
						prevEl: navigationPrevRef.current,
						nextEl: navigationNextRef.current,
					}}
					onBeforeInit={(swiper) => {
						if (swiper.params.navigation) {
							(swiper.params.navigation as NavigationOptions).prevEl = navigationPrevRef.current;
							(swiper.params.navigation as NavigationOptions).nextEl = navigationNextRef.current;
						}
					}}
					breakpoints={{
						768: {
							slidesPerView: 2,
							spaceBetween:20
						},
					}}
				>
					{gamehots.map(({id, srcImage, srcImageSmall, title, description}) => {
						return (
							<SwiperSlide key={id} className='card-game__slide'>
								<div className="card-game__item">
									<div className="card-game__image">
										<img src={srcImage} alt={title} />
									
									</div>
									<div className="card-game__content">
										<img src={srcImageSmall} alt={title} />
										<div className="card-game__content-text">
											<h3>{title}</h3>
											<p>{description}</p>
										</div>
										<a className="card-game__view" href="#">
											View
										</a>
									</div>
								</div>
							</SwiperSlide>
						)
					})}
				</Swiper>
				<div className='card-game__navigation'>
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


				<div className="card-game__item-mobile d-none">
					<div className="card-game__image">
						<img src={tree} alt="tree" />
					</div>

					<div className="card-game__content">
						<div className='d-flex'>
							<img src={treeSmall} alt="tree" />
							<div className="card-game__content-text">
								<h3>Tree Of Fortune</h3>
								<p>Legend has it that a farmer was granted a seed from a deity.</p>
							</div>
						</div>
						
						<div className="card-game__attribute d-flex">
							<div className="card-game__attribute-item">
								<h4>Medium</h4>
								<span>Volatility</span>
							</div>

							<div className="card-game__attribute-item">
								<h4>95.01%</h4>
								<span>RTP</span>
							</div>

							<div className="card-game__attribute-item">
								<h4>x5000</h4>
								<span>Maximum Win</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CardGame
