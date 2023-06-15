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
                                <button>
                                    Deletar este anime
                                </button>
                            </td>
                        <tr>
    `;
    tbody.innerHTML+=tableRow;
}