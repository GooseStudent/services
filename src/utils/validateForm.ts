export interface ValidationErrors {
  name?: string;
  price?: string;
}

export function validateForm(name: string, price: string): ValidationErrors {
  const errors: ValidationErrors = {};

  const trimmedName = name.trim();
  if (!trimmedName) {
    errors.name = 'Название услуги обязательно';
  } else if (trimmedName.length < 2) {
    errors.name = 'Название должно содержать минимум 2 символа';
  }

  const trimmedPrice = price.trim();
  if (!trimmedPrice) {
    errors.price = 'Цена обязательна';
  } else {
    const numPrice = Number(trimmedPrice);
    if (isNaN(numPrice) || numPrice <= 0) {
      errors.price = 'Цена должна быть числом больше 0';
    }
  }

  return errors;
}