import { db, Author, Comment } from "astro:db";

// async function dropTables() {
// 	await db.execute('DROP TABLE IF EXISTS comment');
// 	await db.execute('DROP TABLE IF EXISTS authors');
//   }
  
export default async function () {
  await db.insert(Author).values([
    { id: 1, name: "Kasim" },
    { id: 2, name: "Mina" },
  ]);

  await db.insert(Comment).values([
    { authorId: 1, body: "Hope you like Astro DB!" },
    { authorId: 2, body: "Enjoy!" },
  ]);
}
