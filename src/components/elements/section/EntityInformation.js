import React from 'react';
import Input from '../Input';
import Select from '../Select';

const EntityInformation = ({_id,type,fieldName,fieldLabel,sectionName,option,required}) => {
    switch (type) {
        case "singleLine":
            return(<Input 
                fieldName={fieldName}
                fieldLabel={fieldLabel}
                _id={_id}
                required={required}
            />)
            
        case "dropDown":
            return(<Select 
                fieldName={fieldName}
                fieldLabel={fieldLabel}
                _id={_id}
                option={option}
                required={required}
            />)
        default:
            return null;
    }
}

export default EntityInformation
