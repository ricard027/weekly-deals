export const formatPrice = (price: number): string => {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(price);
};

export const handleBuyClick = (productTitle: string): void => {
    alert(`Produto "${productTitle}" adicionado ao carrinho!`);
}; 