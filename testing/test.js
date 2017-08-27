function dueMarkdownToHTML(markdown)
{
    // Fix references
    markdown = markdown.replace(/="\.\./g, '="https://dueutil.tech/');
    // Bold
    markdown = markdown.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
    // Underline
    markdown = markdown.replace(/__(.*?)__/g, "<u>$1</u>");
    // Code
    markdown = markdown.replace(/``(.*?)``/g, "<code>$1</code>");
    // New lines
    markdown = markdown.replace(/(?:\r\n|\r|\n)/g, '<br />');
    // Prefix
    markdown = markdown.replace(/\[CMD_KEY\]/g,'!');
    // Headers
    markdown = markdown.replace(/##(.*?)##/g, "<h3>$1</h3>");
    // Emoji/Icons
    markdown = markdown.replace(/:icon-(.*?):/g, "<span class='icon-$1'></span>");
    // Escaped stuff
    markdown = markdown.replace(/\\(.)/g, 
        function (match, contents) {
                return escapeHtml(contents);
        }
    );
    // Embeded templates (cannot be shown)
    markdown = markdown.replace(/<TPL:(.*?).tpl>/g, "The template <b>$1</b>.");
    return markdown;
}

function escapeHtml(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}
