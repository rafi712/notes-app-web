import React from 'react'
import { showFormattedDate } from '../utils'
import ArchiveNoteButton from './ArchiveNoteButton'
import DeleteNoteButton from './DeleteNoteButton'

const NoteCard = ({ note, deleteNote, archiveNote }) => {
  const { id, title, body, archived, createdAt } = note
  return (
    <div className='card w-72 bg-slate-900 shadow-xl h-fit'>
      <div className='card-body'>
        <h2 className='card-title text-ellipsis text-xl text-slate-400 font-bold'>
          {title}
        </h2>
        <p className='text-sm text-slate-500 font-bold mb-5'>
          {showFormattedDate(createdAt)}
        </p>
        <p className='text-slate-400'>{body}</p>
        <div class='btn-group mt-3'>
          <ArchiveNoteButton
            id={id}
            archived={archived}
            archiveNote={archiveNote}
          />
          <DeleteNoteButton id={id} deleteNote={deleteNote} />
        </div>
      </div>
    </div>
  )
}

export default NoteCard
