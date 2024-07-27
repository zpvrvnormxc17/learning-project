//global.d.ts глобальная декларация типов :)
declare module '*.scss' {
	interface IClassNames {
		[className: string]: string
	}

	const classNames: IClassNames
	export = classNames
}
