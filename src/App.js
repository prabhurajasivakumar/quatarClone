import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'; // Make sure to import Image
import './Appp.css';
import { Button } from 'react-bootstrap';
import { MdOutlineFlight,MdFlightClass } from 'react-icons/md';
import { TbPlaneInflight,TbUserPentagon } from 'react-icons/tb';
import { BsFillBagCheckFill,BsFillTrophyFill,BsFillChatRightTextFill,BsFillBinocularsFill,BsFillCalendarCheckFill,BsFillGeoAltFill,BsArrowRight,BsSearch} from 'react-icons/bs';
import { useEffect, useState } from 'react';
import ind from './asserts/in.png';
import logo from './asserts/logo.png';
import logo2 from './asserts/logo2.png';
import wave from './asserts/wave.png';
import thega from './asserts/thega.png';
import cor1 from './asserts/cor1.jpg';
import cor2 from './asserts/cor2.jpg';
import cor3 from './asserts/cor3.jpg';
function App() {
const [isNavbarBlack, setNavbarBlack] = useState(false);
useEffect(() => {
const handleScroll = () => {
if (window.pageYOffset > 100) {
setNavbarBlack(true);
} else {
setNavbarBlack(false);
}
};
window.addEventListener('scroll', handleScroll);
return () => {
window.removeEventListener('scroll', handleScroll);
};
}, []);
return (
<div style={{background:'#f2f3fa'}}>
   <header id='header' className={`fixed-top ${isNavbarBlack ? 'bg-black ' : 'header-transparent'} `}>
   <Navbar expand="lg "  class='' >
      <Container   >
         <Navbar.Brand id='stub2' style={{border:'solid red 0px'}}  href="#home" >
         <Image className='img-fluid ' style={{width:'100px'}} src={logo}  />
         <Image className='mx-5' style={{width:'37px'}} src={logo2} />
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse  style={{border:'solid red 0px',padding:0,margin:0}}  id="basic-navbar-nav">
         <Nav className="me-auto" id='stub' style={{border:'solid red 0px'}}>
         <Nav.Link  href="#"><a id='link' class='text-white' >Explore</a></Nav.Link>
         <Nav.Link  href="#"><a id='link' class='text-white' >Book</a></Nav.Link>
         <Nav.Link  href="#"><a id='link' class='text-white' >Explore</a></Nav.Link>
         <Nav.Link  href="#"><a id='link' class='text-white' >Privilege Club</a></Nav.Link>
         </Nav>
         </Navbar.Collapse>
      </Container>
      <div class='container-fluid d-flex justify-content-between w-25' id='stub3' style={{border:'solid red 0px'}} >
      <p class='p-0 m-0 text-white d-none d-md-block' >Help</p>
      <BsSearch  class=' text-white d-none d-md-block'></BsSearch>
      <div class='d-flex text-white d-none d-md-block' >
         <Image style={{height:'20px',borderRadius:'3px'}} src={ind} ></Image>  EN
      </div>
      <div class='d-flex  text-white d-none d-md-block' >
         <TbUserPentagon style={{fontSize:'25px'}} ></TbUserPentagon>  Login | Signup
      </div>
</div>
</Navbar>
</header>
{/* body */}
<section class="d-flex ">
   <div id='first' class='container-fluid d-flex align-content-center flex-wrap' >
      <div class='container'  >
         <h1 class='text-white my-4' >Fly Premium and earn <br></br> 6,000 bonus Avios</h1>
         <h6 class='text-white my-4' >Powered by Privilege Club</h6>
         <Button variant="outline-light rounded-pill px-4 py-2">Book Now</Button>{' '}
      </div>
   </div>
</section>
<section>
   <div id='sell' class='container ' style={{background:'white',borderRadius:'12px'}} >
      <ul class="nav nav-tabs" id="myTab" role="tablist">
         <li class="nav-item" role="presentation">
            <button  class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true"  >
               <a >
                  <MdFlightClass></MdFlightClass>
                  Book a flight
               </a>
            </button>
         </li>
         <li class="nav-item" role="presentation">
            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
               <TbPlaneInflight></TbPlaneInflight>
               Stopover/Packages
            </button>
         </li>
         <li class="nav-item" role="presentation">
            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">
               <BsFillCalendarCheckFill></BsFillCalendarCheckFill>
               Manage/Check in
            </button>
         </li>
         <li class="nav-item" role="presentation">
            <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false" >
               <BsFillGeoAltFill></BsFillGeoAltFill>
               Flight Status
            </button>
         </li>
      </ul>
      <div class="tab-content" id="myTabContent">
         <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab">
            <form class="form-check form-check-inline" >
               <label class="form-check-label m-4 " >
               <input id='radio' class="form-check-input " type="radio" name="gender" value="male" /> Return
               </label  >
               <label  class="form-check-label m-4 " >
               <input id='radio' class="form-check-input" type="radio" name="gender" value="female" /> Oneway
               </label>
               <label class="form-check-label m-4 " >
               <input id='radio' class="form-check-input" type="radio" name="gender" value="other" /> Multicity
               </label>
            </form>
            <div class='container' >
               <div class=' container-fluid row my-4 p-2' style={{border:'solid grey 1px',borderRadius:'10px'}} >
               <div class='col-12 col-sm-12 col-lg-4' style={{borderRight:'solid black 1px'}}  >
               <div class="input-group flex-nowrap container-fluid">
                  <input type="text" class="form-control" placeholder="From" aria-label="Username" aria-describedby="addon-wrapping"></input>
                  <span class="input-group-text" id="addon-wrapping">
                     <MdOutlineFlight style={{fontSize:'23px',color:'grey'}} ></MdOutlineFlight>
                  </span>
                  <input type="text" class="form-control" placeholder="To" aria-label="Username" aria-describedby="addon-wrapping"></input>
               </div>
            </div>
            <div class='col-12 col-sm-12 col-lg-4 px-2 d-flex border-sm-0' style={{borderRight:'solid black 1px'}} >
            <div class="input-group flex-nowrap container-fluid">
               <input type="date" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"></input>
               <input type="date" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"></input>
            </div>
         </div>
         <div class='col-12 col-sm-12 col-lg-4 px-2'  >
            <select class="form-select" id="inputGroupSelect01">
               <option selected>Premium Business Class</option>
               <option value="1">Business Class</option>
               <option value="2">First Class</option>
               <option value="3">Economy Class</option>
            </select>
         </div>
      </div>
      <div className='container d-flex justify-content-end py-3'>
         <button type="button"  class="btn border-0 ">+Add promo code</button>
         <button type="button"  style={{background:'#8e2157',color:'white'}} class="btn rounded-pill px-5 py-3">Search flights</button>
      </div>
   </div>
   </div>
   <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">..b.</div>
   <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">.c..</div>
   <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">.d..</div>
   </div>
   </div>
</section>
<section>
   <div class='container'>
      <div id='ca1' class="card  my-4" >
         <div class="card-body ">
            <p class="card-text text-white">Witness the excitement and speed of the world’s most prestigious <br></br>
               motorsport with an Ultimate F1® Fan Package.
            </p>
            <a href="#"  style={{background:'#8e2157',color:'white'}} class="btn rounded-pill px-5 py-3 my-2 ">Book a package</a>
         </div>
      </div>
   </div>
</section>
<section>
   <div class='container' style={{paddingTop:'40px'}} >
      <h2>Start planning your next trip</h2>
      <p class='py-2' >Thinking of travelling somewhere soon? Here are some options to help you get started</p>
      <div class='row' >
         <div id='ca2'  class="card col-lg-6 col-11 my-1 " style={{height:'350px',padding:'0',marginLeft:'10px'}} >
            <div  class="card-body d-flex align-items-end text-white"   >
               <p class="card-text" style={{padding:'0',margin:'0'}}>Explore our destinations</p>
            </div>
            <div style={{borderBottomRightRadius:'10px',borderBottomLeftRadius:'10px'}}  class="card-header bg-white ">
               <a style={{color:'#8e2157'}} >
                  Find flights and fair
                  <BsArrowRight></BsArrowRight>
               </a>
            </div>
         </div>
         <div class=" col-lg-6 col-12 row">
            <div class=" col-lg-6 col-12 my-1" >
               <div id='ca3'  class="card " style={{height:'350px',padding:'0'}} >
                  <div  class="card-body d-flex align-items-end text-white"   >
                     <p class="card-text" style={{padding:'0',margin:'0'}}>Explore our destinations</p>
                  </div>
                  <div style={{borderBottomRightRadius:'10px',borderBottomLeftRadius:'10px'}}  class="card-header bg-white ">
                     <a style={{color:'#8e2157'}} >
                        Find flights and fair
                        <BsArrowRight></BsArrowRight>
                     </a>
                  </div>
               </div>
            </div>
            <div class=" col-lg-6 col-12 my-1" >
               <div class=" col-12 " >
                  <div id='ca4'  class="card " style={{height:'170px',padding:'0',marginBottom:'10px'}} >
                     <div  class="card-body d-flex align-items-end text-white"   >
                        <p class="card-text" style={{padding:'0',margin:'0'}}>Explore our destinations</p>
                     </div>
                     <div style={{borderBottomRightRadius:'10px',borderBottomLeftRadius:'10px'}}   class="card-header bg-white ">
                        <a style={{color:'#8e2157'}} >
                           Find flights and fair
                           <BsArrowRight></BsArrowRight>
                        </a>
                     </div>
                  </div>
               </div>
               <div class=" col-12 " >
                  <div id='ca5'  class="card " style={{height:'170px',padding:'0'}} >
                     <div  class="card-body d-flex align-items-end text-white"   >
                        <p class="card-text" style={{padding:'0',margin:'0'}}>Explore our destinations</p>
                     </div>
                     <div style={{borderBottomRightRadius:'10px',borderBottomLeftRadius:'10px'}}  class="card-header bg-white ">
                        <a style={{color:'#8e2157'}} >
                           Find flights and fair
                           <BsArrowRight></BsArrowRight>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
<section class='container' style={{paddingTop:'40px'}} >
   <h2>Find great fair's</h2>
   <div class='row' >
      <div id='ca2'  class="card col-lg-6 col-11 my-1 " style={{height:'550px',padding:'0',marginLeft:'10px'}} >
         <div  class="card-body d-flex align-items-end text-white"   >
            <p class="card-text" style={{padding:'0',margin:'0'}}>Explore our destinations</p>
         </div>
         <div style={{borderBottomRightRadius:'10px',borderBottomLeftRadius:'10px'}}  class="card-header bg-white ">
            <a style={{color:'#8e2157'}} >
               Find flights and fair
               <BsArrowRight></BsArrowRight>
            </a>
         </div>
      </div>
      <div class=" col-lg-6 col-12 row"  >
         <div class=" col-lg-6 col-12 my-1" >
            <div class=" col-12 " >
               <div id='ca4'  class="card " style={{height:'270px',padding:'0',marginBottom:'10px'}} >
                  <div  class="card-body d-flex align-items-end text-white"   >
                     <p class="card-text" style={{padding:'0',margin:'0'}}>Explore our destinations</p>
                  </div>
                  <div style={{borderBottomRightRadius:'10px',borderBottomLeftRadius:'10px'}}   class="card-header bg-white ">
                     <a style={{color:'#8e2157'}} >
                        Find flights and fair
                        <BsArrowRight></BsArrowRight>
                     </a>
                  </div>
               </div>
            </div>
            <div class=" col-12 " >
               <div id='ca5'  class="card " style={{height:'270px',padding:'0'}} >
                  <div  class="card-body d-flex align-items-end text-white"   >
                     <p class="card-text" style={{padding:'0',margin:'0'}}>Explore our destinations</p>
                  </div>
                  <div style={{borderBottomRightRadius:'10px',borderBottomLeftRadius:'10px'}}  class="card-header bg-white ">
                     <a style={{color:'#8e2157'}} >
                        Find flights and fair
                        <BsArrowRight></BsArrowRight>
                     </a>
                  </div>
               </div>
            </div>
         </div>
         <div class=" col-lg-6 col-12 my-1" >
            <div class=" col-12 " >
               <div id='ca4'  class="card " style={{height:'270px',padding:'0',marginBottom:'10px'}} >
                  <div  class="card-body d-flex align-items-end text-white"   >
                     <p class="card-text" style={{padding:'0',margin:'0'}}>Explore our destinations</p>
                  </div>
                  <div style={{borderBottomRightRadius:'10px',borderBottomLeftRadius:'10px'}}   class="card-header bg-white ">
                     <a style={{color:'#8e2157'}} >
                        Find flights and fair
                        <BsArrowRight></BsArrowRight>
                     </a>
                  </div>
               </div>
            </div>
            <div class=" col-12 " >
               <div id='ca5'  class="card " style={{height:'270px',padding:'0'}} >
                  <div  class="card-body d-flex align-items-end text-white"   >
                     <p class="card-text" style={{padding:'0',margin:'0'}}>Explore our destinations</p>
                  </div>
                  <div style={{borderBottomRightRadius:'10px',borderBottomLeftRadius:'10px'}}  class="card-header bg-white ">
                     <a style={{color:'#8e2157'}} >
                        Find flights and fair
                        <BsArrowRight></BsArrowRight>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
<section class='container' style={{paddingTop:'10px'}} >
   <div class='row' >
      <div class=" col-lg-3 d-none d-md-block"  >
         <div id='ca4'  class="card " style={{height:'270px',padding:'0',marginBottom:'10px'}} >
            <div  class="card-body d-flex align-items-end text-white"   >
               <p class="card-text" style={{padding:'0',margin:'0'}}>Explore our destinations</p>
            </div>
            <div style={{borderBottomRightRadius:'10px',borderBottomLeftRadius:'10px'}}   class="card-header bg-white ">
               <a style={{color:'#8e2157'}} >
                  Find flights and fair
                  <BsArrowRight></BsArrowRight>
               </a>
            </div>
         </div>
      </div>
      <div class=" col-lg-3 d-none d-md-block"  >
         <div id='ca4'  class="card " style={{height:'270px',padding:'0',marginBottom:'10px'}} >
            <div  class="card-body d-flex align-items-end text-white"   >
               <p class="card-text" style={{padding:'0',margin:'0'}}>Explore our destinations</p>
            </div>
            <div style={{borderBottomRightRadius:'10px',borderBottomLeftRadius:'10px'}}   class="card-header bg-white ">
               <a style={{color:'#8e2157'}} >
                  Find flights and fair
                  <BsArrowRight></BsArrowRight>
               </a>
            </div>
         </div>
      </div>
      <div class=" col-lg-3 d-none d-md-block"  >
         <div id='ca4'  class="card " style={{height:'270px',padding:'0',marginBottom:'10px'}} >
            <div  class="card-body d-flex align-items-end text-white"   >
               <p class="card-text" style={{padding:'0',margin:'0'}}>Explore our destinations</p>
            </div>
            <div style={{borderBottomRightRadius:'10px',borderBottomLeftRadius:'10px'}}   class="card-header bg-white ">
               <a style={{color:'#8e2157'}} >
                  Find flights and fair
                  <BsArrowRight></BsArrowRight>
               </a>
            </div>
         </div>
      </div>
   </div>
   <div className='d-flex justify-content-center py-2' >
      <button type="button" id='fairb'  class="btn btn-outline-secondary rounded-pill py-2 px-4 ">View more fares</button>
   </div>
   <p className='text-secondary' >*Terms and conditions apply.</p>
</section>
<section class='container-fluid'  style={{paddingTop:'60px',padding:'0',margin:'0'}} >
   {/*alignment adivanguthu*/}
   <div id='fin'  class="card " style={{height:'450px',padding:'0',marginBottom:'10px',border:'0',width:'full',padding:'0',margin:'0'}} >
      <div  class="card-body d-flex justify-content-end text-white my-5"   >
         <div style={{height:'350px'}} className='col-md-6 col-12' >
            <h4>Never miss an offer</h4>
            <p style={{marginTop:'20px'}} >Subscribe and be the first to receive our exclusive offers.</p>
            <div style={{border:'solid grey 2px',borderRadius:'10px',height:'50px',marginTop:'30px'}} class="input-group">
            <input type="email" aria-label="First name" placeholder='Email address' class="form-control"></input>
            <input type="text" aria-label="Last name" placeholder='prefrred city of departure ' class="form-control"></input>
         </div>
         <div style={{marginTop:'10px'}} className='d-flex align-items-center'>
            <input  class="form-check-input" type='checkbox' ></input>
            <p style={{marginTop:'20px',paddingLeft:'10px'}} >I would like to get offers and news from Qatar Airways.</p>
         </div>
         <button type="button" id='fairb'  class="btn btn-outline-secondary rounded-pill py-2 px-4 ">Subscribe</button>
      </div>
   </div>
   </div>
</section>



<section class='container' style={{ paddingTop: '60px',marginBottom:'70px' }}>
<div className='my-5'>
   <h1> Let's go places togather  </h1>
   <p>Saving off upto 20%</p>
</div>
<div id="carouselExampleCaptions" class="carousel slide">
   <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
   </div>
   <div class="carousel-inner">
      <div class="carousel-item active">
         <img src={cor1} style={{borderRadius:'20px'}} class="d-block w-100 img-fluid" alt="..."/>
         <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
         </div>
      </div>
      <div class="carousel-item">
         <img src={cor2} style={{borderRadius:'20px'}} class="d-block w-100 img-fluid" alt="..."/>
         <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
         </div>
      </div>
      <div class="carousel-item">
         <img src={cor3} style={{borderRadius:'20px'}} class="d-block w-100 img-fluid" alt="..."/>
         <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
         </div>
      </div>
   </div>
   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
   <span class="carousel-control-prev-icon" aria-hidden="true"></span>
   <span class="visually-hidden">Previous</span>
   </button>
   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
   <span class="carousel-control-next-icon" ariahidden="true"></span>
   <span class="visually-hidden">Next</span>
   </button>
</div>
</section>

<section class='container-fluid' >
<Image className='img-fluid' src={wave} ></Image>
<div className=''>
  <div style={{height:'200px',background:'#7e184e'}}  >
    <div className='container text-white  ' >
      <div class='col-md-6 col-12 d-flex justify-content-evenly' >
       <p>Qatar Airways</p>
      <p>Group companies</p>
       <p>Business solutions</p>
        <p>Business partners</p>
        <p>Help</p> 
      </div>

      <div style={{border:'1px solid white',marginTop:'40px'}}  ></div>

      <div class='col-md-6 col-12 fw-light my-5 d-flex justify-content-evenly' > 
       <p>Qatar Airways</p>
      <p>Group companies</p>
       <p>Business solutions</p>
        <p>Business partners</p>
        <p>Help</p> 

        
      </div>

      
        
    </div>
  </div>

</div>


</section>














<ul style={{height:'70px',borderTop:'solid #d4af37 2px'}} class="nav justify-content-center bg-black fixed-bottom  d-md-none">
<li id='botlee' class="nav-item ">
   <a class="nav-link  " style={{fontSize:'30px'}} aria-current="page" href="#">
      <BsFillBinocularsFill></BsFillBinocularsFill>
   </a>
</li>
<li id='botle' class="nav-item">
   <a class="nav-link" style={{fontSize:'30px'}} href="#">
      <BsFillChatRightTextFill></BsFillChatRightTextFill>
   </a>
</li>
<div id='botn' style={{border:'solid 1 px red'}} >
<Image height={'50px'} src={logo2} ></Image>
</div>
<li id='botri' class="nav-item">
   <a class="nav-link" style={{fontSize:'30px'}} href="#">
      <BsFillTrophyFill></BsFillTrophyFill>
   </a>
</li>
<li id='botrii' class="nav-item">
   <a class="nav-link " style={{fontSize:'30px'}} aria-disabled="true">
      <BsFillBagCheckFill></BsFillBagCheckFill>
   </a>
</li>
</ul>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</div>
);
}
export default App;