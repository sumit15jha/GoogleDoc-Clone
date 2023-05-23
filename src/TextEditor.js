import React, { useState } from 'react';
import './Style/style.css'
const TextEditor = () => {
  const [content, setContent] = useState('');
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isSuperscript, setIsSuperscript] = useState(false);
  const [isSubscript, setIsSubscript] = useState(false);
  const [alignment, setAlignment] = useState('left');
  const [isBulletedList, setIsBulletedList] = useState(false);
  const [isNumberedList, setIsNumberedList] = useState(false);

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleBoldToggle = () => {
    setIsBold(!isBold);
  };

  const handleItalicToggle = () => {
    setIsItalic(!isItalic);
  };
  const handleUnderlineToggle = () => {
    setIsUnderline(!isUnderline);
  };
  const handleSuperscriptToggle = () => {
    setIsSuperscript(!isSuperscript);
  };

  const handleSubscriptToggle = () => {
    setIsSubscript(!isSubscript);
  };
  const handleAlignmentChange = (alignment) => {
    setAlignment(alignment);
  };

  const handleBulletedListToggle = () => {
    setIsBulletedList(!isBulletedList);
    setIsNumberedList(false);
  };

  const handleNumberedListToggle = () => {
    setIsNumberedList(!isNumberedList);
    setIsBulletedList(false);
  };

  const getEditorContentStyle = () => {
    const styles = {};
    if (isBold) {
      styles.fontWeight = 'bold';
    }
    if (isItalic) {
      styles.fontStyle = 'italic';
    }
    if (isUnderline) {
      styles.textDecoration = 'underline';
    }
    if (isSuperscript) {
      styles.verticalAlign = 'super';
      styles.fontSize = 'smaller';
    }
    if (isSubscript) {
      styles.verticalAlign = 'sub';
      styles.fontSize = 'smaller';
    }
    styles.textAlign = alignment;
    return styles;
  };

  const getEditorContentClassName = () => {
    let className = 'editor-content';
    if (isBulletedList) {
      className += ' bulleted-list';
    } else if (isNumberedList) {
      className += ' numbered-list';
    }
    return className;
  };

  return (
    <div className="text-editor">
      
      <div><div className="toolBar">

<div className="toolBag">


    <a href="#"><img className="toolbarButtonsPrint" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724c0e4b076794acc425b/1441211584574/printer.png" alt="" /></a>
    <a href="#"><img className="toolbarButtons" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724c0e4b076794acc4259/1441211584347/back.png" alt="" /></a>
    <a href="#"><img className="toolbarButtons" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724c0e4b076bc359bf9f3/1441211584386/fwd.png" alt="" /></a>
    <a href="#"><img className="toolbarButtonsPaint" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724c0e4b076794acc4257/1441211584157/paint.png" alt="" /></a>


    <a href="#"><span className="toolbarButtons100">100%<img id="hunCaret" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bde4b076794acc4218/1441211581744/caret.png?format=300w" alt="" /></span></a>
    <a href="#"><span className="toolbarButtonsNormal">Normal Text<img id="normalCaret" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bde4b076794acc4218/1441211581744/caret.png?format=300w" alt="" /></span></a>
    <a href="#"><span className="toolbarButtonsArial">Open Sans<img id="openCaret" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bde4b076794acc4218/1441211581744/caret.png?format=300w" alt="" /></span></a>
    <a href="#"><span className="toolbarButtons11">12<img id="twelveCaret" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bde4b076794acc4218/1441211581744/caret.png?format=300w" alt="" /></span></a>


    <button class="bt"
          className={`toolbar-button ${isBold ? 'active' : ''}`}
          onClick={handleBoldToggle}
        >
          <img className="toolbarButtonsB" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bfe4b076794acc4251/1441211583548/bold.png?format=300w" alt="" />
        </button>
        <button class="bt"
          className={`toolbar-button ${isItalic ? 'active' : ''}`}
          onClick={handleItalicToggle}
        >
          <img className="toolbarButtonsI" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bfe4b076bc359bf9e6/1441211583336/i.png?format=300w" alt="" />
        </button>
        <button class="bt"
          className={`toolbar-button ${isUnderline ? 'active' : ''}`}
          onClick={handleUnderlineToggle}
        >
          <img className="toolbarButtonsU" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bfe4b076bc359bf9ea/1441211583819/under.png?format=300w" alt="" />
        </button>
    
    
    <a href="#"><img className="toolbarButtonsColor" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bfe4b076bc359bf9e8/1441211583603/color.png?format=300w" alt="" /></a>
    <a href="#"><img className="toolbarButtonsHyper" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bfe4b076794acc4253/1441211583862/hyper.png?format=300w" alt="" /></a>
    <a href="#"><img className="toolbarButtonsMsg" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bfe4b076794acc424f/1441211583411/msg.png?format=300w" alt="" /></a>

    <button class="bt"
            className={`toolbar-button ${alignment === 'left' ? 'active' : ''}`}
            onClick={() => handleAlignmentChange('left')}
          >
            <img className="toolbarButtons" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bfe4b076794acc4255/1441211584087/left.png?format=300w" alt="" />
          </button>
          <button class="bt"
            className={`toolbar-button ${alignment === 'center' ? 'active' : ''}`}
            onClick={() => handleAlignmentChange('center')}
          >
            <img className="toolbarButtons" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724c0e4b076bc359bf9ef/1441211585710/center.png?format=300w" alt="" />
          </button>
          <button class="bt"
            className={`toolbar-button ${alignment === 'right' ? 'active' : ''}`}
            onClick={() => handleAlignmentChange('right')}
          >
            <img className="toolbarButtons" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bfe4b076bc359bf9ed/1441211583977/right.png?format=300w" alt="" />
          </button>

    
    <a href="#"><img className="toolbarButtonsJust" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bfe4b076bc359bf9e4/1441211583110/just.png?format=300w" alt="" /></a>
    
    <button class="bt"
          className={`toolbar-button ${isBulletedList ? 'active' : ''}`}
          onClick={handleBulletedListToggle}
        >
         <img className="toolbarButtonsBullet" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bee4b076794acc424b/1441211582989/bullet.png?format=300w" alt="" />
        </button>
        <button class="bt"
          className={`toolbar-button ${isNumberedList ? 'active' : ''}`}
          onClick={handleNumberedListToggle}
        >
          <img className="toolbarButtonsNumbered" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bee4b076794acc4246/1441211582789/numbered.png?format=300w" alt="" />
        </button>
        <a href="#"><img className="toolbarButtonsLine" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bee4b076bc359bf9e0/1441211582962/line.png?format=300w" alt="" /></a>
    <a href="#"><img className="toolbarButtonsIndentLeft" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bee4b076794acc421f/1441211582304/indentright.png?format=300w" alt="" /></a>
    <a href="#"><img className="toolbarButtonsIndentRight" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bee4b076794acc4221/1441211582457/indentleft.png?format=300w" alt="" /></a>
    <a href="#"><img className="toolbarButtonsClear" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bee4b076794acc421d/1441211582124/clear.png?format=300w" alt="" /></a>

</div>



</div></div>
       
      
      
      <div className="editor-content-container">
        <textarea
          className={getEditorContentClassName()}
          style={getEditorContentStyle()}
          value={content}
          onChange={handleContentChange}
        />
  
        
      </div>
      
    </div>
  );
};

export default TextEditor;
