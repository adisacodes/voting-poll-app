import { useState, useEffect} from 'react'
import PollForm from './components/PollForm'
import PollList from './components/PollList'

function App() {
  const [options, setOptions] = useState(() => {
    const saved = localStorage.getItem('pollOptions')
    return saved ? JSON.parse(saved) : []
  })

  const[hasVoted, setHasVoted] = useState(() => {
    const saved = localStorage.getItem('hasVoted')
    return saved ? JSON.parse(saved) : false
  })

  useEffect(() => {
    localStorage.setItem('pollOptions', JSON.stringify(options))
  }, [options])

  useEffect(() => {
    localStorage.setItem('hasVoted', JSON.stringify(hasVoted))
  }, [hasVoted])

  function addOption(text) {
    const newOption = {
      id: Date.now(),
      text,
      votes: 0
    }
    setOptions([...options, newOption])
  }

  function vote(id) {
    setOptions(options.map(option => 
      option.id === id ? { ...option, votes: option.votes + 1 } : option
    ))
    setHasVoted(true)
  }

  function reset() {
    setOptions(options.map(option => ({ ...option, votes: 0 })))
    setHasVoted(false)
  }

  return (
      
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className ="text-3xl font-bold text-center text-blue-600 mb-6">Voting Poll App</h1>
        <PollForm onAdd={addOption} />
        <PollList options={options} onVote={vote} hasVoted={hasVoted} />
        <div className="flex justify-center mt-6">
          <button
            onClick={reset}
            className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
          >
            Reset Votes
          </button>
        </div>
      </div>
        
              
               

      
  
  )
}

export default App
