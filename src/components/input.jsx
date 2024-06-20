import React from 'react'
import propTypes from 'prop-types'

const InputField = ({type ,value , onChange , placeholder ,style}) => {

    return (
        <>
        <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        style={style}
        />
        </>
    )
}

//  --Type checking--
InputField.propTypes = {
    type:propTypes.string,
    value:propTypes.string,
    placeholder:propTypes.string,
    onChange:propTypes.func,
    style:propTypes.object 
}

//  -- Define default values for props --
InputField.defaultProps = {
     type:'text',
     value:'',
     placeholder:'Type Here',
     onChange:'',
     style:{}
}

export default InputField