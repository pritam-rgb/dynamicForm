import React from 'react';

import BrandInformation from './elements/section/BrandInformation';
import AddressInformation from './elements/section/AddressInformation';
import UserInformation from './elements/section/UserInformation';
import EntityInformation from './elements/section/EntityInformation';
import AdditionalInformation from './elements/section/AdditionalInformation';


const Element = ({fieldData: {_id,type,fieldName,fieldLabel,sectionName,option,required}}) => {

    console.log(sectionName);
    switch (sectionName) {
        case "Brand Information":
            return(<BrandInformation 
                type={type}
                fieldName={fieldName}
                fieldLabel={fieldLabel}
                option={option}
                required={required}
            />)
        case "User Information":
            return (<UserInformation 
                type={type}
                fieldName={fieldName}
                fieldLabel={fieldLabel}
                option={option}
                required={required}
                />)
        case "Address Information":
                return (<AddressInformation 
                type={type}
                fieldName={fieldName}
                fieldLabel={fieldLabel}
                option={option}
                required={required}
                />)
        case "Entity Information":
                return (<EntityInformation 
                type={type}
                fieldName={fieldName}
                fieldLabel={fieldLabel}
                option={option}
                required={required}
                />)
        case "Additional Information":
                return (<AdditionalInformation 
                    type={type}
                    fieldName={fieldName}
                    fieldLabel={fieldLabel}
                    option={option}
                    required={required}
                    />)
    
        default:
            return null;
    }

}

export default Element;
