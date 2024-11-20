import logoFooter from '../../assets/images/logo_footer.png'
import youtubeSvg from '../../assets/svgs/youtube.svg'
import twitterSvg from '../../assets/svgs/twitter.svg'
import linkedinSvg from '../../assets/svgs/linkedin.svg'
import plusSvg from '../../assets/svgs/plus.svg'
import './footer.scss'

function Footer() {
	return (
		<div className="footer">
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-5">
						<div className="footer__logo">
							<img src={logoFooter} alt="logo" />
						</div>
						<p className='footer__address'>Valletta Buildings, South Street, Valletta - VLT 1103 Malta</p>
						<div className="footer__copyright-mb d-none">
							<p>COPYRIGHT © 2015-2024 ALL RIGHTS RESERVED.</p>
						</div>
						<div className="footer__social d-flex">
							<a href="/" className="footer__social-link">
								<div className="footer__socials-icon">
									<img src={twitterSvg} alt="twitter" />
								</div>
							</a>
							<a href="/" className="footer__social-link">
								<div className="footer__socials-icon">
									<img src={youtubeSvg} alt="youtube" />
								</div>
							</a>
							<a href="/" className="footer__social-link">
								<div className="footer__socials-icon">
									<img src={linkedinSvg} alt="linkedin" />
								</div>
							</a>
						</div>
					</div>
					<div className="col-12 col-md-7">
						<div className="footer__menu d-flex">
							<div className="footer__menu-item">
								<div className='d-flex justify-content-between'>
									<h4>Web map</h4>
									<img src={plusSvg} alt="plus" />
								</div>
								<ul>
									<li><a href="/">Home</a></li>
									<li><a href="/">Games</a></li>
									<li><a href="/">News</a></li>
									<li><a href="/">Math</a></li>
									<li><a href="/">Company</a></li>
									<li><a href="/">Events</a></li>
									<li><a href="/">Partners</a></li>
								</ul>
							</div>

							<div className="footer__menu-item">
								<div className='d-flex justify-content-between'>
									<h4>About us</h4>
									<img src={plusSvg} alt="plus" />
								</div>

								<ul>
									<li><a href="/">Licensing</a></li>
									<li><a href="/">Certification</a></li>
									<li><a href="/">Responsible Gaming</a></li>
									<li><a href="/">Exhibitions</a></li>
									<li><a href="/">Copyright Protection</a></li>
									<li><a href="/">Privacy Policy</a></li>
								</ul>
							</div>

							<div className="footer__menu-item">
								<div className="d-flex justify-content-between">
									<h4>Events</h4>
									<img src={plusSvg} alt="plus" />
								</div>

								<ul>
									<li><a href="/">PG ICE 2017</a></li>
									<li><a href="/">PG ICE 2018</a></li>
									<li><a href="/">PG ICE 2019</a></li>
									<li><a href="/">About ICE</a></li>
								</ul>
							</div>

							<div className="footer__menu-item">
								<div className="d-flex justify-content-between">
									<h4>Our partners</h4>
									<img src={plusSvg} alt="plus" />
								</div>

								<ul>
									<li><a href="/">Relax Gaming</a></li>
									<li><a href="/">Leander Games</a></li>
								</ul>
							</div>
						</div>
					</div>
				<div className="col-12">
					<div className="footer__copyright">
						<p>COPYRIGHT © 2015-2024 ALL RIGHTS RESERVED.</p>
					</div>
				</div>
				</div>

			</div>
		</div>
	)
}

export default Footer
