import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";

const FavouritesPage = () => {

	const { removeFavourite } = useActions()

	const { favourites } = useAppSelector(state => state.github)

	if (favourites.length === 0) return <p className="text-center">No items</p>

	return (
		<div className="flex justify-center pt-10 mx-auto h-screen w-screen w-full max-w-[560px]">
			<ul className="list-none w-full">
				{favourites.map(f => (
					<li key={f} className="flex justify-between items-center gap-5 p-2 m-1 border">
						<a
							href={f}
							target="_blank"
							className="hover:text-blue-800 transition-colors"
						>
							{f}
						</a>

						<button
							className="py-2 px-4 bg-red-400 rounded hover:shadow-sm transition-all"
							onClick={() => removeFavourite(f)}
						>
							Remove
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default FavouritesPage;