import React from 'react'
import { AboutProduct } from './AboutProduct'

export const ProductList = ({ data }) => {
    return (
        <div>
            <div className={data.category_id !== 687 ? "anchor" : ""} $ id={data.category_id}></div>

            <div className="product" >

                <div className="product-title">
                    <h2 class="category-header"> {data.category_name} <span class="product-count-badge">{data.product_count}</span></h2>
                    <div className="see-all">See All</div>
                </div>
                <AboutProduct data={data.products} />

            </div>

        </div>
    )
}
