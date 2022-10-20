import React from 'react'

export default function Alert(props) {
    const capitalize = (word) =>
    {
const lower = word.toLowerCase();
return lower.charAt(0).toLowerCase()+lower.slice(1);
    }
  return (
    props.alert && <div className={`alert alert-${capitalize(props.alert.type)}-dismissible fade show`} role="alert">
<strong> {props.alert.type}</strong>: {props.alert.msg}
  </div>
  )
}
