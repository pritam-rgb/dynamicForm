import React from 'react'

const Input = ({_id,type,fieldName,fieldLabel,sectionName,required}) => {
    return (
        <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">{fieldLabel}</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder={fieldLabel} required={required} />
        </div>
        
        
    )
}

export default Input
