import React from 'react';
import Input from '../Input';
import MultiLine from '../MultiLine';
import Select from '../Select';

const UserInformation = ({_id,type,fieldName,fieldLabel,sectionName,order,option}) => {
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
        case "multiLine":
            return(
                <MultiLine 
                fieldName={fieldName}
                fieldLabel={fieldLabel}
                _id={_id}
                option={option}
                />
            )
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

export default UserInformation
