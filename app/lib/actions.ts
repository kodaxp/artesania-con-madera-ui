import { unstable_cache } from 'next/cache';
import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function _selectProducts() {
	console.log('[DB] selectProducts HIT REAL contra Postgres');
	return sql`
    SELECT p.id, p.name, p.price, to_json(p.colors) AS colors,
           COALESCE(to_json(array_agg(pi.image_url ORDER BY pi.id)), '[]') AS images
    FROM products p
    LEFT JOIN product_images pi ON pi.product_id = p.id
    GROUP BY p.id
    ORDER BY p.id;
  `;
}

export const selectProducts = unstable_cache(_selectProducts, ['products-all'], {
	revalidate: 300,
	tags: ['products'],
});
