import { selectProducts } from './lib/actions';

export default async function Home() {
	const products = await selectProducts();
	console.log(products);

	return <h1>Hello World</h1>;
}
