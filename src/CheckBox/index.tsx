import React from 'react';

import './index.css'

interface CheckBoxProps {

}

const CheckBox: React.FC<CheckBoxProps> = ({children}) => {
    return <label>
        <input type="checkbox" className="ant-checkbox-indeterminate"/>
        <span className="inner"></span>
        {children}
    </label>

}

export default CheckBox;