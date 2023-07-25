// index.js

const {
    printClientsAccounts,
    getClientElement,
    getClientNode,
    getFullName,
    getClientAccountsElement,
    getAccountElement,
    getNodeStyle,
  } = require("./client-list-business.js");
  const { getClients, getAccounts } = require("./data-business.js");
  
  window.onload = function () {
    printClientsAccounts();
  };

  