import {useState} from 'react'

function PollForm({ onAdd }) {
  const [text, setText] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (text.trim()==='') return
    onAdd(text)
    setText('')
  }

  return (
    <div className='max-w-md mx-auto bg-white rounded-lg shadow p-4 mb-6'>
        <h2 className='text-lg font-semibold text-gray-700 mb-3'>
            Add a Poll Option
        </h2>
        <div className='flex-gap-2'>
            <input
            type='text'
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder='Type an option...'
            className='flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400'
            />
            <button
            onClick={handleSubmit}
            className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
            >
                Add
            </button>
        </div>
    </div>
  )
}

export default PollForm