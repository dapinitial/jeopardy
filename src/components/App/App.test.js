import React from 'react';
import '../../setupTests';
import {shallow} from 'enzyme';
import {App} from './App';
import {categories} from '../../data/fixtures';

const props = {
  categories
};

describe('App', () => {
  const app = shallow(<App {...props}/>);

  it('renders the title', () => {
    expect(app.find('h2').text()).toEqual('Jeopardy App!')
  });

  it('creates the correct number of links', () => {
    expect(app.find('Link').length).toEqual(categories.length);
  });

  it('titles the links correctly', () => {
    app
      .find('Link h4')
      .forEach((linkTitle, index) => {
        expect(linkTitle.text()).toEqual(categories[index].title);
      })
  })
});