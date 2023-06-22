let idAtual = 0;
function preencher(){
    const tbody = document.getElementById('tbody');
    const nomeValue = document.getElementById('nome-anime').value;
    const descValue = document.getElementById('desc-anime').value;
    idAtual+=1;
    const tableRow = `  <tr>
                            <td>${idAtual}</td>
                            <td>${nomeValue}</td>
                            <td>${descValue}</td>
                            <td>
                                <button
                                onclick="deleteItem('${idAtual}')"
                                class="buttonDelete"
                                >
                                    Deletar este anime
                                </button>
                            </td>
                        <tr>
    `;
    tbody.innerHTML+=tableRow;
    document.getElementById('nome-anime').value = ''
    document.getElementById('desc-anime').value = ''
}
function deleteItem(uuid){
    const rows = document.querySelectorAll('#tbody tr');
    rows.forEach((row)=>{
        const idCell = row.querySelector('td:first-child');
        if(idCell.textContent=== uuid){
        row.remove();
        }
    })
}