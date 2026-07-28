// Simplified version of clsx/lite
// Original: https://github.com/lukeed/clsx/blob/master/src/lite.js

type ClsxArg = string | boolean | undefined | null;

export function clsx(className: ClsxArg, ...rest: ClsxArg[]): string;
export function clsx() {
  var i = 0,
    tmp: unknown,
    str = '',
    len = arguments.length;
  for (; i < len; i++) {
    if ((tmp = arguments[i])) {
      if (typeof tmp === 'string') {
        str += (str && ' ') + tmp;
      }
    }
  }
  return str;
}
