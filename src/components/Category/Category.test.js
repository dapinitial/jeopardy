import React from 'react';
import '../../setupTests';
import {mount} from 'enzyme';
import './Category';
import {Category} from './Category';
import {categories, clues} from '../../data/fixtures';
import {fakeServer} from 'sinon';

const props = {
  category: categories[0]
};

describe('Categrory', () => {
  let server;

  beforeEach(() => {
    server = fakeServer.create();

    server.respondWith('GET', `http://jservice.io/api/clues?category=${props.category.id}`, [
      200, {
        'Content-Type': 'application/json'
      },
      JSON.stringify(clues)
    ]);
  });

  describe('when creating a new category', () => {
    let category;
    beforeEach(done => {
      category = mount(<Category {...props}/>);

      server.respond();

      setTimeout(done);

      category.setState({clues});
    });

    it('logs the category', () => {
      console.log(category.debug());
    });

    it('initializes the clues in state', () => {
      expect(category.state().clues).toEqual(clues);
    });

    it('renders the category title', () => {
      expect(category.find('h2').text()).toEqual(props.category.title);
    });

    it('renders the correct number of clues', () => {
      expect(category.find('Clue').length).toEqual(clues.length);
    });
  });
});