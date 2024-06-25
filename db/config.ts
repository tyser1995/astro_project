import { defineDb, defineTable, column } from 'astro:db';

const Author = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text({
      optional:true
    }),
  }
});

const Comment = defineTable({
  columns: {
    authorId: column.number({
      optional:true
    }),
    body: column.text({
      optional:true
    })
  }
});

export default defineDb({
  tables: { Author, Comment },
})
