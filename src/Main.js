import React from 'react';
import TextEditor from './TextEditor';
import MenuBar from './MenuBar';


import Sidebar from './SideBar';

const Main = () => {
  return (
    <div>
    <div className="header">
        <Sidebar/>
        <MenuBar />
        <br />

      <TextEditor />
      <h6>This is clone application of Google Docs for project purpose<br></br>
&#169; Sumit Raj Jha</h6>
    </div>


    

</div>
  );
};

export default Main;
