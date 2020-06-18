javascript:"use strict";(function(){function copyToClipboard(text){alert(text)}function jsDate2bibTex(date){var dd=date.getDate();var mm=date.getMonth()+1;var yyyy=date.getFullYear();if(dd<10){dd="0"+dd}if(mm<10){mm="0"+mm}return yyyy+"-"+mm+"-"+dd}var title=document.title;var url=document.URL;var author_tag=document.querySelector("[name=author]");var author=author_tag==null?"":author_tag.content;if(author===undefined){author=""}var today=new Date;var urldate=jsDate2bibTex(today);var modDate=new Date(document.lastModified);var date=jsDate2bibTex(modDate);var title_key_word=title.split(" ")[0];var author_key_word=author.split(" ").splice(-1)[0];var title_key=title_key_word.replace(/[^0-9a-z]/gi,"").toLowerCase();var title_key_author=author_key_word.replace(/[^0-9a-z]/gi,"").toLowerCase();var dateYear=modDate.getFullYear();var citationKey=""+title_key_author+dateYear+title_key;var type="@online";var title_tex=title.replace(/\u00e4/g,'\\"a').replace(/\u00c4/g,'\\"A').replace(/\u00f6/g,'\\"o').replace(/\u00d6/g,'\\"O').replace(/\u00fc/g,'\\"u').replace(/\u00dc/g,'\\"U').replace(/\u00DF/g,'\\"s');var bibTexEntry=type+"{"+citationKey+",\n\ttitle = {"+title_tex+"},\n\tdate = {"+date+"},\n"+(author?"\tauthor = {"+author+"},\n":"")+"\turl = {"+url+"},\n\turldate = {"+urldate+"}\n}";copyToClipboard(bibTexEntry)})();