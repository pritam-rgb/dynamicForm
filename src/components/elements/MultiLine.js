import React from 'react'

const MultiLine = ({_id,type,fieldName,fieldLabel,sectionName,order,option}) => {
    return (
        <div class="form-floating">
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
            <label for="floatingTextarea">{fieldLabel}</label>
        </div>
    )
}

export default MultiLine
