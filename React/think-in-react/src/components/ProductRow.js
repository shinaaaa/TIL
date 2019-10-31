import React from 'react'

const ProductRow = (props) => {
    const nameLowerCase = props.name.toLowerCase();
    const keywordLowerCase = props.keyword.toLowerCase();
    if (props.checked && !props.stocked) return null;
    if (!nameLowerCase.includes(keywordLowerCase)) return null;
    return (
        <tr>
            <td style={{ color: !props.stocked && 'red' }}>{props.name}</td>
            <td>{props.price}</td>
        </tr>
    )
}

export default ProductRow
