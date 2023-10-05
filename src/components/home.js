import React from 'react';
import { Link } from 'react-router-dom';
import empada from '../assets/empadinha.png'
import donuts from '../assets/donuts.png'
import logo from '../assets/logo.png'

export default function Home() {
    return (
        <div style={{ backgroundColor: "#FAF0C4"}}>
            <div style={{ backgroundColor:"#DEB852"}}>
                <h1 style={{ color:"#FAF0C4", fontFamily:'Oswald', fontSize:'70px', margin:0}}>
                    Roscadinhas
                </h1>
            </div>
            <div style={{ flexDirection: "row", display:'flex', justifyContent: 'center',paddingTop:'100px' }}>
               <div style={{paddingLeft:'90px', paddingTop:'5px', marginTop:'-150px'}}>
                <img src={logo} style={{width: '600px', paddingRight:'60px', marginTop:'60px'}}/>
            </div> 
            <div style={{ marginRight:'60px', paddingTop:'50px', marginLeft:'50px',paddingRight:'200px', fontSize:'25px', fontFamily:'poppins'}} >
                <h3 style={{ color:'#ad851a'}}>
                    Somos uma loja de rosquinhas e empadinhas e levamos seu pedido até sua casa, você pode escolher inúmeros sabores de empadinhas e rosquinhas. Aqui você tem sua refeição completa!
                </h3>
            </div>
            </div>
            
            
            <div >
                <div style={{ flexDirection: "row", display:'flex', justifyContent: 'center'}}>
                  <div style={{ paddingBottom:'100px', paddingRight: '100px', paddingLeft: '100px'}}>
                    <button>
                        <Link to="/roscas" style={{ color: "white" }}><img src={donuts} style={{width:"400px"}}/></Link>
                    </button>
                </div>
                <div style={{ paddingBottom:'100px', paddingRight: '100px', paddingLeft:'100px'}}>
                    <button>
                        <Link to="/empadas" style={{ color: "white" }}><img src={empada} style={{width:"400px"}}/></Link>
                    </button>
                </div>  
                </div>
                <br/>
                </div>
            </div>
    )
}

