import React, { useState } from 'react'
import { getInitialData } from '../utils'
import CreateNoteForm from './CreateNoteForm'
import Navbar from './Navbar'
import NotesList from './NotesList'

function NotesApp() {
  const [notes, setNotes] = useState(getInitialData())

  const onAddNoteHandler = ({ title, body }) => {
    setNotes([
      ...notes,
      {
        id: +new Date(),
        title,
        body,
        archived: false,
        createdAt: new Date(),
      },
    ])
    console.log(notes)
  }

  const onArchiveNoteHandler = (id) => {
    const allNotes = [...notes]
    const index = notes.findIndex((note) => note.id === id)
    allNotes[index].archived = !allNotes[index].archived
    setNotes(allNotes)
  }

  const onDeleteNoteHandler = (id) => {
    const remainingNotes = notes.filter((note) => note.id !== id)
    setNotes(remainingNotes)
  }

  return (
    <div className='bg-slate-100'>
      <Navbar />
      <CreateNoteForm addNote={onAddNoteHandler} />
      <NotesList
        notes={notes}
        deleteNote={onDeleteNoteHandler}
        archiveNote={onArchiveNoteHandler}
        type='active'
      />
      <NotesList
        notes={notes}
        deleteNote={onDeleteNoteHandler}
        archiveNote={onArchiveNoteHandler}
        type='archived'
      />
    </div>
  )
}

export default NotesApp
