/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react';
import styled from 'styled-components';
import { SkillSetControl } from '..';
import { isSkillType, Skill, SkillContext } from '../../contexts/skills';
import { Label } from '../SkillSetControl';
import TextInput from '../TextInput';

const FullNameWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLabel = styled(Label)`
  display: inline-block;
  margin-right: 10px;
`;

const controlLabels: Record<Skill, string> = {
  gen1: 'Generalisme 1',
  gen2: 'Generalisme 2',
  gen3: 'Generalisme 3',
  spec1: 'Specialisme 1',
  spec2: 'Specialisme 2',
  spec3: 'Specialisme 3',
};

const Skills = (): JSX.Element => {
  const { fullName, changeFullName, changeProficiency, changeSkill, skillSets } = React.useContext(SkillContext);

  const handleFullNameChange: React.ChangeEventHandler<HTMLInputElement> = (event) =>
    changeFullName(event.target.value);

  const controls = Object.entries(controlLabels).map((keyVal) => {
    const [skill, label] = keyVal;
    isSkillType(skill);

    return (
      <SkillSetControl
        label={label}
        id={skill}
        name={skill}
        skill={skillSets[skill].skill}
        proficiency={skillSets[skill].proficiency}
        onSkillChange={changeSkill}
        onProficiencyChange={changeProficiency}
        key={skill}
      />
    );
  });

  return (
    <>
      <FullNameWrapper>
        <div>
          <StyledLabel htmlFor="fullname">Full Name</StyledLabel>
          <TextInput id="fullname" value={fullName} onChange={handleFullNameChange} />
        </div>
      </FullNameWrapper>
      {controls}
    </>
  );
};

export default Skills;