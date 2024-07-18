import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <>
    <FooterContainer>
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">Discover JCKicks, your premier destination for exclusive sneaker resale. We specialize in securing rare and coveted kicks from leading brands, catering to enthusiasts and collectors alike. Our dedication to quality, authenticity, and unmatched customer service ensures you find the perfect pair every time. Dive into the world of JCKicks and elevate your sneaker game today.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Resources</h6>
            <ul class="footer-links">
              <li><a href="/">Terms of service</a></li>
              <li><a href="/">Refund policy</a></li>
              <li><a href="/">Shipping policy</a></li>
              <li><a href="https://render.com/">Powered By Render</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/">Products</a></li>
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">Cart</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2024 All Rights Reserved by 
         <a href="/">JCKICKS</a>.
            </p>
          </div>
        </div>
      </div>
</footer>
    </FooterContainer>
    </>
  )
}

export default Footer

const FooterContainer = styled.footer `

.site-footer
{
  background-color: black;
  padding:45px 0 20px;
  font-size:15px;
  line-height:24px;
  color: white;
}
.site-footer hr
{
  border-top-color:#bbb;
  opacity:0.5
}
.site-footer hr.small
{
  margin:20px 0
}
.site-footer h6
{
  color:#fff;
  font-size:16px;
  text-transform:uppercase;
  margin-top:5px;
  letter-spacing:2px
}
.site-footer a
{
  color: white;
}
.site-footer a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links
{
  padding-left:0;
  list-style:none
}
.footer-links li
{
  display:block
}
.footer-links a
{
  color: white;
}
.footer-links a:active,.footer-links a:focus,.footer-links a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links.inline li
{
  display:inline-block
}
.copyright-text
{
  margin:0
}
@media (max-width:991px)
{
  .site-footer [class^=col-]
  {
    margin-bottom:30px
  }
}
@media (max-width:767px)
{
  .site-footer
  {
    padding-bottom:0
  }
  .site-footer .copyright-text,.site-footer
  {
    text-align:center
  }
}

`