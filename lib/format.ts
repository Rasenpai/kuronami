const idrNumber = new Intl.NumberFormat("id-ID");

export function formatIDR(amount: number) {
  return `IDR ${idrNumber.format(amount)}`;
}