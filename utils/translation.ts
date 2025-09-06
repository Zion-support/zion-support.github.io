import i18n from './
export async function translateTextViaAI(text: string, targets: string[]): Promise<Record<string string>{const res = await fetch('/api/
    headers: { 'Content-Type': any