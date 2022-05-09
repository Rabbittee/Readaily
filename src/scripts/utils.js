export function maxLength(data) {
  return data.reduce((acc, curr) => (curr.content.length > acc.content.length ? curr : acc));
}

export class Selection {
  selection = window.getSelection();
  range = this.selection.getRangeAt(0);
  start = this.range.startOffset;
  end = this.range.endOffset;

  constructor(article) {
    this.setSelection(article);
  }

  setSelection(article) {
    this.word = article.substring(this.start, this.end).trim();
    this.start = article.substring(0, this.start);
    this.end = article.substring(this.end, article.length);
  }
}

export class TranslateURL {
  search = {
    hl: 'zh-TW',
    tab: 'rT',
    sl: 'en',
    tl: 'zh-TW',
    text: '',
    op: 'translate',
  };

  constructor(word) {
    this.link = this.setQueryString(word);
  }

  setQueryString(word) {
    const url = 'https://translate.google.com.tw';
    this.search.text = word.trim();
    const result = `${url}/?` + new URLSearchParams({ ...this.search });
    return result.split('+').join('%20');
  }
}
