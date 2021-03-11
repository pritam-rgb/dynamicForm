import React from 'react'

const Input = ({_id,type,fieldName,fieldLabel,sectionName,required}) => {
    return (
        <div className="Input-Container">
            
            <div style={{display:"flex",justifyContent:"space-between"}}>
                
                <label htmlFor=""
                className="form-label">{fieldLabel}</label> 
                <input  className="form-control" placeholder={fieldLabel} required={required} />
            </div>
        </div>
    )
}

export default Input
