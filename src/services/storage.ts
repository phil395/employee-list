export class LocalStorage {
	private static storage?: Storage;

	static {
		try {
			LocalStorage.storage = window.localStorage;
		} catch (error) { }
	}

	public static get<T>(key: string) {
		if (!LocalStorage.storage) return;

		const serializedValue = LocalStorage.storage.getItem(key);

		if (!serializedValue) return;

		try {
			return JSON.parse(serializedValue) as T;
		} catch (error) { }
	}

	public static set(key: string, value: unknown) {
		if (!LocalStorage.storage) return;

		if (typeof value === 'string') {
			LocalStorage.storage.setItem(key, value);
			return;
		}

		try {
			const serializedValue = JSON.stringify(value);
			LocalStorage.storage.setItem(key, serializedValue);
		} catch (error) { }
	}

	public static clear() {
		if (!LocalStorage.storage) return;

		LocalStorage.storage.clear();
	}
}