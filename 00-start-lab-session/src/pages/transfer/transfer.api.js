// transfer.api.js

const apiUrl = 'https://api.bancaonline.com/transfers';

export const makeTransfer = async (transferData) => {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transferData),
    });

    if (!response.ok) {
      throw new Error(`Error al realizar la transferencia. Código: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error en la solicitud a la API:', error.message);
    throw error;
  }
};
