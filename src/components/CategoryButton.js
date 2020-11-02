import React from 'react'
export default function CategoryButton(props) {
    return (
        <button className="selectionbtn" onClick={() => props.setCategory(props.category)}>
            {props.category}
        </button>
    )
}
