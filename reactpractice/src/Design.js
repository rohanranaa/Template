import React from 'react'
import "../src/rohan.css"
import beach from '../src/beach.jpg'
import dhaka from "../src/dhaka.jpg"
import Skyscanner from "../src/component.js/Skyscanner.jpg"
import danang from "../src/danang.jpg"
import katmandu from "../src/katmandu.jpg"
import delhi from "../src/delhi.jpg"
import dubai from "../src/dubai.jpg"
import london from "../src/london.jpg"
import newyork from "../src/newyork.jpg"
import canada from "../src/canada.jpg"
import japan from "../src/japan.jpg"
import aeroplane from "../src/component.js/aeroplane.png"
import vietjet from "../src/component.js/vietjet.png"
import {GiConfirmed} from "react-icons/gi"
// import {MdKeyboardArrowRight} from "react-icons/md"
function Design() {
  return (
    <>
        {/* Navigation */}
        <div>
                <header className="nav-header">
                    <div className=''>
                        {/* uper header */}
                        <div className='d-flex container justify-content-between'>
                            <div className='m-8'>
                                <a href='...'><img src={Skyscanner} style={{ backgroundPosition: 'center', width: '238px', height: '54px'}} alt="skyscanner-img"/></a>
                            </div>
                            <nav className=''>
                                <ul className=' d-flex '>
                                    <li className='list-group-item p-4'>
                                        <a href="...">Help</a>
                                    </li>
                                    <li className='list-group-item p-3'>
                                        <button className='btn ' style={{borderRadius:"5px" ,backgroundColor:"#ed1a2e",color:"#fff"}} type="click">Text Custom</button>
                                    </li>
                                    <li className='list-group-item p-3'>
                                        <div>
                                            <button className='btn' style={{borderRadius:"5px" ,backgroundColor:"#ed1a2e",color:"#fff"}}>
                                                <bold>Demo</bold>
                                            </button>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        {/* down header */}  
                        <div className='d-flex container  justify-content-between'>
                            <nav className='d-flex mx-3 justify-content-between'>
                                <div>
                                    <button className='btn mx-1' style={{border:"1px solid #eqecef", borderRadius:"2px" ,backgroundColor:"#ed1a2e",color:"#fff"}}>AIR</button>
                                </div>
                                <div>
                                    <button className='btn btn-primary mx-1'style={{border:"1px solid #e9ecef", borderRadius:"2px" ,backgroundColor:"#e9ecef",color:"#000"}}>OCEAN</button>
                                </div>
                                <div>
                                    <button className='btn btn-primary mx-1'style={{border:"1px solid #e9ecef", borderRadius:"2px" ,backgroundColor:"#e9ecef",color:"#000"}}>COURIER</button>
                                </div>
                                <div>
                                    <button className='btn btn-primary mx-1'style={{border:"1px solid #e9ecef", borderRadius:"2px" ,backgroundColor:"#e9ecef",color:"#000"}}>ROAD</button>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
        </div>
        {/* Main  */}
        <div className='d-flex' style={{backgroundImage: `url(${beach})`, backgroundSize:'cover', height:"30rem"}}>
        <div className='container border-black mt-5'>
        <h1 style={{fontSize:"70px", color:"white"}}><bold>Let the journey begin</bold></h1>
            <div className=' p-3 mt-5' style={{marginBottom:"40px",borderRadius:"8px", backgroundColor:"#02122c", color:"white" }}>
            <div className='mt-7 '>
                <div  className='form-group d-flex  mt-3' >
                    <div className='d-flex '>
                        <div class="form-check mr-0.5rem ml-0.5rem">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Airport To Airport
                                </label>
                        </div>
                        <div class="form-check mx-2">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Airport To Door
                                </label>
                        </div>
                        <div class="form-check mx-2">
                             <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Door To Door
                                </label>
                        </div>
                        <div class="form-check mx-2">
                             <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Door To Airport
                                </label>
                        </div>
                    </div>
                </div>
                <div className='d-flex mb-3 mt-1rem pb-20px'>
                    <div className=' '>
                        <div>
                            <label>From</label>
                            <input className='input-group mb-1rem ml-3px' placeholder='Origin' style={{height:"60px", width:"101%",borderRadius:"3px"}} type="text"/>
                        </div>
                    </div>
                    <div className=''>
                        <div>
                            <label>To</label>
                            <input className='input-group mb-1rem' placeholder='Destination' style={{height:"60px", width:"100%" ,borderRadius:"3px"}} type="text"/>
                        </div>
                    </div>
                    <div className=' '>
                        <div>
                            <label>Tariff Mode</label>
                            <input className='input-group mb-1rem' placeholder='Tariff Mode'  style={{height:"60px", width:"100%" ,borderRadius:"3px"}} type="text"/>
                        </div>
                    </div>
                    <div className=' '>
                        <div>
                            <label>Packing Details</label>
                            <input className='input-group mb-1rem' placeholder='Destination' style={{height:"60px", width:"100%" ,borderRadius:"3px"}} type="text"/>
                        </div>
                    </div>
                    <div className=''>
                        <div>
                            <label>Commodity</label>
                            <input className='dropdown show mb-1rem' placeholder='1 adult, Economy' style={{height:"60px", width:"117%" ,borderRadius:"3px"}} type="text"/>
                        </div>
                    </div>
                    </div>
                    <div class="d-flex justify-content-end mr-3px">
                       <button className='btn m-3 mr-3px pr-14px' style={{border:"1px solid #fd1228", width:"150px",color:"#fff", backgroundColor:"#fd1228"}}>Search Flight</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        {/* Main Body  */}
                <div className='container d-container'>
                    <div className='h-container'>
                        <span>
                            <h2 className='heading'>The best flight deals from India</h2>
                        </span>
                        <div className='title-heading'>
                            <span className='d-flex justify-content-between'>
                                <span>Get back out there for less with the lowest fares we’ve found this week. </span>
                                <div>
                                    <a href='...' className='more-deals'>
                                        <span >See more deals</span>
                                    </a>
                                </div>
                            </span>
                        </div>
                        </div>
                        {/* Card section */}
                    <div className='container card-section'>
                        <div className='outer-card '>
                            <div className="card a-card">
                                <img className="card-img-top img-card" src={dhaka} alt="dhaka-img"/>
                                    <div className="card-body h-card">
                                        <h4 className="card-title place-text">Dhaka</h4>
                                    </div>
                                    <div className=''>
                                        <div className='collection'>
                                            <div className='d-aeroplane '>
                                                <img className='aeroplan-img' src={aeroplane}/>
                                            </div>
                                            <div className=' date-indigo'> 
                                                <div className="d-i"> 
                                                    <span className='date'>Mon,5 Dec</span>
                                                    <p>DEL-KTM.IndiGo</p>
                                                </div>
                                                <div className='direct'>
                                                <a href='...' className='direct'>Direct</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                        <div className='collection'>
                                            <div className='d-aeroplane '>
                                                <img className='aeroplan-img' src={aeroplane}/>
                                            </div>
                                            <div className=' date-indigo'> 
                                                <div className="d-i"> 
                                                    <span className='date'>Mon,5 Dec</span>
                                                    <p className='Indigo'>KTM-DEL.IndiGo</p>
                                                </div>
                                                <div className=' direct '>
                                                <a href='...' className='direct'>Direct</a>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="card-body r-p">
                                        <a href="..." className="card-link" id='resistation'><i className='icons'><GiConfirmed/></i>Low resistation</a>
                                        <a href="..." className="card-link place-text" id='price'> From ₹12,296</a>
                                    </div>
                                </div>
                            </div>
                            <div className='outer-card'>
                            <div className="card a-card">
                                <img className="card-img-top img-card" src={danang} alt="dhaka-img"/>
                                    <div className="card-body h-card">
                                         <h4 className="card-title place-text">Da-nang</h4>
                                    </div>
                                    <div className=''>
                                        <div className='collection'>
                                            <div className='d-aeroplane '>
                                                <img className='aeroplan-img' src={vietjet}/>
                                            </div>
                                            <div className=' date-indigo'> 
                                                <div className="d-i"> 
                                                    <span className='date'>Mon,5 Dec</span>
                                                    <p>DEL-DAD.VietJet Air</p>
                                                </div>
                                                <div className=' direct '>
                                                <a href='...' className='direct'>Direct</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                        <div className='collection'>
                                            <div className='d-aeroplane '>
                                                <img className='aeroplan-img' src={vietjet}/>
                                            </div>
                                            <div className=' date-indigo'> 
                                                <div className="d-i"> 
                                                    <span className='date'>Mon,5 Dec</span>
                                                    <p>DAD-DEL.VietJet Air</p>
                                                </div>
                                                <div className=' direct '>
                                                <a href='...' className='direct'>Direct</a>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="card-body r-p">
                                        <a href="..." className="card-link" id='resistation'><i className='icons'><GiConfirmed/></i>Low Resistation</a>
                                        <a href="..." className="card-link place-text" id='price'>From ₹ 12,296</a>
                                    </div>
                                </div>
                            </div>
                            <div className='outer-card'>
                            <div className="card a-card">
                                <img className="card-img-top img-card" src={katmandu} alt="dhaka-img"/>
                                    <div className="card-body h-card">
                                         <h4 className="card-title place-text">Katmandu</h4>
                                    </div>
                                    <div className=''>
                                        <div className='collection'>
                                            <div className='d-aeroplane '>
                                                <img className='aeroplan-img' src={aeroplane}/>
                                            </div>
                                            <div className=' date-indigo'> 
                                                <div className="d-i"> 
                                                    <span className='date'>Mon,5 Dec</span>
                                                    <p>BOM-AUH.Vistara</p>
                                                </div>
                                                <div className=' direct '>
                                                <a href='...' className='direct'>Direct</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                        <div className='collection'>
                                            <div className='d-aeroplane '>
                                                <img className='aeroplan-img' src={aeroplane}/>
                                            </div>
                                            <div className=' date-indigo'> 
                                                <div className="d-i"> 
                                                    <span className='date'>Mon,5 Dec</span>
                                                    <p>AUH-BOM.Vistara</p>
                                                </div>
                                                <div className=' direct '>
                                                <a href='...' className='direct'>Direct</a>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="card-body r-p">
                                        <a href="..." className="card-link" id='resistation'><i className='icons'><GiConfirmed/></i>Low Resistation</a>
                                        <a href="..." className="card-link place-text" id='price'>From ₹ 12,296</a>
                                    </div>
                                </div>
                            </div>
                     </div> 
                </div>
            {/* Last Main Body */}
        <section>
            {/* Heading */}
           <div className='container'>
                    <div className='h-container'>
                        <span>
                            <h2 className='h-container-heading'>Plan your perfect trip</h2>
                        </span>
                                <div className='title-heading'>
                                     <p className='d-flex justify-content-between h-container-paragraph'>
                                        Search Flights, Hotels & Car Hire to our most popular destinations
                                     </p>
                                </div>
                     </div>
            </div>
            {/* First Content */}
            <div>
                    <div className="container  main-container">
                        <div className="card-section destinationBoxes">
                            <div className="boxColumn">
                                <img className='card-img-top boxColumn-img' src={delhi} alt="newdelhi-img"/>
                                <div className='delhi-content'>
                                    <h5 className='delhi-h'>New Delhi</h5>
                                    <div className='content-ul'>
                                    <li className='content-ul'><a className='li-text' href='...'>Flights</a></li>
                                    <li className='content-ul'><a className='li-text' href='...'>Hotels</a></li>
                                    <li className='content-ul'><a className='li-text' href='...'>Car Hire</a></li>
                                    </div>
                                </div>
                            </div>
                            <div className="boxColumn">
                                <img className='card-img-top boxColumn-img' src={dubai} alt="dubai-img"/>
                                <div className='delhi-content'>
                                    <h5 className='delhi-h'>Dubai</h5>
                                    <div className='content-ul'>
                                    <li className='content-ul'><a className='li-text' href='...'>Flights</a></li>
                                    <li className='content-ul'><a className='li-text' href='...'>Hotels</a></li>
                                    <li className='content-ul'><a className='li-text' href='...'>Car Hire</a></li>
                                    </div>
                                </div>
                            </div>
                            <div className="boxColumn">
                                <img className='card-img-top boxColumn-img' src={london} alt="london-img"/>
                                <div className='delhi-content'>
                                    <h5 className='delhi-h'>London</h5>
                                    <div className='content-ul'>
                                    <li className='content-ul'><a className='li-text' href='...'>Flights</a></li>
                                    <li className='content-ul'><a className='li-text' href='...'>Hotels</a></li>
                                    <li className='content-ul'><a className='li-text' href='...'>Car Hire</a></li>
                                    </div>
                                </div>
                            </div>
                            <div className="boxColumn">
                                <img className='card-img-top boxColumn-img' src={newyork} alt="newyork-img"/>
                                <div className='delhi-content'>
                                    <h5 className='delhi-h'>New York</h5>
                                    <div className='content-ul'>
                                    <li className='content-ul'><a className='li-text' href='...'>Flights</a></li>
                                    <li className='content-ul'><a className='li-text' href='...'>Hotels</a></li>
                                    <li className='content-ul'><a className='li-text' href='...'>Car Hire</a></li>
                                    </div>
                                </div>
                            </div>
                            <div className="boxColumn">
                                <img className='card-img-top boxColumn-img' src={canada} alt="canada-img"/>
                                <div className='delhi-content'>
                                    <h5 className='delhi-h'>Canada</h5>
                                    <div className='content-ul'>
                                    <li className='content-ul'><a className='li-text' href='...'>Flights</a></li>
                                    <li className='content-ul'><a className='li-text' href='...'>Hotels</a></li>
                                    <li className='content-ul'><a className='li-text' href='...'>Car Hire</a></li>
                                    </div>
                                </div>
                            </div>
                            <div className="boxColumn">
                                <img className='card-img-top boxColumn-img' src={japan} alt="japan-img"/>
                                <div className='delhi-content'>
                                    <h5 className='delhi-h'>Japan</h5>
                                    <div className='content-ul'>
                                    <li className='content-ul'><a className='li-text' href='...'>Flights</a></li>
                                    <li className='content-ul'><a className='li-text' href='...'>Hotels</a></li>
                                    <li className='content-ul'><a className='li-text' href='...'>Car Hire</a></li>
                                    </div>
                                </div>
                            </div>
                            <div className="boxColumn">
                                <img className='card-img-top ' style={{width:"38%"}} src={delhi} alt="newdelhi-img"/>
                                <div className='delhi-content'>
                                    <h5 className='delhi-h'>New Delhi</h5>
                                    <div className='content-ul'>
                                    <li className='content-ul'><a className='li-text' href='...'>Flights</a></li>
                                    <li className='content-ul'><a className='li-text' href='...'>Hotels</a></li>
                                    <li className='content-ul'><a className='li-text' href='...'>Car Hire</a></li>
                                    </div>
                                </div>
                            </div>
                            <div className="boxColumn">
                                <img className='card-img-top boxColumn-img' src={dubai} alt="dubai-img"/>
                                <div className='delhi-content'>
                                    <h5 className='delhi-h'>Dubai</h5>
                                    <div className='content-ul'>
                                    <li className='content-ul'><a className='li-text' href='...'>Flights</a></li>
                                    <li className='content-ul'><a className='li-text' href='...'>Hotels</a></li>
                                    <li className='content-ul'><a className='li-text' href='...'>Car Hire</a></li>
                                    </div>
                                </div>
                            </div>
                            <div className="boxColumn">
                                <img className='card-img-top boxColumn-img' src={london} alt="london-img"/>
                                <div className='delhi-content'>
                                    <h5 className='delhi-h'>New Delhi</h5>
                                    <div className='content-ul'>
                                    <li className='content-ul'><a className='li-text' href='...'>Flights</a></li>
                                    <li className='content-ul'><a className='li-text' href='...'>Hotels</a></li>
                                    <li className='content-ul'><a className='li-text' href='...'>Car Hire</a></li>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </section>
    </>
  )
}
export default Design