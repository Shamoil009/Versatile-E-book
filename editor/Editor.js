/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Editor.css";
//import "./express.js";
//import "jquery-ui/dist/jquery-ui";
import "jquery-ui-bundle/jquery-ui";
import "jquery-ui-bundle";
import axios from 'axios';
import {
  FormatBold, FormatListNumbered, FormatListBulleted, InsertLink, LinkOff, FormatItalic, StrikethroughS,
  FormatAlignJustify, FormatAlignLeft, FormatAlignRight, FormatAlignCenter, FormatClear,
  FormatColorText, FormatIndentDecrease, FormatIndentIncrease, FormatUnderlined, Subscript, Superscript,
  Image, Print, InsertPageBreak, Toc, Colorize, ImageSearch
} from '@mui/icons-material';
import Tooltip from '@mui/material/Tooltip';
import Chatbot from "../chatbot/Chatbot";
import * as editor from "./editorscript.js";
// var PHE = require("print-html-element");



function Editor() {
  //var [image, setImage] = useState('');
  var image = null;

  async function handleClick(e, date) {
    axios.post('http://localhost:3001/imageupload', image, date)
      .then(res => {
        // editor.addLocalImage(e, date);

        console.log('Axios POST request successfull!')
        console.log('Axios response: ', res)
      })
  }
  //OUR FILE INPUT HANDLER
  async function handleFileInput1(e, date) {
    console.log(e.target.files[0]);
    const formData = new FormData();
    formData.append('my-image-file', e.target.files[0], e.target.files[0].name);
    console.log(formData);
    image = formData;
  }

  async function handleFileInput(e) {
    var date = Date.now();
    // localStorage.setItem('localDate', JSON.stringify(date));
    // console.log("localStorage "+window.localStorage.getItem('localDate'));
    document.cookie = "localDate=" + date;
    console.log("coookie " + document.cookie);
    if (!e.target.files[0]) {
      return;
    }
    await handleFileInput1(e, date);
    await handleClick(e, date).then(
      res => {
        editor.addLocalImage(e, date);
      }

    )
    //editor.addLocalImage(e,date);
  }


  function myFunc() {
    if (localStorage.getItem("folderName") !== null) {
      console.log(localStorage.getItem("folderName") + localStorage.getItem("fileName"));
      var folderName1 = localStorage.getItem("folderName");
      var fileName1 = localStorage.getItem("fileName");
      var src = require(`../assets/Booktemplates/${folderName1}/${fileName1}.json`);
      console.log("page 1\n" + src.html);

      document.getElementById("panel").innerHTML = src.html;
      return;
    }
  }


  React.useEffect(() => {

    var botTag = document.getElementsByTagName("iframe")[0];
    if (botTag && botTag.parentNode) {
      botTag.parentNode.removeChild(document.getElementById("kommunicate-widget-iframe"));
    };


    var elem = document.getElementById("page");
    elem.addEventListener('keypress', (e) => {
      var para = 0;
      // if (e.key === "Enter" && e.ctrlKey) {
      //   console.log("Ctrl+Enter");
      // }
      if (e.key === "Enter") {
        if (para === 0) {
          e.preventDefault();
          document.execCommand("insertParagraph", false, null);
          console.log("para");
          para = 1;
        }

      }
    });
  }, []);





  return (
    <div className="App">
      {/* <div id="chatBot" >
        {bot ? <Chatbot /> : ""}
      </div> */}

      <div className="edit-controls sticky-top">

        <Tooltip title="Heading">
          <select onChange={editor.handleChange} id="heading" className="editorDropdown dropdown" >
            <option defaultValue>Heading </option>
            <option value="h1" className="head1">Heading 1</option>
            <option value="h2" className="head2">Heading 2</option>
            <option value="h3" className="head3">Heading 3</option>
            <option value="h4" className="head4">Heading 4</option>
            <option value="p" className="normalText">Normal text</option>
          </select>
        </Tooltip>
        <div className="line"></div>

        <Tooltip title="Font Family">
          <select onChange={editor.handleChange} id="fonts" className="editorDropdown dropdown">
            <option defaultValue>Fonts</option>
            <option value="Arial">Arial</option>
            <option value="Arial Narrow">Arial Narrow</option>
            <option value="Arial Rounded MT Bold">Arial Rounded MT Bold</option>
            <option value="Avant Garde">Avant Garde</option>
            <option value="Calibri">Calibri</option>
            <option value="Candara">Candara</option>
            <option value="Century Gothic">Century Gothic</option>
            <option value="Franklin Gothic Medium">Franklin Gothic Medium</option>
            <option value="Futura">Futura</option>
            <option value="Geneva">Geneva</option>
            <option value="Gill Sans">Gill Sans</option>
            <option value="Helvetica Neue">Helvetica Neue</option>
            <option value="Lucida Grande">Lucida Grande</option>
            <option value="Optima">Optima</option>
            <option value="Segoe UI">Segoe UI</option>
            <option value="Tahoma">Tahoma</option>
            <option value="Trebuchet MS">Trebuchet MS</option>
            <option value="Verdana">Verdana</option>
            <option value="Baskerville">Baskerville</option>
            <option value="Bodoni MT">Bodoni MT</option>
            <option value="Book Antiqua">Book Antiqua</option>
            <option value="Calisto MT">Calisto MT</option>
            <option value="Cambria">Cambria</option>
            <option value="Didot">Didot</option>
            <option value="Garamond">Garamond</option>
            <option value="Georgia">Georgia</option>
            <option value="Goudy Old Style">Goudy Old Style</option>
            <option value="Hoefler Text">Hoefler Text</option>
            <option value="Lucida Bright">Lucida Bright</option>
            <option value="Palatino">Palatino</option>
            <option value="Perpetua">Perpetua</option>
            <option value="Rockwell">Rockwell</option>
            <option value="Rockwell Extra Bold">Rockwell Extra Bold</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Andale Mono">Andale Mono</option>
            <option value="Consolas">Consolas</option>
            <option value="Courier New">Courier New</option>
            <option value="Brush Script MT">Brush Script MT</option>
          </select>
        </Tooltip>

        <div className="line"></div>

        <Tooltip title="Font Size">
          <select onChange={editor.handleChange} id="fontSize" className="editorDropdown dropdown" >
            <option defaultValue>Font Size </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
        </Tooltip>


        <Tooltip title="Bold(Ctrl+B)">
          <FormatBold className="editorBtn" onClick={editor.bold} aria-label="Bold" />
        </Tooltip>

        <Tooltip title="Italic(Ctrl+I)">
          <FormatItalic onClick={editor.italic} type="button" className="editorBtn" />
        </Tooltip>

        <Tooltip title="Underline">
          <FormatUnderlined onClick={editor.underline} type="button" className="editorBtn" />
        </Tooltip>

        <Tooltip title="StrikeThrough">
          <StrikethroughS onClick={editor.strikeThrough} type="button" className="editorBtn" />
        </Tooltip>

        <Tooltip title="Text color">
          <label className="input-btn">
            <input className="editorInputHidden" type="color" onChange={editor.handleChange} id="textColor" />
            <FormatColorText />
          </label>
        </Tooltip>

        <Tooltip title="Highlight color">
          <label className="input-btn">
            <input className="editorInputHidden" type="color" onChange={editor.handleChange} id="hiliteColor" />
            <Colorize />
          </label>
        </Tooltip>


        <div className="line"></div>

        <Tooltip title="Insert link">
          <InsertLink onClick={editor.createLink} type="button" className="editorBtn" />
        </Tooltip>

        <Tooltip title="Remove link">
          <LinkOff onClick={editor.unlink} type="button" className="editorBtn" />
        </Tooltip>

        <div className="line"></div>

        <Tooltip title="Left align">
          <FormatAlignLeft onClick={editor.justifyLeft} type="button" className="editorBtn" />
        </Tooltip>

        <Tooltip title="Center align">
          <FormatAlignCenter onClick={editor.justifyCenter} type="button" className="editorBtn" />
        </Tooltip>

        <Tooltip title="Right align">
          <FormatAlignRight onClick={editor.justifyRight} type="button" className="editorBtn" />
        </Tooltip>

        <Tooltip title="Justify">
          <FormatAlignJustify onClick={editor.justifyFull} type="button" className="editorBtn" />
        </Tooltip>

        <div className="line"></div>

        <Tooltip title="Ordered list">
          <FormatListNumbered className="editorBtn " onClick={editor.insertOrderedList} />
        </Tooltip>

        <Tooltip title="Unordered list">
          <FormatListBulleted className="editorBtn" onClick={editor.insertUnorderedList} />
        </Tooltip>

        <div className="line"></div>

        <Tooltip title="Indent">
          <FormatIndentIncrease onClick={editor.indent} type="button" className="editorBtn" />
        </Tooltip>

        <Tooltip title="Outdent">
          <FormatIndentDecrease onClick={editor.outdent} type="button" className="editorBtn" />
        </Tooltip>

        <div className="line"></div>

        <Tooltip title="Subscript">
          <Subscript onClick={editor.subscript} type="button" className="editorBtn" />
        </Tooltip>

        <Tooltip title="Superscript">
          <Superscript onClick={editor.superscript} type="button" className="editorBtn" />
        </Tooltip>

        <div className="line"></div>

        <Tooltip title="Clear formatting">
          <FormatClear onClick={editor.removeFormat} type="button" className="editorBtn" />
        </Tooltip>

        <div className="line"></div>

        <Tooltip title="Insert image link">
          <ImageSearch onClick={editor.addImage} type="button" className="editorBtn" />
        </Tooltip>

        <Tooltip title="Insert image">
          <label className="input-btn">
            <input className="editorInputHidden" type="file" accept="image/*" onChange={handleFileInput} />
            <Image />
          </label>
        </Tooltip>

        <div className="line"></div>

        <Tooltip title="Page break">
          <InsertPageBreak onClick={editor.pageBreaker} type="button" className="editorBtn" />
        </Tooltip>

        <Tooltip title="Print">
          <Print onClick={editor.printDoc} type="button" className="editorBtn" />
        </Tooltip>

        <Tooltip title="Table of content">
          <Toc onClick={editor.tableContent} type="button" className="editorBtn" />
        </Tooltip>

        {/* <button onClick={editor.template}>
          T
        </button>
        <button onClick={editor.downloadInJson}>
          D
        </button> */}



      </div>

      <div className="editor-wrapper">

        <div id="panel" className="content-pane" >
          <div id="page" className="page" contentEditable="true">
            <div id="toc"></div>


            <img src={require("./download.jpg")} />
            <p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard <i>dummy text ever since the 1500s,</i> when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.</p>
            <p>It has survived not only <b>five centuries,</b> but also the leap
              into electronic typesetting,</p>
            <p>remaining essentially unchanged. It was popularised in the
              1960s with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>


        </div>
      </div>

    </div>
  );
}

export default Editor;
