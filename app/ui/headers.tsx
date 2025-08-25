'use client';

import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Header() {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const handleSearch = useDebouncedCallback((search: string) => {
		const params = new URLSearchParams(searchParams);

		if (search) {
			params.set('search', search);
		} else {
			params.delete('search');
		}

		replace(`${pathname}?${params.toString()}`);
	}, 300);

	return (
		<header
			className={`flex flex-row bg-[#4a423a] justify-between items-center gap-[20px] text-center py-[18px] px-[200px]`}
		>
			<Image
				width={280}
				height={70}
				src="/logo-completo-blanco.webp"
				alt="logo-artesania-con-madera"
				priority
				className="w-[280px] h-[70px]"
			/>
			<div
				className={`bg-white rounded-[5px] border-[0.5px] border-[white] text-black w-[55%] flex flex-row py-[4px] px-[8px] justify-between`}
			>
				<input
					id="search"
					className={`w-full text-[20px] tracking-[.5px] font-semibold outline-none`}
					type="text"
					placeholder="Busca lo que necesites..."
					onChange={(e) => {
						handleSearch(e.target.value);
					}}
					defaultValue={searchParams.get('search')?.toString()}
				/>
				<Image width={30} height={30} src="/icons/search.svg" alt="search icon" />
			</div>
		</header>
	);
}
