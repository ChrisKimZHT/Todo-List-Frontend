import React from 'react';
import NoteList from '../components/NoteList';

const NotePage = () => {
  return (
    <React.Fragment>
      <h1 className="mt-3 mb-3">我的便签</h1>
      <div className="mb-4">
        <NoteList preview={false} />
      </div>
    </React.Fragment>
  );
}

export default NotePage;
