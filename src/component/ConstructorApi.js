const ConstructorApi = date => `https://api.nasa.gov/planetary/apod?api_key=5kgbBpQYQXWsJd7DVGtS5aImLPgFZVcKaV5IFAFA&thumbs=true&date=${date.length != 0 ? `${date}` : ""}`

export default ConstructorApi;