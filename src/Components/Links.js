import React from 'react';
// import {Link} from 'react-router-dom';


function Links() {
  return (
    <>
      <div className='links'>
        <a id='twitter_link' href='https://twitter.com/jamesodiwuor2'>Twitter Link</a>
        <a id='btn_zuri' href='https://training.zuri.team/'>Zuri Team</a>
        <a title='Find books on design and coding' id='books' href='http://books.zuri.team'>Zuri Books</a>
        <a title='Buy the best books on python' id='book_python' href='https://books.zuri.team/python-for-beginners?ref_id=pengoJames'>Python Books</a>
        <a title='Access services for background checks on coders' id='pitch' href='https://background.zuri.team/'>Background Check for Coders</a>
        <a title='Access design books for free offered by Zuri' id='book_design' href='https://books.zuri.team/design-rules'>Design Books</a>
        <a id='contact' href='/contact'>Contact</a>
      </div>  
    </>
  )
}

export default Links;
