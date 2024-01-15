export const validateTransferData = (transferData) => {
    const errors = {};
  
    // Validación del ID de la cuenta
    if (!transferData.accountId) {
      errors.accountId = 'La cuenta de origen es requerida.';
    }
  
    // Validación del IBAN del destinatario
    if (!transferData.recipientIban) {
      errors.recipientIban = 'El IBAN del destinatario es requerido.';
    }
  
    // Validación del nombre del destinatario
    if (!transferData.recipientName || transferData.recipientName.trim() === '') {
      errors.recipientName = 'El nombre del destinatario es requerido.';
    }
  
    // Validación del importe
    if (!transferData.amount || isNaN(parseFloat(transferData.amount)) || parseFloat(transferData.amount) <= 0) {
      errors.amount = 'El importe debe ser un número positivo.';
    }
  
    return errors;
  };
  