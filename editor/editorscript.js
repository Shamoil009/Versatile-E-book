

import "timers-browserify";
import * as PHE from "print-html-element";
//import { setTimeout } from "timers";

//import $ from "//code.jquery.com/jquery-1.12.4.js";
<script src="//code.jquery.com/ui/1.12.1/jquery-ui.js"></script>



const handleChange = (e) => {
	const check = e.target.id;
	const changeValue = e.target.value;
	if (check === "heading") {
		formatBlock(changeValue);
	}
	else if (check === "textColor") {
		foreColor(changeValue);
	}
	else if (check === "fonts") {
		fontName(changeValue);
	}
	else if (check === "hiliteColor") {
		hiliteColor(changeValue);
	}
	else if (check === "fontSize") {
		fontSize(changeValue);
	}
};


window.onload = () => {
	if (localStorage.getItem("folderName") !== null && document.getElementById("panel")) {
		console.log(localStorage.getItem("folderName") + localStorage.getItem("fileName"));
		var folderName1 = localStorage.getItem("folderName");
		var fileName1 = localStorage.getItem("fileName");
		var src = require(`../assets/Booktemplates/${folderName1}/${fileName1}.json`);
		console.log("page 1\n" + src.html);

		document.getElementById("panel").innerHTML = src.html;
		return;
	}
}

function isAtTextEnd() {
	var sel = window.getSelection(),
		offset = sel.focusOffset;
	sel.modify("move", "forward", "character");
	if (offset == sel.focusOffset) return true;
	else {
		sel.modify("move", "backward", "character");
		return false;
	}
}
function getSelectionTextInfo(el) {
	el = document.getElementById("page");
	var atStart = false, atEnd = false;
	var selRange, testRange;
	if (window.getSelection) {
		var sel = window.getSelection();
		if (sel.rangeCount) {
			selRange = sel.getRangeAt(0);
			testRange = selRange.cloneRange();

			testRange.selectNodeContents(el);
			testRange.setEnd(selRange.startContainer, selRange.startOffset);
			atStart = (testRange.toString() === "");

			testRange.selectNodeContents(el);
			testRange.setStart(selRange.endContainer, selRange.endOffset);
			atEnd = (testRange.toString() === "");
		}
	} else if (document.selection && document.selection.type !== "Control") {
		selRange = document.selection.createRange();
		testRange = selRange.duplicate();

		testRange.moveToElementText(el);
		testRange.setEndPoint("EndToStart", selRange);
		atStart = (testRange.text === "");

		testRange.moveToElementText(el);
		testRange.setEndPoint("StartToEnd", selRange);
		atEnd = (testRange.text === "");
	}

	return { atStart: atStart, atEnd: atEnd };
}



function pageBreaker() {
	console.log("breaker");
	const breakerHtml = "<div class='pageBreak' contenteditable='false' style='page-break-after:always; break-after: page; height: 5px; width: 100%;  border:1px dashed rgb(170, 166, 166);'></div>";
	document.execCommand("insertHTML", false, breakerHtml);
	document.execCommand("insertHTML", false, "<p><br></p>");
}

function ChangeTextColor(event) {
	var selection = window.getSelection().getRangeAt(0);
	var selectedText = selection.extractContents();
	var span = document.createElement("span");
	span.style.color = "yellow";
	span.appendChild(selectedText);
	selection.insertNode(span);
}

function wrapSelectedText() {
	var selection = window.getSelection().getRangeAt(0);
	var selectedText = selection.extractContents();
	var span = document.createElement("b");
	//span.style.backgroundColor = "yellow";
	span.appendChild(selectedText);
	selection.insertNode(span);
}
// function clickfunc(event) {
// 	const command = (event.target !== undefined && event.target.getAttribute("data-command") !== null) ?
// 		event.target.getAttribute("data-command") : null;
// 	if (command === null) {
// 		return;
// 	}
// 	console.log("Selected command: " + command);

// 	if (document.getSelection().toString().length === 0) {
// 		alert("Please select some text before editing the content.");
// 		return;
// 	}

// 	let range = window.getSelection().getRangeAt(0);
// 	console.log("previous " + range.startContainer.parentNode.nodeName);
// 	console.log("parent " + range.endContainer.parentNode.nodeName);

// 	console.log(range);

// 	if (range.startContainer.parentNode.nodeName === "B") {


