import React from 'react';

import BrandInformation from './elements/section/BrandInformation';
import AddressInformation from './elements/section/AddressInformation';
import UserInformation from './elements/section/UserInformation';
import EntityInformation from './elements/section/EntityInformation';
import AdditionalInformation from './elements/section/AdditionalInformation';


const Element = ({fieldData: {_id,type,fieldName,fieldLabel,sectionName,option,order,required}}) => {

    console.log(sectionName);
    switch (sectionName) {
        case "Brand Information":
            return(<BrandInformation 
                type={type}
                fieldName={fieldName}
                fieldLabel={fieldLabel}
                option={option}
                sectionName={sectionName}
                required={required}
                order={order}
            />)
        case "User Information":
            return (<UserInformation 
                type={type}
                fieldName={fieldName}
                fieldLabel={fieldLabel}
                option={option}
                order={order}
                sectionName={sectionName}
                required={required}
                />)
        case "Address Information":
                return (<AddressInformation 
                type={type}
                fieldName={fieldName}
                fieldLabel={fieldLabel}
                option={option}
                order={order}
                sectionName={sectionName}
                required={required}
                />)
        case "Entity Information":
                return (<EntityInformation 
                type={type}
                fieldName={fieldName}
                fieldLabel={fieldLabel}
                option={option}
                order={order}
                sectionName={sectionName}
                required={required}
                />)
        case "Additional Information":
                return (<AdditionalInformation 
                    type={type}
                    fieldName={fieldName}
                    fieldLabel={fieldLabel}
                    option={option}
                    order={order}
                    sectionName={sectionName}
                    required={required}
                    />)
    
        default:
            return null;
    }

}

export default Element;
