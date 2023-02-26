import React from 'react'
import './Home.css'
export default function Home() {
  return (
    < >
      <div className='container-fluid'>
        <div className="row main-banner">
            <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/6/8/eff01060-f706-468d-b97c-95cdf43174f91528443826867-Desktop-Home-Banner.jpg"  className="img-fluid" alt="Responsive"/>
        </div>
        <div className="row row1">
            <div className="row sub-row1">
                <div className="col-md-5 sub-row1-img">
                    <h3>NICE TO SEE YOU, COME ON IN!</h3>
                    <a href="/">
                    <img src="https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563660020-bed.jpg" alt="bed line" />
                    </a>
                   
                </div>
                <div className="col-md-5 sub-row1-img-1">
                    <a href="/">
                        <img src="https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563782565-furnishings.jpg" alt="furnishing" />
                    </a>
                </div>
                <div className="col-md-2 sub-row1-img"></div>
             
            </div>
            
            <div className="row sub-row1">
                <div className="col-md-5 sub-row1-img-2">
                    <a href="/">
                        <img src="https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563810789-art-n-decor.jpg" alt="Art-Decor" />
                    </a>
                </div>
                <div className="col-md-5 sub-row1-img-2">
                    <a href="/">
                        <img src="https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563866590-lamps.jpg" alt="lamp-decor" />
                    </a>
                </div>
                <div className="col-md-2 sub-row1-img"></div>
            </div>
            
            <div className="row sub-row1">
                <div className="col-md-5 sub-row1-img-3">
                    <a href="/">
                        <img src="https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563925069-kitchen.jpg" alt="Kitchen-Dinning" />
                    </a>
                </div>
                <div className="col-md-5 sub-row1-img-3">
                    <a href="/">
                        <img src="https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563958962-bath.jpg" alt="bath" />
                    </a>
                </div>
                <div className="col-md-2 sub-row1-img"></div>
            </div>
            
        </div>
      </div>    
    </>
  )
}
