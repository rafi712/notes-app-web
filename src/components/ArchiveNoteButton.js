import React from 'react'
import { MdOutlineArchive, MdOutlineUnarchive } from 'react-icons/md'

const ArchiveNoteButton = ({ id, archived, archiveNote }) => {
  return (
    <button className='btn btn-accent w-1/2' onClick={() => archiveNote(id)}>
      {archived ? (
        <MdOutlineUnarchive size={'2em'} />
      ) : (
        <MdOutlineArchive size={'2em'} />
      )}
    </button>
  )
}

export default ArchiveNoteButton
