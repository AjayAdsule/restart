import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <>
      <div className="footer">
        <footer>
            <div className="row">
              {/* first column */}
              <div className="col-10  col-md-2 col">
                <p>ONLINE SHOPPING</p>
                <div className="list1">
                    <ol className='ol-1'>
                      <li><a href="/">Men</a></li>
                      <li><a href="/">Women</a></li>
                      <li><a href="/">Kids</a></li>
                      <li><a href="/">Home & Living</a></li>
                      <li><a href="/">Gift card</a></li>
                    </ol>
                </div>
                <p>USEFUL LINK</p>
                <div className="list1">
                  <ol className='ol-1'>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Careers</a></li>
                    <li><a href="/">Site Map</a></li>
                    <li><a href="/">Corporate Information</a></li>
                    <li><a href="/">Whitechat</a></li>
                  </ol>
                </div>
              </div>
              {/* second column */}
              <div className="col-10  col-md-2 col">
                <p>CUSTOMER POLICIES</p>
                <div className="list2">
                 <ol className='ol-1'>
                  <li><a href="/">Contact Us</a></li>
                  <li><a href="/">FAQ</a></li>
                  <li><a href="/">T&C</a></li>
                  <li><a href="/">Term Of Use</a></li>
                  <li><a href="/">Track of Use</a></li>
                  <li><a href="/">Track Order</a></li>
                  <li><a href="/">Shipping </a></li>
                  <li><a href="/">Cancelletion</a></li>
                  <li><a href="/">Return </a></li>
                  <li><a href="/">Privacy Policy</a></li>
                 </ol>
                </div>
              </div>
              {/* third column */}
              <div className="col-10  col-md-3 col">
                <p>EXPERIENCE MYNTRA APP ON MOBILE</p>
                <div className="row">
                  <div className="col-6 col3-img">
                    <a href="/"><img src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" alt="play tore" /></a>
                  </div>
                  <div className="col-6 col3-img">
                    <a href="/"><img src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" alt="Apple" /></a>
                  </div>
                </div>
                <div className="row col-row-2">
                  <p>Keep in touch</p>
                  <div className="box">
                    <a href="/"><img src="https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png" alt="facebook" /></a>
                    <a href="/"><img src="https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png" alt="twitter" /></a>
                    <a href="/"><img src="https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png" alt="Youtube" /></a>
                    <a href="/"><img src="https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png" alt="Instagram" /></a>
                  </div>
                </div>
              </div>
              <div className="col-10  col-md-4 col">
                <div className="og">
                  <img src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" alt="orignal" /><span>
                    <strong style={{color:"#282c3f"}}>                     
                      100% ORIGINAL
                    </strong>
                     
                  </span>
                </div>
              </div>
            </div>
        </footer>
      </div>
    </>
  )
}
