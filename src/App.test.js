import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

const thisProject = {
  hasUnitTests: true,
  hasE2ETests: true,
  hasIssues: false
};

describe('my beverage', () => {
  test('is delicious', () => {
    expect(thisProject.hasUnitTests).toBeTruthy();
  });

  test('is not sour', () => {
      expect(thisProject.hasE2ETests).toBeTruthy();
  });

  test('is not sour', () => {
      expect(thisProject.hasIssues).toBeFalsy();
  });
});

test('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
});
