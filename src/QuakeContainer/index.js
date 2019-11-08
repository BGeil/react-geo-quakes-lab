import React  from 'react'

function QuakeContainer(props){
    const quakecontainer = props.properties.map((properties, i) => {
        return(
            <li key={i}>
                {properties.title}
            </li>
        )
    })
    return(
        <React.Fragment>
            <ul>
                {quakecontainer}
            </ul>
        </React.Fragment>)
}

export default QuakeContainer;