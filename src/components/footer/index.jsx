/* eslint-disable max-len */
import React from 'react';
import classNames from 'classnames/bind';
import styles from './footer.css';

const cx = classNames.bind(styles);

const urls = {
  site: 'https://lab.nocturne.app',
  github: 'https://github.com/adamgruber'
};

const Footer = () => {
  const copyrightYear = new Date().getFullYear();
  return (
    <footer className={ cx('component') }>
      <div className='container'>
        <p>
          &copy;{ copyrightYear }&nbsp;<a href={ urls.site } target='_blank' rel='noopener noreferrer'>NocturneLab</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
