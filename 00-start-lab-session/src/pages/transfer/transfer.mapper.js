export const mapFormDataToApiModel = (formData) => {
    return {
      fromAccountId: formData.accountId,
      toIban: formData.recipientIban,
      beneficiaryName: formData.recipientName,
      amount: parseFloat(formData.amount),
      concept: formData.concept,
      additionalNotes: formData.notes,
    };
  };
  
  export const mapApiModelToFormData = (apiModel) => {
    return {
      accountId: apiModel.fromAccountId,
      recipientIban: apiModel.toIban,
      recipientName: apiModel.beneficiaryName,
      amount: apiModel.amount.toString(),
      concept: apiModel.concept,
      notes: apiModel.additionalNotes,
    };
  };