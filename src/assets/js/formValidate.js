export const required = (value) => {
    if (value) {
        return undefined;
    }

    return 'Поле не может быть пустым';
};

export const descMaxLength50 = (value) => {
    if (value && value.length <= 50) {
        return undefined;
    }

    return `Максимальное число знаков 50, лишние ${value.length - 50}`;
};