// 		var oldConent = range.cloneContents();

// 		const newElement = document.createElement("span");
// 		const firstbold = document.createElement("b");

// 		newElement.append(firstbold);
// 		newElement.appendChild(oldConent);
// 		newElement.appendChild(firstbold);

// 		range.deleteContents();
// 		range.insertNode(newElement);
// 	}
// 	else {

// 		console.log(range.cloneContents());

// 		var oldConent = range.cloneContents();
// 		console.log(oldConent);

// 		const newElement = document.createElement(command);
// 		newElement.appendChild(oldConent);
// 		console.log(newElement);
// 		range.deleteContents();
// 		range.insertNode(newElement);
// 	}
// };



function data() { //To access html data
	const dataa = document.getElementsByClassName("editor");
	console.log(dataa.item(0).innerHTML);
}

function bold() {
	document.execCommand("bold", false, null);
}
function italic() {
	document.execCommand("italic", false, null);
}
function strikeThrough() {
	document.execCommand("strikeThrough", false, null);
}
function underline() {
	document.execCommand("underline", false, null);
}
function justifyLeft() {
	document.execCommand("justifyLeft", false, null);
}
function justifyCenter() {
	document.execCommand("justifyCenter", false, null);
}
function justifyRight() {
	document.execCommand("justifyRight", false, null);
}
function justifyFull() {
	document.execCommand("justifyFull", false, null);
}

function insertOrderedList() {
	document.execCommand("insertOrderedList", false, null);
}
function insertUnorderedList() {
	document.execCommand("insertUnorderedList", false, null);
}
function indent() {
	document.execCommand("indent", false, null);
}
function outdent() {
	document.execCommand("outdent", false, null);
}

function removeFormat() {
	document.execCommand("removeFormat", false, null);
}
function createLink() {
	const arg = prompt('Enter a URL:', 'http://');
	document.execCommand("createLink", false, arg);
}
function unlink() {
	document.execCommand("unlink", false, null);
}
function subscript() {
	document.execCommand("subscript", false, null);
}
function superscript() {
	document.execCommand("superscript", false, null);
}
function insertHorizontalRule() {
	document.execCommand("insertHorizontalRule", false, null);
}

function fontSize(arg) {
	document.execCommand("fontSize", false, arg);
}
function foreColor(arg) {
	document.execCommand("foreColor", false, arg);
}
function hiliteColor(arg) {
	document.execCommand("hiliteColor", false, arg);
}
function formatBlock(arg) { //for Headings and paragraph
	document.execCommand("formatBlock", false, arg);

}

function fontName(arg) {
	document.execCommand("fontName", false, arg);
}

function addImage() {
	const arg = prompt('Enter a URL:');
	document.execCommand("insertImage", false, arg);
}

async function addLocalImage(e, date) {
	var name = e.target.files[0].name;
	var image = `my-image-file_dateVal_${name}`;

	setTimeout(() => {
		console.log(image);
		var link = require("./uploadedimages/" + image);
		document.execCommand("insertImage", false, link);
		console.log("TimeOut");
	}, 3000);


	//var image = `my-image-file_dateVal_${date}_${name}`;

	//var src=require("./uploadedimages/"+image);
	//var img='<img src="'+src+'">';
	//document.execCommand("insertHTML", false, img);
	//<img src={require("./uploadedimages/"+image)} />

}
function printDocExec() {
	document.execCommand("print", false, null)
}
// function addPage(event) {
// 	var newDiv = document.createElement("div");
// 	newDiv.className = 'page';
// 	var para = document.createElement("p");
// 	var breaker = document.createElement("br");
// 	para.appendChild(breaker);

// 	newDiv.appendChild(para);
// 	// newDiv.style.left = this.offsetLeft + 'px';
// 	const parent = document.getElementById("panel");
// 	parent.appendChild(newDiv);
// 	//this.parentNode.appendChild(newDiv);
// }

function printDoc() {

	var visible = document.getElementsByClassName("pageBreak");
	for (var i = 0; i < visible.length; i++) {
		document.getElementsByClassName("pageBreak")[i].style.visibility = "hidden";
	}
	PHE.printElement(document.getElementById('page'));
	for (var j = 0; j < visible.length; j++) {
		document.getElementsByClassName("pageBreak")[j].style.visibility = "visible";
	}
}



