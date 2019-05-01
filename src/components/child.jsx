import React from 'react'

function Child(props) {
    return (
        <ul>
            {
                props.list.map(item => <li>{item}</li>)
            }
        </ul>
    )
}

export default Child
