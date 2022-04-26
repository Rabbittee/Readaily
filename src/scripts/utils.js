export function maxLength(data) {
  return data.reduce((acc, curr) => (curr.content.length > acc.content.length ? curr : acc));
}
