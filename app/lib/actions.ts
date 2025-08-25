import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function selectProducts() {
	try {
		await sql`
      SELECT
        p.id,
        p.name,
        p.price,
        to_json(p.colors) AS colors,
        COALESCE(to_json(array_agg(pi.image_url ORDER BY pi.id)), '[]') AS images
      FROM products p
      LEFT JOIN product_images pi ON pi.product_id = p.id
      GROUP BY p.id
      ORDER BY p.id;
    `;
	} catch (err) {
		console.log(err);
	}
}
