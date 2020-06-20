process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

const { Pool, Client } = require("pg")

const pool = new Pool({
    host: '',
    database: '',
    port: 5432,
    user: '',
    password: '',
    ssl: true,
})

function getConnection() {
    return pool.connect()
}

async function getProducts() {
    let client = await getConnection()
    let query = "select * from Productos"
    let params = []
    let rs = await client.query(query, params)
    client.release(true)
    console.log(rs)
}

async function getProduct(id_product) {
    let client = await getConnection()
    let query = "select * from Productos where id = $1 limit 1"
    let params = [id_product]
    let rs = await client.query(query, params)
    client.release(true)
    console.log(rs)
}

getProduct(1)