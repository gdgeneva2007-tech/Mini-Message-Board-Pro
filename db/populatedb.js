//Load dotenv here too because populatedb.js is run SEPARATELY from app.js
//So it needs its own dotenv load
require("dotenv").config();

const {Client}=require("pg")
const SQL=`
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text TEXT NOT NULL,
    "user" VARCHAR(255) NOT NULL,
    added TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (text,"user",added)
VALUES
    ('Hi, there!','Amando',NOW()),
    ('Hello World!','Charles',NOW())
`;

async function main(){
    console.log("seeding...");
    const client =new Client({
        connectionString:process.env.DATABASE_URL,
    })
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done")
}
main();