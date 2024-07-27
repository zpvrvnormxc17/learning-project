type Mods = Record<string, boolean | string> // key: string, prop: bol || string

export function classNames(
	cls: string,
	mods: Mods,
	additional: string[]
): string {
	return [
		cls,
		...additional,
		Object.entries(mods)
			.filter(([cls, value]) => Boolean(value))
			.map(([cls, value]) => cls),
		//entries как ключи так и значения обьекта -> масив
	].join(' ')
}

// classNames('remove-btn', { hovered: true, selectable: true, red: false }, [
// 	'pdg',
// ])

// 'remove-btn hovered selectable pdg'

// полезно можно использовать библиотеку но мы использовали самописную реализацию :)
