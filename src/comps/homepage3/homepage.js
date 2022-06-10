import RequestCard from "./userRequestCard";
import DonateMore from "./donateMoreModal";
import { Link } from 'react-router-dom';
import {useEffect,useState} from 'react';
import {APIIP} from '../settings/config';
import CardSkeleton from "./cardSkeleton";
import Navbar from "../footer_header/navbar";
import Footer from "../footer_header/footer";


const MainHomepage = () => {

    const [featuredData,setFeaturedData] = useState([]);
    const [allFundraisers,setAllFundraiser] = useState([]);    
    const [moreDataAvailable,setMoreDataAvailable] = useState(true);
    const [currentPage,setCurrentPage] = useState(1);

    useEffect(() => {
        fetch(APIIP.ip+"/requests?page=1&size=3&featured=true",{
            method:"GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            response.json().then(response => {
                // console.log(response);
                setFeaturedData(response);
            })
        })

        fetch(APIIP.ip+"/requests?page=1&size=8&featured=true",{
            method:"GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            response.json().then(response => {
                // console.log(response);
                setAllFundraiser(response);
            })
        })


    },[]);

    function updateFundraisers(){
        fetch(APIIP.ip+"/requests?page="+currentPage+"&size=8&featured=true",{
            method:"GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            response.json().then(response => {                
                setAllFundraiser(allFundraisers.concat(response));
                setCurrentPage(currentPage+1);
            })
        })
    }

    function scrollToDonate(){
        window.scrollTo(0, window.scrollY+450);
    }
    
    return ( 
        <>
        <Navbar>
            </Navbar>            
                <div className="conatiner">
                <div className="hero-banner">
                    <div className="hero-banner-text">
                        <span className="bold">COME, LAY THE FOUNDATION OF EDUCATION</span>                    
                        <span>Let us build a educated nation, together</span>
                        <br />
                        <br />
                        <div>
                            <button onClick={scrollToDonate} className="donate-btn">Donate Now</button>     
                            <Link to="/newrequest">
                                <button className="fundraiser-btn">Became a Fundraiser</button>         
                            </Link>       
                        </div>
                    </div>
                </div>



                <div className="homepage-card">                

                    <h6 className="home-title title bold">Featured Fundraisers</h6>   
                    <div className="list-card-body">                        
                        <div className="home-card-container">        

                        {featuredData.length<1 && <> <CardSkeleton/> <CardSkeleton/> <CardSkeleton/> </> }
                        { featuredData.map(function (arrayItem,idx) { return <RequestCard key={idx} data={arrayItem}/> })  }                      
                        </div>                        
                    </div>

                    <DonateMore/>

                    <br />

                    <div className="list-card-body">                        
                        <div className="home-card-container">  
                        {allFundraisers.length<1 && 
                        <>
                            <CardSkeleton/>
                            <CardSkeleton/>
                            <CardSkeleton/>
                            <CardSkeleton/>
                            <CardSkeleton/>
                            <CardSkeleton/>
                            <CardSkeleton/>
                            <CardSkeleton/>                        
                        </>
                        }                          
                        {
                            allFundraisers.map(function (arrayItem,idx) { return <RequestCard key={idx} data={arrayItem}/> })  
                        }                       

                        </div>                                           
                    </div>                                                         
                </div>                

                <div className="center load-more-btn">
                    {
                        moreDataAvailable &&                        
                        <button  className="center" onClick={() => updateFundraisers(allFundraisers.length)}>
                            Load More Fundraisers &nbsp;
                            <i className="fa fa-angle-double-down" aria-hidden="true"></i>
                        </button>       
                    }
                </div>        
                <Footer/>
                </div>
                
        </>        
     );
}
 
export default MainHomepage;