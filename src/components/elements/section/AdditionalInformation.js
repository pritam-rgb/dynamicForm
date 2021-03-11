import React from 'react';
import Input from '../Input';
import Select from '../Select';
import MultiLine from '../MultiLine';

const AdditionalInformation = ({_id,type,fieldName,fieldLabel,order,sectionName,option}) => {
    switch (type) {
        case "singleLine":
            return(
                
                <Input 
                fieldName={fieldName}
                fieldLabel={fieldLabel}
                _id={_id}
        />)
        case "multiLine":
            return(<div>
                <div>
                    {order==12?<h1>{sectionName}</h1>:""}
                </div>
                <MultiLine 
                fieldName={fieldName}
                fieldLabel={fieldLabel}
                _id={_id}
                option={option}
                />
            </div>)
            
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
