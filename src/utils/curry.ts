export const curry = (a: Function) => (b: unknown) => {
	if (typeof b === 'function') return curry((x: unknown) => a(b(x)));
	return a(b);
};