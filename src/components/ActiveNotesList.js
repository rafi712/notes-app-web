import React from 'react'
import NoteCard from './NoteCard'

const ActiveNotesList = ({ notes, deleteNote }) => {
  return (
    <div className='px-11 py-32'>
      <h3 className='font-bold text-4xl mb-10 ml-8'>Active Notes</h3>
      <div className='flex flex-wrap gap-6 justify-center'>
        {notes.length > 0 ? (
          notes
            .filter((note) => !note.archived)
            .map((note) => (
              <NoteCard key={note.id} note={note} deleteNote={deleteNote} />
            ))
        ) : (
          <p>notein</p>
        )}
      </div>
    </div>
  )
}

export default ActiveNotesList
