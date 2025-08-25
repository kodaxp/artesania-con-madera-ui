import { selectProducts } from './lib/actions';

export default async function Home() {
	const products = await selectProducts();

	return (
		<>
			{products.map((product) => (
				<p key={product.id}>{product.name}</p>
			))}
		</>
	);
}
