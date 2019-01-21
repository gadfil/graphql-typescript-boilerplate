import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { Switch, Route, Link } from 'react-router-dom';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

import MainPage from './MainPage';
import Orders from '../orders';
import User from './User';
import Hello from './Hello';
const routes = [
  { path: '/orders', component: Orders },
  { path: '/user', component: User },
  { path: '/hello', component: Hello },
  //   { path: '/products', component: Products },
  //   { path: '/customers', component: Customers },
  //   { path: '/employees', component: Employees },
  //   { path: '/categories', component: Categories },
  //   { path: '/shippers', component: Shippers },
  //   { path: '/suppliers', component: Suppliers },
  //   { path: '/regions', component: Regions },
];

export const menuLinks: { [link: string]: string } = {
  '/orders': 'Orders',
  '/products': 'Products',
  '/customers': 'Customers',
  '/employees': 'Employees',
  '/categories': 'Categories',
  '/shippers': 'Shippers',
  '/suppliers': 'Suppliers',
  '/regions': 'Regions',
};

export default class Menu extends React.Component<{}> {
  public render() {
    return (
      <Nav bsStyle="tabs" style={{ marginBottom: '20px' }}>
        <IndexLinkContainer to={{ pathname: '/' }}>
          <NavItem>MainPage</NavItem>
        </IndexLinkContainer>
        <IndexLinkContainer to={{ pathname: '/user' }}>
          <NavItem>User</NavItem>
        </IndexLinkContainer>

        {Object.keys(menuLinks).map(link => (
          <LinkContainer key={link} to={{ pathname: link }}>
            <NavItem>{menuLinks[link]}</NavItem>
          </LinkContainer>
        ))}
      </Nav>
    );
  }
}
