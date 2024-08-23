import React, { useEffect } from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {

    return (
        <Link to={`/movie/${props.name}`}>
            <div class="item">
                <div class="img">
                    <img src={props.image} alt="" />
                </div>
                <div class="ucm-header">
                    <div class="ucm-header-left">
                        <p href="">{props.name}</p>
                    </div>
                    <div class="ucm-header-right">
                        <span>{props.year}</span>
                    </div>
                </div>
                <div class="ucm-footer">
                    <div class="ucm-footer-left">
                        <span>HD</span>
                    </div>
                    <div class="ucm-footer-right">
                        <span><ion-icon name="time-outline"></ion-icon>{props.time_movie}</span>
                        <span><ion-icon name="star-outline"></ion-icon>{props.star_movie}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Item