import { MongoClient, Database } from 'https://deno.land/x/mongo@v0.8.0/mod.ts';

let db: Database;

export function connect() {
  const client = new MongoClient();
  client.connectWithUri(
    'mongodb+srv://Niraj:Niraj2001@cluster0-rkqwd.mongodb.net/net?retryWrites=true&w=majority'
  );

  db = client.database('todo-app');
}

export function getDb() {
  return db;
}
