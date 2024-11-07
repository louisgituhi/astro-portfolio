import { db, Tool } from "astro:db";

export default async function seed() {
	await db.insert(Tool).values([
		{ id: 1, tool: "Give nuqs a shot its great" },
		{ id: 2, tool: "Hono is excellent for api design" }
	])
}
