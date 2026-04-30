import PollOption from "./PollOption";

function PollList({ options, onVote, hasVoted }) {
const totalVotes = options.reduce((sum, option) => sum + option.votes, 0)
if (options.length === 0) {
    return (
        <p className="text-center text-gray-400 mt-6">
            No  options yet. Add one above!
        </p>
    )

}
    return (
        <div className="max-w-md mx-auto">
            {options.map(option => (
                <PollOption
                    key={option.id}
                    option={option}
                    onVote={onVote}
                    hasVoted={hasVoted}
                    totalVotes={totalVotes}
                />
            ))}
        </div>
    )
}

export default PollList
    
