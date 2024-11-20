import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import banner from '../../assets/images/banner.png'
import banner2 from '../../assets/images/banner-2.png'
import arrowSvg from '../../assets/svgs/arrow.svg'
import 'swiper/css/pagination'
import './banner.scss'

const banners = [
	{ id: 1, src: banner, srcMobile: banner2, alt: 'banner-1'},
	{ id: 2, src: banner, srcMobile: banner2, alt: 'banner-2'},
	{ id: 3, src: banner, srcMobile: banner2, alt: 'banner-2'},
	{ id: 4, src: banner, srcMobile: banner2, alt: 'banner-2'},
	{ id: 5, src: banner, srcMobile: banner2, alt: 'banner-2'}
]

function Banner() {
  return (
		<div className="banner">
			<div className="banner__group container">
				<Swiper
						loop={true}
						modules={[Pagination]}
						spaceBetween={0}
						slidesPerView={1}
						pagination={{ clickable: true }}
					>
						{banners.map(({id, src, srcMobile, alt}) => {
							return (
								<SwiperSlide key={id} className='banner__slide'>
									<picture>
										<source media="(max-width: 768px)" srcSet={srcMobile} sizes="(max-width: 768px)" />
										<img src={src} alt={alt}/>
									</picture>

									<div className="banner__content d-none">
										<h2>Chicky Run</h2>
										<a href="/">Game Details <img src={arrowSvg} alt="arrow" /></a>
									</div>
								</SwiperSlide>
							)
						})}
				</Swiper>
			</div>
		</div>	
	)
}

export default Banner
