import React from 'react';
import Input from '../Input';
import Select from '../Select';

const AdditionalInformation = ({_id,type,fieldName,fieldLabel,sectionName,option}) => {
    switch (type) {
        case "singleLine":
            return(<Input 
                fieldName={fieldName}
                fieldLabel={fieldLabel}
                _id={_id}
            />)
            
        case "dropDown":
            return(<Select 
                fieldName={fieldName}
                fieldLabel={fieldLabel}
                _id={_id}
                option={option}
            />)
        default:
            return null;
    }
}

export default AdditionalInformation
