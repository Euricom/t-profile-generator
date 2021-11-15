import * as React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { initialSkillSets, SkillContext } from '../../contexts/skills';
import { render } from '../../utils/test/render';
import Skills from '.';

describe('Skills', () => {
  it('should render by default', () => {
    const changeSkill = jest.fn();
    const changeProficiency = jest.fn();
    const changeFullName = jest.fn();
    const resetProfile = jest.fn();
    const sortSkills = jest.fn();

    render(
      <SkillContext.Provider
        value={{
          fullName: '',
          changeFullName,
          skillSets: initialSkillSets,
          changeSkill,
          changeProficiency,
          resetProfile,
          sortSkills
        }}
      >
        <Skills />
      </SkillContext.Provider>,
    );

    const gen1SkillInput = screen.getByRole('textbox', { name: /generalisme 1/i });
    userEvent.type(gen1SkillInput, 'React');
    expect(changeSkill).toHaveBeenNthCalledWith(3, 'g1', 'a');

    screen.getByRole('textbox', { name: /generalisme 2/i });
    screen.getByRole('textbox', { name: /generalisme 3/i });
    screen.getByRole('textbox', { name: /specialisme 1/i });
    screen.getByRole('textbox', { name: /specialisme 2/i });
    screen.getByRole('textbox', { name: /specialisme 3/i });

    const fullNameInput = screen.getByRole('textbox', { name: /full name/i });
    userEvent.type(fullNameInput, 'Tim');
    expect(changeFullName).toHaveBeenCalledTimes(3);

    expect(screen.getByRole('button', { name: /clear/i })).toBeVisible();
    expect(screen.getByRole('button', { name: /sort/i })).toBeVisible();

    const clearButton = screen.getByRole('button', { name: /clear/i });
    userEvent.click(clearButton);
    expect(resetProfile).toHaveBeenCalledTimes(1);
  });
});
