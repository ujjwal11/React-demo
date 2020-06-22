import React from 'react'

const Banner = () => {
    return(
        <div >
          <p className="shipping-msg">
            FREE SHIPPING ON ORDERS OVER $20
                 </p>
          <div className="redBox col-sm-12 ">

            <h3>Markdowns on everything</h3>
            <p className="black-text">All your favorite brands at fantastic prices</p>
            {/* <a href="#" className="btn my-2 kk" title="">SHOP ALL BRANDS</a> */}

            <button type="button" className="btn my-2 text-uppercase">shop all brands</button>
          </div>
        </div>
    )
}

export default Banner