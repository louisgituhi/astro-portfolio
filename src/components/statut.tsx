import {
	QueryClient,
	QueryClientProvider,
	useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Statut() {
	return (
		<QueryClientProvider client={queryClient}>
			<StatutCommitHistory />
		</QueryClientProvider>
	);
}

function StatutCommitHistory() {
	const { isPending, error, data } = useQuery({
		queryKey: ["statut-commits"],
		queryFn: () =>
			fetch(
				"https://api.github.com/repos/louisgituhi/statut/commits?per_page=1",
			).then((res) => res.json()),
	});

	if (isPending) return "loading...";
	if (error) return `an error has occured ${error.message}`;

	const lastCommit = data[0].commit;
	const lastCommitDate = lastCommit.committer.date;
	console.log(lastCommitDate);

	const formatter = new Intl.RelativeTimeFormat("en-Us");
	const difference = new Date(lastCommitDate).getTime() - new Date().getTime();
	const dayDiffernce = Math.round(difference / (1000 * 60 * 60 * 24));
	const formattedDate = formatter.format(dayDiffernce, "days");

	return (
		<div className="flex items-center gap-1">
			<span className="text-green-400">{formattedDate}</span>
		</div>
	);
}
