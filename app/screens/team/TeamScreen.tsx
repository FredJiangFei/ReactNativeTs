import React, { useEffect, useState } from 'react';
import { Button, Text } from 'react-native';
import teamService from '../../api/teamService';
import routes from '../../navigation/routes';

export default function TeamScreen({ navigation }) {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getTeams();
  }, []);

  const getTeams = async () => {
    const res: any = await teamService.getAthleteActiveTeams('a3312806-b46e-4049-b860-b18531d733d1');
    setTeams(res.value);
  };

  return (
    <>
      <Text>Team</Text>
      {teams.map((item: any) => (
        <Text key={item.id}>{item.name}</Text>
      ))}

      <Button
        title='create team'
        onPress={() => navigation.navigate(routes.CreateTeam)}
      />
    </>
  );
}
