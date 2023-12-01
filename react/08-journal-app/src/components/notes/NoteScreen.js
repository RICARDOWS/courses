import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>
        <NotesAppBar />

        <div className='notes__content'>
            <input type='text' placeholder='Some awesome title' 
            className='notes__title-input' autoComplete='off'/>

            <textarea placeholder='What happened today' 
            className='notes__textarea'>
            </textarea>

            <div className='notes__image'>
                <img src='https://www.dhresource.com/0x0/f2/albu/g8/M01/14/98/rBVaV10-Y5mARQyeAAUILoDBqaE160.jpg'
                 alt='imagen'/>
            </div>
        </div>
    </div>
  )
}
