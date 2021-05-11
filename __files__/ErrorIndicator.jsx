import React, { useMemo } from 'react';

const defaultProps = {
  error: null,
};

export const ErrorIndicator = (props) => {
  const { error, className: classNameProp, style } = props;

  const className = useMemo(() => {
    return classNameProp ? `error-indicator ${classNameProp}` : 'error-indicator';
  }, []);

  if (!error) {
    return null;
  }

  return (
    <div className={className} style={style}>
      <h3>An error has occurred</h3>
      <p>{error.message || 'Unknown error message'}</p>
      <button type="button" onClick={() => window.location.reload()}>
        Reload
      </button>
    </div>
  );
};

ErrorIndicator.defaultProps = defaultProps;
