function buscarPrevisaoTempo() {
    const cidade = document.getElementById('cidade').value;
    const apiKey = '6be5f6e0361b740c3d284ade7979ccf2'; 

    if (!cidade) {
        alert('Por favor, digite o nome da cidade.');
        return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const previsao = document.getElementById('previsao');
            previsao.innerHTML = `Cidade: ${data.name}<br><br>`;
            previsao.innerHTML += `Temperatura: ${data.main.temp}°C<br><br>`;
            previsao.innerHTML += `Clima: ${data.weather[0].description}<br><br>`;
            // Adicionar o ícone da condição climática
            const iconElement = document.createElement('i');
            iconElement.className = `fas fa-${data.weather[0].icon}`;
            previsao.appendChild(iconElement);
        })
        .catch(error => {
            alert('Erro ao consultar a previsão do tempo.')});
        }
