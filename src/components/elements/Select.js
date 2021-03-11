import React from 'react'

const Select = ({_id,type,fieldName,fieldLabel,sectionName,option}) => {
    return (
        
        <div style={{display:'flex'}}className="select-container container">
            <div className="labelFor">{fieldLabel}</div>
                <div>
                <select style={{width:'100%'}}className="form-select form-select-lg mb-3" aria-label="default select example">
                {/* <option selected>{option.optionLabel}</option> */}
                    {option.length>0 && option.map((option,i)=>
                        <option value={option.optionLabel}  key={i}>{option.optionLabel}</option>
                    )}
                </select>
                </div>
        </div>
    )
}

export default Select
