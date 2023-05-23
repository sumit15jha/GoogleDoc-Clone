import React from 'react'

export default function MenuBar() {
    return (
        <div><div className="whiteBar">

            <a href={"#"}><img className="docsLogo" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724c0e4b0c296de94c833/1441211585166/bluedoclogo.png?" alt="" /></a>

            <h1 id="untitled">
                <em>Untitled document</em>
            </h1>

            <ul id="mainMenu">
                <li>File</li>
                <li>Edit</li>
                <li>View</li>
                <li>Insert</li>
                <li>Format</li>
                <li>Tools</li>
                <li>Table</li>
                <li>Add-Ons</li>
                <li>Help</li>
            </ul>

            <div className="rightSide">

                <span id="emailLogin">ABC@DEFG.com<img id="emailcaret" src="http://static1.squarespace.com/static/55dcfb03e4b07360409d0471/55e724bde4b0c296de94c811/55e724bde4b076794acc4218/1441211581744/caret.png?format=300w" alt="" /></span>

                <ul className="extraButtons">
                    <li>Comments</li>
                    <li>Share</li>
                </ul>

            </div>

        </div></div>
    )
}