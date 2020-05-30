import React from 'react';

const NoteSection = () => {

  return (
    <div className="note-main">
      <div className="note-container">
        <div className="note">
          <textarea className="note-content"></textarea>
          <div className="note-button-group">
            <div className="note-flip-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#675CE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg>
            </div>
            <div className="note-delete-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="lightcoral" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
};

export default NoteSection;