import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((data) => (
      data.map((content) => ({
        status: content.status,
        value: content.status === 'fulfilled' ? content.value : String(content.reason),
      }))
    ));
}
