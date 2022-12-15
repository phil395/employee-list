export const getId = (): string => {
	return window.crypto.randomUUID();
};