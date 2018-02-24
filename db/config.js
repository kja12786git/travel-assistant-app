const options = {
  query: (e) => {
    console.log(e.query)

  }

}

const pgp = require('pg-promise')(options);

const setDatabase = () => {
  if (process.env === 'development' || !process.env.NODE_ENV) {
    return pgp({
      database: 'savedtravelist',
      post: 5432,
      host: 'localhost'

  })

  }

  else if (process.env.NODE_ENV === 'production') {
      return pgp(process.env.DATABASE_URL)
  }

}

const db = setDatabase();

module.exports = db;
