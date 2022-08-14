const ConstructorApi = date => `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&thumbs=true&date=${date.length != 0 ? `${date}` : ""}`

export default ConstructorApi;