import './header.scss'
import logo from '../../assets/images/logo.png'
import barSvg from '../../assets/svgs/bar.svg'

function Header() {
	return (
		<div className="header">
			<div className="header__group container">
				<div className="header__logo">
					<img src={logo} alt="logo" />
				</div>
				<div className="header__nav">
					<ul>
						<li><a href='/' className="header__nav-link">Home</a></li>
						<li className="active"><a href='/' className="header__nav-link">Games</a></li>
						<li><a href='/' className="header__nav-link">News</a></li>
						<li><a href='/' className="header__nav-link">Math</a></li>
						<li><a href='/' className="header__nav-link">Company</a></li>
						<li><a href='/' className="header__nav-link">Events</a></li>
						<li><a href='/' className="header__nav-link">Partnes</a></li>
					</ul>
				</div>

				<button className="header__btn">
					<img src={barSvg} alt="bar" />
				</button>
			</div>
		</div>
	)
}

export default Header;
