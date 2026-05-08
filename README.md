1. Create a messages table:

CREATE TABLE messages (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
text TEXT NOT NULL,
username VARCHAR(255) NOT NULL,
added TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

2. Insert your data:

INSERT INTO messages (text, username, added)
VALUES
('Hi there!', 'Amando', NOW()),
('Hello World!', 'Charles', NOW());

3. The actual data you want from 'const result =await pool.query(...)' is the .rows property, which is an Array of Objects.

4. What a single row looks like:
   // Example: const { rows } = await pool.query("SELECT \* FROM messages WHERE id = 1");
   // rows[0] would look like this:

{
id: 1,
text: "Hi there!",
username: "Amando",
added: 2023-10-27T10:00:00.000Z // This is a native JS Date object
}

5. Run populatedb.js:
   node db/populatedb.js
