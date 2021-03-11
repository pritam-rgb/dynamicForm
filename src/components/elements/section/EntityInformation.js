import React from 'react';
import Input from '../Input';
import Select from '../Select';

const EntityInformation = ({_id,type,fieldName,fieldLabel,sectionName,option,required,order}) => {
    switch (type) {
        case "singleLine":
            return(<div>
                <div>
                    {order==1?<h1>{sectionName}</h1>:""}
                </div>
                <Input 
                fieldName={fieldName}
                fieldLabel={fieldLabel}
                _id={_id}
        /></div>)
            
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
