#! /usr/bin/env node

const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR ( 255 ),
  username VARCHAR ( 255 ),
  added TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO messages (text,username)
VALUES
  ('Anyone playing cymberguy today or smth??','notFromHere_'),
  ('Hi there!','Amando'),
  ('Hello World!','Charles'),
  ('Sup boyzzz :p','Kingston'),
  ('Go code go code go code','Marc_REptile404');
`;

async function main() {
  try {
    console.log("seeding...");
    const client = new Client({
      //! TODO: Add some URL's Probably need them for non local db
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
  } catch (err) {
    console.log(err);
  }
}

main();
