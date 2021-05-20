 import Button from './components/Button'
 import Card1 from './components/Card1'
 import Footer from './components/Footer'
function App() {

  return (
    <div className="page">
            <div className="row r1">
            <div className="col">

            <br /><br />
            <center><img className="navbar-brand " src="./code.gif" alt="" height='200px' width= '200px'/></center>
            <center><b> <h1>CodePad</h1></b>
            <h2>A Collaborative IDE</h2>
            <br />
            <h4>Come & Explore the BEST place to code and collaborate!</h4>
            <br />
            <Button id='log' color='' text='Sign in / Sign up' />
            </center>
            </div>

            <div className="col">
            <img src="./pic1.gif" alt="" height="700px" width="700px" />

            </div>
                
       </div>

       <div className="row r2">
                <h1 className="feature">Features</h1>
              <Card1/>  
          
       
        </div>
        <div className="row ">
          <br /><br /><br />
        </div>
       <div className="row rowf" >
            <Footer/>
       </div>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 130"><path fill="#4285f4" fill-opacity="1" d="M0,32L80,64C160,96,320,160,480,154.7C640,149,800,75,960,37.3C1120,0,1280,0,1360,0L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    </div>
  );
}

export default App;