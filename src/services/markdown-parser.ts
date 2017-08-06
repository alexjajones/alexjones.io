import * as Remarkable from 'remarkable'

import * as hljs from 'highlight.js/lib/highlight.js';
import * as javascript from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('javascript', javascript);

import 'highlight.js/styles/androidstudio.css'

export const MarkdownParser = new Remarkable('full', {
    highlight: function (str: string, lang: string) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(lang, str).value;
            } catch (err) {}
        }

        try {
            return hljs.highlightAuto(str).value;
        } catch (err) {}

        return ''; // use external default escaping
    }
});

console.log(MarkdownParser);