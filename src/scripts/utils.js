export function maxLength(data) {
  return data.reduce((acc, curr) => (curr.content.length > acc.content.length ? curr : acc));
}

export class Selection {
  constructor(article) {
    this.word = this.selection(article).word;
    this.start = this.selection(article).start;
    this.end = this.selection(article).end;
  }

  selection(article) {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const start = range.startOffset;
    const end = range.endOffset;

    return {
      word: article.substring(start, end).trim(),
      start: article.substring(0, start),
      end: article.substring(end, article.length),
    };
  }
}

export class TranslateUrl {
  constructor(word) {
    this.link = this.translation(word);
  }

  translation(word) {
    const url = 'https://translate.google.com.tw';
    const search = {
      hl: 'zh-TW',
      tab: 'rT',
      sl: 'en',
      tl: 'zh-TW',
      text: word.trim(),
      op: 'translate',
    };
    const result = `${url}/?` + new URLSearchParams({ ...search });

    return result.toString().split('+').join('%20');
  }
}
