import React from 'react';
import Banner from "../components/Banner";
import { useContext } from 'react';
import { TiendaContext } from '../context/TiendaContext'


export default function Detalle() {
    const {singleproduct, handleDetallito, user, handleAlerta, handleLike} = useContext(TiendaContext);
    
    return (
        
        <>
        <Banner url="/images/banner-home.png" texto="Detalle producto"/>
        
        <section className="productos detalle">
	<div className="container">
		
			{singleproduct.map((item) => {
            const {id, imagen, titulo, descripcion, precio } = item;
            return <div className="row mt-5 mb-4" key={id}>
            	<div  className="col-lg-4 mb-0">
            	            			<div className="card">
            	            			    <figure>
                                                <img src={imagen} className="card-img-top" alt="Patitas Pet Store"/>
                                            </figure>
            	            			</div>
            	        			</div>
            				        <div className="col-lg-8">
            				        	<div className="card">
            				        	    <div className="card-body">
            				        	    <svg classname="svg-like" width="40px" viewBox="0 0 24 24"><path fill="gray" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path></svg>
            				        	        <h5 className="card-title">{titulo}</h5>
            				        	        <p className="card-text">{descripcion}</p>
            				        	        <h4 className="precio">${precio}</h4>
            				        	        <div className="box-btn-comprar">

            				        	         { !user ?  <button onClick={() => handleAlerta()}  className='btn btn-comprar'><i class="fas fa-cart-plus"></i> Agregar</button>  : <button onClick={() => handleDetallito(id, imagen, titulo, descripcion, precio)} className='btn btn-comprar'><i class="fas fa-cart-plus"></i> Agregar</button> }

                                                 <button onClick={() => handleLike(id, imagen, titulo, descripcion, precio)} className='btn btn-comprar'><i class="fas fa-cart-plus"></i> like</button>

            				        	        </div>
            				        	    </div>
            				        	</div>
            				        </div>
            </div>
            
        })}
		
	</div>
</section>
        
      
           
        </>
    )
} 