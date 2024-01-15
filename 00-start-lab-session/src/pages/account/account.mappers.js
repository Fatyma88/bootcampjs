export const mapAccountFromApiToViewModel = account => {
  return {
    ...account,
    alias: account.name,
  };
};

export const mapAccountFromViewModelToApi = account => {
  return {
    ...account,
    name: account.alias,
  };
};

export const mapAccountVmToApi = account => ({
  id: account.id,
  type: account.type,
  name: account.alias,
  });
  export const mapAccountApiToVm = account => ({
  id: account.id,
  type: account.type,
  alias: account.name,
  });