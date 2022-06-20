import React from 'react'
import { Link } from 'react-router-dom'
import './searchItem.css'
const SearchItem = ({ item }) => {
    console.log({ item })
    return (
        <div className='searchItem'>

            <div className="siDesc">
                {item.photos &&
                    <img src={item.photos[0]} alt="" className="siImg" />
                }
                <h1 className="siTitle">{item.name}
                </h1>
                <span className="siDistance">{item.distance}</span>
                <span className="siTaxiOp">Subway Access</span>
                <span className="siSubtitle">Travel Sustainable property</span>
                <span className="siFeatures">{item.desc}</span>
                <span className="siCancelOp">Free cancellation</span>
                <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
                <span className="siAddDetails">Only 4 rooms left at this price on our site</span>
            </div>
            <div className="siDetails">
                {item.rating &&
                    <div className="siRating">
                        <span>Excellent</span>
                        <button>{item.rating}</button>
                    </div>
                }
                <div className="siDetailTexts">
                    <span className="siPrice">{item.cheapestPrice}</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <Link to={`/hotels/${item._id}`}>
                    <button className="siCheckBtn">See availability</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SearchItem