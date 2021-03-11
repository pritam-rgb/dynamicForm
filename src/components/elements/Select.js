import React from 'react'

const Select = ({_id,type,fieldName,fieldLabel,sectionName,option}) => {
    return (
        
        <div className="select-container container">
            <div style={{marginBottom:'5px'}}className="labelFor">{fieldLabel}</div>
            <div>
                <select className="form-select" aria-label="default select example">
                
                    {option.length>0 && option.map((option,i)=>
                        <option value={option.optionLabel}  key={i}>{option.optionLabel}</option>
                    )}
                </select>
            </div>
        </div>
    )
}

export default Select
