import React from 'react';

import './errorPage.scss';

const ErrorPage = (props) => {
  
  const { reloadError } = props;

  return (
    <div className="error-indicator">
      <span className="error-indicator__title">
        Похоже, произошла небольшая ошибка.
      </span>
      <span className="error-indicator__description">
        Ничего страшного=) Попробуйте
      </span>
      <span className='error-indicator__description error-button' onClick={reloadError}>
        ещё раз
      </span>
    </div>
  );
};

export default ErrorPage;
