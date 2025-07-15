export function isExpired(dueDate: string): boolean {
  return new Date(dueDate) < new Date()
}
