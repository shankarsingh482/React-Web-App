import React from 'react';
const InputBtn = (props) =>
(
<input type={props.type} name={props.name} placeholder={props.placeholder}  onChange={props.onChangeFunc} className={props.className} value={props.value} />
)
export default InputBtn