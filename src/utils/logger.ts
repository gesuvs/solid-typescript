export function Console(content: string): void {
	const { log } = console;
	log(content, {
		timestamp: new Date().toTimeString(),
	});
}
