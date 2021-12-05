const clone = obj => Object.keys(obj).reduce((s, x) => ({ ...s, [x]: typeof obj[x] === 'object' ? clone(obj[x]) : obj[x] }), {})
