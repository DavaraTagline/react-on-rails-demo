import React from 'react'
import Fruit from './Fruit'

const AllFruits = (props) => {
    var fruits = props.fruits.map((fruit) => {
        return (
            <div key={fruit.id}>
                <Fruit fruit={fruit} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate} />
            </div>
        )
    })
    return (
        <div>
            {fruits}
        </div>
    )
}
export default AllFruits;
