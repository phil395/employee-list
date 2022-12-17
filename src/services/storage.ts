export class ClientStorage<Keys extends readonly [string, ...string[]]> {
	private storage?: Storage;

	constructor(storageType: 'session' | 'local' = 'local') {
		try {
			this.storage = storageType === 'session'
				? window.sessionStorage
				: window.localStorage;
		} catch (error) { }
	}

	public get<Data>(key: Keys[number]) {
		if (!this.storage) return;

		const serializedValue = this.storage.getItem(key);

		if (!serializedValue) return;

		try {
			return JSON.parse(serializedValue) as Data;
		} catch (error) { }
	}

	public set(key: Keys[number], value: unknown) {
		if (!this.storage) return;

		if (typeof value === 'string') {
			this.storage.setItem(key, value);
			return;
		}

		try {
			const serializedValue = JSON.stringify(value);
			this.storage.setItem(key, serializedValue);
		} catch (error) { }
	}
}

export const localStorage = new ClientStorage<['employees']>();