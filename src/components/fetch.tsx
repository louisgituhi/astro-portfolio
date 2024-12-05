import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";

const queryClient = new QueryClient()

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <FetchCommits />
        </QueryClientProvider>
    )
}

function FetchCommits() {
    const { isPending, error, data } = useQuery({
        queryKey: ["repoData"],
        queryFn: () => 
            fetch("https://api.github.com/repos/louisgituhi/planck/commits?per_page=1")
        .then((res) => 
            res.json(),
    ),
    })

    if (isPending) return "loading..."

    if (error) return `An error has occured: ${error.message} `

    const lastCommit = data[0].commit
    const lastCommitDate = lastCommit.committer.date;
    
    const formatter = new Intl.RelativeTimeFormat("en-US")
    const diff = new Date(lastCommitDate).getTime() - new Date().getTime();
    const dayDifference = Math.round(diff / (1000 * 60 * 60 * 24))
    const formattedDate = formatter.format(dayDifference, "days")

    return (
        <div className=" flex items-center gap-1">
            <span className=" text-green-400">{formattedDate}</span> 
        </div>
    )
}