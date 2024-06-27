import React from 'react';

export default function Alert(props) {
  const capitalize = (word) => {
    if (word === 'danger') {
      word = 'error';
    }
    let p = word;
    return p.charAt(0).toUpperCase() + p.slice(1);
  };

  const getTypeStyle = (type) => {
    return type === 'danger' ? { color: 'red' } : { color: 'green' };
  };

  return (
    <div style={{ height: '50px' }}>
      {props.alert && (
        <div className={`alert alert-${props.alert.type}`} role="alert">
          <strong style={getTypeStyle(props.alert.type)}>
            {capitalize(props.alert.type)}
          </strong>
          ! "{props.alert.msg}"
        </div>
      )}
    </div>
  );
}
