import React  from 'react'

function QuakeContainer(props){
    const quakeContainer = props.earthquakes.map((earthquakes, i) => {
        return(
            <li key={i}>
                {earthquakes.id}
            </li>
        )
    })
    return(
        <React.Fragment>
            <ul>
                {quakeContainer}
            </ul>
        </React.Fragment>)
}
export default QuakeContainer;