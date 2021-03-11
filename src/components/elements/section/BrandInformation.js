import React from 'react';
import Input from '../Input';
import Select from '../Select';

const BrandInformation = ({_id,type,fieldName,fieldLabel,sectionName,option}) => {
    <h1>{sectionName}</h1>
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

    // console.log("_id: ",_id);
    // console.log(type);
    // switch (type) {
    //     case "singleLine":
    //         return(<Input 
    //             option={option}
    //             fieldName={fieldName}
    //             fieldLabel={fieldLabel}
    //             sectionName={sectionName}
    //         />)
            
    //     case "dropDown":
    //         return(<Select 
    //                 option={option}
    //                 fieldName={fieldName}
    //                 fieldLabel={fieldLabel}
    //                 sectionName={sectionName}
    //         />)
    //     default:
    //         return null;
    // }
    
}

export default BrandInformation
