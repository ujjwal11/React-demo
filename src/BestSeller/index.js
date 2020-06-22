import React, { useState, useEffect } from 'react'
import axios from 'axios';

const BestSeller = () => {
    const [data, setData] = useState()

    useEffect(() => {
        // Update the document title using the browser API
        
        axios.get(`http://demo7512624.mockable.io/homeData`)
        .then(res => {
            console.log('resres>>',res)
            setData(res.data.uniBestSeller)
        })
    }, []);
    console.log('datadatadata>>',data)
    return (
        <section className="bestSeller container-fluid">
            <div className="row">
                {
                    data && data.length > 0 ?
                        data.map((s, i) => {
                            return (
                                <div className="col-sm-12 col-md-4 col-lg-4" key={i}>
                                    <div><img src={s.sourceImage} className="lazy" onError={(e) => { e.target.onerror = null; e.target.src = "assets/img/errorimage.jpg" }} alt="no image found" /></div>
                                    <div className="bestSellerBox">
                                        <p>
                                            <a /*href="#"*/>{s.bestSellerType}</a>
                                        </p>
                                        <p className="bsSublink"><a /*href="#"*/>Activewear</a> / <a /*href="#"*/>Tees</a> / <a /*href="#"*/>Jeans</a> / <a /*href="#"*/>Dresses</a></p>
                                    </div>
                                </div>
                            )
                        })
                        :
                        null
                }
            </div>
        </section>
    )
}

export default BestSeller