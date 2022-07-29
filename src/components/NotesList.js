import React from 'react'
import NoteCard from './NoteCard'

const NotesList = ({ notes, deleteNote, type, archiveNote }) => {
  const displayNotes = notes.filter((note) => {
    return type === 'active' ? !note.archived : note.archived
  })

  return (
    <div className='py-32 w-5/6 mx-auto'>
      <h3 className='font-bold text-4xl mb-14 ml-8 text-center'>
        {type === 'active' ? 'Active' : 'Archived'} Notes
      </h3>
      <div className='flex flex-wrap gap-5'>
        {displayNotes.length > 0 ? (
          displayNotes
            .map((note) => (
              <NoteCard
                key={note.id}
                note={note}
                deleteNote={deleteNote}
                archiveNote={archiveNote}
              />
            ))
            .reverse()
        ) : (
          <p className='text-3xl text-slate-600 font-bold'>No items found</p>
        )}
      </div>
    </div>
  )
}

export default NotesList
