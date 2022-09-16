import React from 'react';
import { ElButton, ElTextInput, H2, H3 } from '../../components';
import { Formik } from 'formik';
import { utils } from '../../utils';
import teamService from '../../api/teamService';

export default function CreateTeamScreen() {
  const handleCreateTeamClick = async data => {
    const formData = utils.formToFormData(data, []);
    await teamService.createTeam(formData);
  };

  return (
    <Formik initialValues={{}} onSubmit={handleCreateTeamClick}>
      {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
        <>
          <H2>Create Team</H2>
          <H3>Main information</H3>

          <ElTextInput
            autoCapitalize='none'
            autoCorrect={false}
            name='name'
            placeholder='Name your Team'
            onBlur={() => setFieldTouched('name')}
            onChangeText={handleChange('name')}
          />

          <ElTextInput
            autoCapitalize='none'
            autoCorrect={false}
            name='bio'
            placeholder='Add Teams Bio'
            onBlur={() => setFieldTouched('bio')}
            onChangeText={handleChange('bio')}
          />

          <H3>Details</H3>

          <ElTextInput
            autoCapitalize='none'
            autoCorrect={false}
            name='zipcode'
            placeholder='Zip Code'
            keyboardType='numeric'
            onBlur={() => setFieldTouched('zipcode')}
            onChangeText={handleChange('zipcode')}
          />

          <ElButton onPress={handleSubmit}>Create Team</ElButton>
        </>
      )}
    </Formik>
  );
}
