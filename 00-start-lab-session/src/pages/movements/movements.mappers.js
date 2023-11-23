// movements.mappers.js

export const mapMovementsToPage = (movementsData) => {
    // Mapear datos generales
    document.getElementById('alias').textContent = movementsData.alias || '';
    document.getElementById('iban').textContent = movementsData.iban || '';
    document.getElementById('balance').textContent = movementsData.balance || '';
  
    // Mapear movimientos
    const movementList = document.getElementById('movement-list');
    movementList.innerHTML = '';
  
    movementsData.movements.forEach((movement) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${movement.date}</td>
        <td>${movement.valueDate}</td>
        <td>${movement.description}</td>
        <td>${movement.amount}</td>
        <td>${movement.availableBalance}</td>
      `;
      movementList.appendChild(row);
    });
  };
  