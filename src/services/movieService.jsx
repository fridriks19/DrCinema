const ENDPOINT = 'https://api.kvikmyndir.is/movies?title=Druk&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1ZmNlMTdkNDE2ZjczZjE2NjQ4OThjNjIiLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6IkZyaWRyaWsgU3RlaW5ncmltc3MiLCJlbWFpbCI6ImZyaWRyaWsyMDAwQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiZnJlZWRyaWNrIiwicGFzc3dvcmQiOiIkMmEkMDgkZjZRZzlQa2tjYzZlMG5Xb1ZzTWZvZURBL2cubzR0ZDJjLzU1MXdNdU9FbDdWeExyN3ExQ2EiLCJkb21haW4iOiJGcmlkcnVuMTIzIiwibWVzc2FnZSI6ImZvciBzY2hvb2wgYXNzaWdubWVudCBpbiBIUiIsImlhdCI6MTYwNzM2MTEzNiwiZXhwIjoxNjA3NDQ3NTM2fQ.5vW815nShdp5Wcf7Xfj2pmG2NkPlcvKCP33ZazO91eg';

const movieService = () => {
    return {
        getMovie: () => fetch(ENDPOINT).then(d => d.json()).then(d => d.ratings.imdb)
    };
};

export default movieService();
