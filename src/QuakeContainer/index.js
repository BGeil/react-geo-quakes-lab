import React  from 'react'

function QuakeContainer(props){
    const quakeContainer = props.earthquakes.map((earthquake, i) => {
        return(
            <ul key={i}>
                {earthquake.properties.title}
            </ul>
        )
    })
    return(
        <React.Fragment>
            <div id="info">
                {quakeContainer}
            </div>
        </React.Fragment>)
}
export default QuakeContainer;