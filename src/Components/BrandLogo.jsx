import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function BrandLogo() {
  return (
    <>
        
	{/* <!-- logo carousel --> */}
	<div className="logo-carousel-section">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">

					<div className="logo-carousel-inner">
                <OwlCarousel className='owl-theme' loop margin={10} items={4}  nav>

						<div className="single-logo-item">
							<img src="assets/img/company-logos/1.png" alt=""/>
						</div>
						<div className="single-logo-item">
							<img src="assets/img/company-logos/2.png" alt=""/>
						</div>
						<div className="single-logo-item">
							<img src="assets/img/company-logos/3.png" alt=""/>
						</div>
						<div className="single-logo-item">
							<img src="assets/img/company-logos/4.png" alt=""/>
						</div>
						<div className="single-logo-item">
							<img src="assets/img/company-logos/5.png" alt=""/>
						</div>
                    </OwlCarousel>

					</div>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- end logo carousel --> */}
    </>
  )
}
