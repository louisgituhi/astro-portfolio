import { defineDb, defineTable, column } from 'astro:db';

const Tool = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    tool: column.text()
  }
})

export default defineDb({
  tables: { Tool }
});
