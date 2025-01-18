// Utility functions for the Cashalyze application

/**
 * Formats a number as currency
 * @param amount - The amount to format
 * @param currency - The currency code (default: 'USD')
 * @returns Formatted currency string
 */
export function formatCurrency(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  }).format(amount);
}

/**
 * Formats a date in a readable format
 * @param date - The date to format
 * @returns Formatted date string
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
}

/**
 * Parses a date string from a bank statement
 * @param dateString - The date string to parse
 * @returns Parsed Date object
 */
export function parseStatementDate(dateString: string): Date {
  // Bank statements often use formats like 'MM/DD/YYYY' or 'DD-MM-YYYY'
  const [month, day, year] = dateString.split(/[\/-]/);
  return new Date(Number(year), Number(month) - 1, Number(day));
}
