(() => {
  function copyToClipboard(text) {
	  //window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
	  alert(text);
  }
	
  function jsDate2bibTex(date) {
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();
  
    // Add zero prefix:
    if (dd < 10) {
      dd = `0${dd}`;
    }
  
    // Add zero prefix:
    if (mm < 10) {
      mm = `0${mm}`;
    }
  
    // create string for date:
    return `${yyyy}-${mm}-${dd}`;
  }

  const title = document.title;
  const url = document.URL;

  // get author if meta tag exists:
  let author_tag = document.querySelector("[name=author]");
  let author = (author_tag == null) ? "" : author_tag.content;
	if (author === undefined) 
	{ 
		author = ""; 
	}

  const today = new Date();
  const urldate = jsDate2bibTex(today);

  let modDate = new Date(document.lastModified);
  const date = jsDate2bibTex(modDate);
	

  let title_key_word = title.split(" ")[0];
	let author_key_word = author.split(" ").splice(-1)[0];

  // remove special characters for citation key:
  let title_key = title_key_word.replace(/[^0-9a-z]/gi, "").toLowerCase();
  let title_key_author = author_key_word.replace(/[^0-9a-z]/gi, "").toLowerCase();

  // create citation key:
  let dateYear = modDate.getFullYear();
  const citationKey = `${title_key_author}${dateYear}${title_key}`;

  const type = "@online";
  //const filename = `:./references/${window.location.pathname
  //  .slice(1)
  //  .replace(/\//g, "-")}.html:html`;

  // Replace german umlauts with latex commands:
  let title_tex = title
    .replace(/\u00e4/g, '\\"a')
    .replace(/\u00c4/g, '\\"A')
    .replace(/\u00f6/g, '\\"o')
    .replace(/\u00d6/g, '\\"O')
    .replace(/\u00fc/g, '\\"u')
    .replace(/\u00dc/g, '\\"U')
    .replace(/\u00DF/g, '\\"s');

  // generate BiBTeX entry:
//   const bibTexEntry = `${type} {${citationKey},\r\
// \ \ title = {${title_tex}},\r\
// \ \ date = {${date}},\r\
// ${author ? `\ \ author = {${author}},\r` : ""}\
// \ \ file = {${filename}},\r\
// \ \ url = {${url}},\r\
// \ \ urldate = {${urldate}}\r\
// }`;

  const bibTexEntry = `${type}{${citationKey},\n\
\ttitle = {${title_tex}},\n\
\tdate = {${date}},\n\
${author ? `\tauthor = {${author}},\n` : ""}\
\turl = {${url}},\n\
\turldate = {${urldate}}\n\
}`;

  copyToClipboard(bibTexEntry);
})();
