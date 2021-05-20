import React,{Component} from 'react'
import Card from './Card';
import img1 from "../components/image/coding.gif"
import img2 from "../components/image/handshake.gif"
import img3 from "../components/image/save.gif"
import img4 from "../components/image/list.gif"
class Card1 extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-3">
                        <Card imgsrc={img1} title="Code" text=""/>
                    </div>
                    
                    <div className="col-md-3">
                        <Card imgsrc={img2} title="Collaborate" text=""/>
                    </div>
                    
                    <div className="col-md-3">
                        <Card imgsrc={img3} title="Save" text=""/>
                    </div>
                    
                    <div className="col-md-3">
                        <Card imgsrc={img4} title="View" text=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card1
