import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

const ProductTable = ({ data, checked, keyword }) => {
    if (data === null) return <h2>로딩 중 입니다.</h2>
    let PrevCategory = ""
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <ProductCategoryRow category="category" />
                {data.map(({ category, price, stocked, name }) => {
                    if (PrevCategory !== category) {
                        PrevCategory = category
                        return (
                            < ProductCategoryRow category={category} /> ,
                            <ProductRow name={name} price={price} stocked={stocked} checked={checked} keyword={keyword} />
                        )
                    }
                    return (
                        <ProductRow name={name} price={price} stocked={stocked} checked={checked} keyword={keyword} />
                    )
                })}
            </tbody>
        </table >
    )
}

export default ProductTable
