import search from '../../assets/svgs/search.svg'
import homeActive from '../../assets/svgs/home-active.svg'
import home from '../../assets/svgs/home.svg'
import timeline from '../../assets/svgs/timeline.svg'
import all from '../../assets/svgs/all.svg'
import allActive from '../../assets/svgs/all-active.svg'
import filter from '../../assets/svgs/filter.svg'
import './navigation-bar.scss'

function NavigationBar() {
  return (
		<div className="navigation-bar">
			<div className="navigation-bar-search">
				<div className="search-group">
					<div className="search-icon">
						<img src={search} alt="search" />
					</div>
					<input type="search" placeholder="Search" />
				</div>
			</div>
			<div className="navigation-bar-main">
				<ul>
					<li className="active">
						<a href="/" className="navigation-bar-link">
							<img src={homeActive} alt="home" />
							Games Home
						</a>
					</li>
					<li className="">
						<a href="/" className="navigation-bar-link">
							<img src={timeline} alt="timeline" />
							Timeline
						</a>
					</li>
					<li className="">
						<a href="/" className="navigation-bar-link">
							<img src={all} alt="all" />
							All Games
						</a>
					</li>
				</ul>
			</div>

			<div className="navigation-bar-mobile d-none">
				<ul className="d-flex">
					<li className="">
						<a href="/" className="navigation-bar-link">
							<img src={home} alt="home" />
							Games Home
						</a>
					</li>
					<li className="">
						<a href="/" className="navigation-bar-link">
							<img src={timeline} alt="timeline" />
							Timeline
						</a>
					</li>
					<li className="active">
						<a href="/" className="navigation-bar-link">
							<img src={allActive} alt="all" />
							All Games
						</a>
					</li>
					<li>
						<a href="#">
							<img src={search} alt="search" />
							Search
						</a>
					</li>
					<li>
						<a href="#">
							<img src={filter} alt="filter" />
							filter
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default NavigationBar
