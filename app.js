const API = "COLE_AQUI_SUA_URL_DO_APPS_SCRIPT";

async function carregarRanking() {

    try {

        const response = await fetch(API);
        const dados = await response.json();

        const ranking = document.getElementById("ranking");

        ranking.innerHTML = "";

        dados.forEach(item => {

            ranking.innerHTML += `
                <div class="card">
                    <h2>${item.posicao}º Lugar</h2>
                    <p>${item.consultor}</p>
                    <strong>
                        R$ ${Number(item.producao).toLocaleString('pt-BR')}
                    </strong>
                </div>
            `;

        });

    } catch (error) {

        console.error("Erro ao carregar ranking:", error);

    }

}

carregarRanking();

setInterval(carregarRanking, 10000);
