import { Fragment } from 'react';
import { Outlet } from 'react-router';

const Frame = () => {


  const header = [
    'Home',
    'About',
    'Skills',
    'Experience',
    'Education',
    'Projects',
    'Contact',
  ];

  return (
    <Fragment>
      <nav className={'header'}>
        {
          header.map((item) => {
            return <div className={'menu'} data-content={item} key={item}>{item}</div>;
          })
        }
      </nav>
      <Outlet />
    </Fragment>

  );
};

export default Frame;
