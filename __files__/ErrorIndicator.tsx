import React, { useMemo } from 'react';

const defaultProps = {
  error: null as Error | null,
};

export interface ErrorIndicatorProps {
  error?: Error | null;
  className?: string;
  style?: React.CSSProperties;
  options?: object;
}

type DefaultProps = typeof defaultProps;
type PropsWithDefault = ErrorIndicatorProps & DefaultProps;

export const ErrorIndicator: React.FC<ErrorIndicatorProps> = (props) => {
  const { error, className: classNameProp, style } = props as PropsWithDefault;

  const className = useMemo(() => {
    return classNameProp ? `error-indicator ${classNameProp}` : 'error-indicator';
  }, [classNameProp]);

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
