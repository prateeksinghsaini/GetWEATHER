import React from 'react'

export default function Info(props) {
    return (
        <>
            <div className=' d-flex justify-content-between row pt-5'>
                <h1 className='text-center fw-bolder'>Today</h1>
                <p className='text-center'>{props.date} | {props.timezone}</p>
                <div className='col-sm-12 col-lg-6 col-md-12 p-5 row'>
                    <h1 className='fw-bolder col-12 text-center' id="temp">
                        {props.spinner ? (<div className="spinner-border text-light" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>) :
                            (props.temp + "°C")
                        }
                    </h1>

                    <h4 className='col-12 text-center newfont'>
                        {props.spinner ? ("") :
                            ( "Btw " + props.max + " - " + props.min + "°C" )
                        }
                        <p className='newfont'> {" Feels like " + props.feelsLike + "°C"}</p>
                    </h4>
                </div>
                <div className='col-sm-12 col-lg-5 row p-sm-0 p-md-5'>
                    <p className=' fw-bolder col-12 text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-brightness-alt-low-fill" viewBox="0 0 16 16">
                            <path d="M8.5 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5 6a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zM2 11a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0zm10.243-3.536a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-8.486-.707a.5.5 0 1 0 .707.707.5.5 0 0 0-.707-.707zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4z" />
                        </svg>
                        Sunrise at {props.sunrise}, Sunset at {props.sunset}
                    </p>
                    {props.spinner ? ("Lodaing...") :
                        (
                            <div className='col-sm-12 '>
                                <ul style={{ fontStyle: "italic",listStyle:"none"}}>
                                    <li>
                                        <h3 className='lead'>
                                            {props.des1}
                                        </h3>
                                    </li>
                                    <li>
                                        <h3 className='lead'>
                                            {props.des2}
                                        </h3>
                                    </li>
                                </ul>

                            </div>

                        )
                    }
                </div>
            </div>
        </>
    )
}
