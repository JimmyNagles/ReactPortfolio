import React from 'react'

const Container = (props) =>{
   
        return (

            <div className={props.clase}>

                <div >
                    <h2>X</h2>
                    {props.texto}


                </div>
                
            </div>
        )
    
}


export default Container


