const ENDPOINT = 'https://api.kvikmyndir.is/movies';

const movieService = () => {
    return {
        getAllMovies: () => fetch(ENDPOINT, {
        headers: {
          'x-access-token':
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1ZmNlMTdkNDE2ZjczZjE2NjQ4OThjNjIiLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6IkZyaWRyaWsgU3RlaW5ncmltc3MiLCJlbWFpbCI6ImZyaWRyaWsyMDAwQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiZnJlZWRyaWNrIiwicGFzc3dvcmQiOiIkMmEkMDgkZjZRZzlQa2tjYzZlMG5Xb1ZzTWZvZURBL2cubzR0ZDJjLzU1MXdNdU9FbDdWeExyN3ExQ2EiLCJkb21haW4iOiJGcmlkcnVuMTIzIiwibWVzc2FnZSI6ImZvciBzY2hvb2wgYXNzaWdubWVudCBpbiBIUiIsImlhdCI6MTYwNzYxNjUwMywiZXhwIjoxNjA3NzAyOTAzfQ.t-IycxpRWxxIHl8nG40CdifnoRMlURW2hHoA4RytLjY'}}).then(response => response.json())
    };
};
export default movieService();
