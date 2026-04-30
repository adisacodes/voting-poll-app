function PollOption({ option, onVote, hasVoted, totalVotes }) {
    const percentage = totalVotes===0 ? 0 :Math.round((option.votes / totalVotes) * 100)
    return (
        <div className="bg-white rounded-lg shadow p-4 mb-3">
            <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700 font-medium">{option.text}</span>
                <span className="text-sm text-gray-500">{option.votes} votes</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                <div
                    className="bg-blue-500 h-3 rounded-full transition-all"
                    style={{ width: `${percentage}%` }}
                />
                </div>
             <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{percentage}%</span>
                <button
                    onClick={() => onVote(option.id)}
                    disabled={hasVoted}
                    className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600 disabled:opcity-50 disabled:cursor-not-allowed"
                >
                    Vote
                </button>
             </div>
            </div>
    
    )

} 

export default PollOption