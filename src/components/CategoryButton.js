import React from 'react'
export default function CategoryButton(props) {
    return (
        <button onClick={() => props.setCategory(props.category)}>
            {props.category}
        </button>
    )
}
