import AsyncStorage from '@react-native-community/async-storage';

const TASKS = '@root_tasks';

export function timeToString(time = Date.now()) {
  const date = new Date(time);
  const todayUTC = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()),
  );
  return todayUTC.toISOString().split('T')[0];
}

export const addTask = task => {};
