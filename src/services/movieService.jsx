const ENDPOINT = 'https://api.kvikmyndir.is/movies?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1ZmNlMTdkNDE2ZjczZjE2NjQ4OThjNjIiLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6IkZyaWRyaWsgU3RlaW5ncmltc3MiLCJlbWFpbCI6ImZyaWRyaWsyMDAwQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiZnJlZWRyaWNrIiwicGFzc3dvcmQiOiIkMmEkMDgkZjZRZzlQa2tjYzZlMG5Xb1ZzTWZvZURBL2cubzR0ZDJjLzU1MXdNdU9FbDdWeExyN3ExQ2EiLCJkb21haW4iOiJGcmlkcnVuMTIzIiwibWVzc2FnZSI6ImZvciBzY2hvb2wgYXNzaWdubWVudCBpbiBIUiIsImlhdCI6MTYwNzQ1NDczMywiZXhwIjoxNjA3NTQxMTMzfQ.KOVI-Nj7T5CZQcJEH0xEDaZUkX_OnSmKqrPKF9R240s';

const movieService = () => {
    return {
        getAllMovies: () => fetch(ENDPOINT).then(response => response.json())
    };
};
export default movieService();