function tableContent() { //mine
	if (document.getElementById('page').querySelectorAll('h1,h2,h3').length === 0) {
		if (document.getElementById('toc')) {
			var toc = document.getElementById('toc');
			toc.innerHTML = "";
		}
		return;
	};
	var contentContainer = document.getElementById('page');
	var headings = contentContainer.querySelectorAll('h1,h2,h3');
	if (!document.getElementById('toc')) {
		var DIV = document.createElement("div");
		DIV.setAttribute("id", "toc");
		contentContainer.insertBefore(DIV, contentContainer.firstChild);

	}

	var toc = document.getElementById('toc');
	var ul = document.createElement('ul');

	for (var i = 0; i <= headings.length - 1; i++) {
		var id = headings[i].innerText.toLowerCase().replace(/ /g, "-"); // Set the ID to the header text, all lower case with hyphens instead of spaces.
		var level = headings[i].nodeName;
		var title = headings[i].innerText;

		headings[i].setAttribute("id", id)  // Set header ID to its text in lower case text with hyphens instead of spaces.

		var tContent = document.createElement("p");
		tContent.innerHTML = '<p style="font-size: 16px;">Table of Content</p>';

		var li = document.createElement('li');     // create li element.
		//li.setAttribute('class', 'sidenav__item') // Assign a class to the li

		var a = document.createElement('a'); // Create a link
		a.setAttribute("href", "#" + id) // Set the href to the heading ID
		a.innerHTML = title; // Set the link text to the heading text

		if (level === "H1") {
			console.log("H1");
			li.appendChild(a); // Append the link to the list item
			ul.appendChild(li);
		}
		else if (level === "H2") {
			var child = document.createElement('ul'); // Create a sub-list
			li.appendChild(a);
			child.appendChild(li);
			ul.appendChild(child);
		} else if (level === "H3") {
			var grandchild = document.createElement('ul');
			li.appendChild(a);
			grandchild.appendChild(li);
			if (child) {
				child.appendChild(grandchild);
			}
			else {
				ul.appendChild(grandchild);
			}
		}

	}
	console.log(ul.innerHTML);
	toc.innerHTML = (tContent.innerHTML + ul.innerHTML);


}
var JSONdata = { "html": "<div id=\"page\" class=\"page\" contenteditable=\"true\"><div id=\"toc\"><p style=\"font-size: 16px;\">Table of Content</p><li><a href=\"#what-is-lorem-ipsum?&nbsp;\">What is Lorem Ipsum?&nbsp;</a></li></div><h1 id=\"what-is-lorem-ipsum?&nbsp;\">What is Lorem Ipsum?&nbsp;</h1><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard <i>dummy text ever since the 1500s,</i> when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><p>It has survived not only <b>five centuries,</b> but also the leap into electronic typesetting,</p><p>remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>" };
async function template() {
	// var Propo = require("./Book 2/Template_JS");
	// const root = ReactDOM.createRoot(document.getElementById('page'));
	// root.render(
	// 	<Propo.default />
	// );

	// var src = require("./templates/Booktemplates/Trainingproposal.json");
	// console.log("page 1\n" + src.html);
	// document.getElementById("panel").innerHTML = await src.html;

}

function downloadInJson(mimeType) {
	const documentName = prompt('Enter a document name:');
	var fileName = documentName + ".json";
	var contentContainer = document.getElementById("page");
	var link = document.createElement('a');
	var element = contentContainer.outerHTML;
	var data = { html: element };
	//  This gives you a string in JSON syntax of the object above that you can 
	// send with XMLHttpRequest.
	var json = JSON.stringify(data);
	console.log(json);
	mimeType = mimeType || 'json';

	link.setAttribute('download', fileName);
	link.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(json));
	link.click();
}


export default data;
export {
	bold, createLink, unlink, formatBlock, insertOrderedList, insertUnorderedList,
	italic, strikeThrough, justifyCenter, justifyFull, justifyLeft, justifyRight, underline, indent, outdent, removeFormat,
	subscript, superscript, insertHorizontalRule, fontName, fontSize, foreColor, hiliteColor, getSelectionTextInfo,
	isAtTextEnd, addImage, pageBreaker, printDoc, printDocExec, tableContent, template, downloadInJson, addLocalImage,
	handleChange
};
