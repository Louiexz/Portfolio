export class Card {
    constructor() {
        // List of valid card IDs
        this.cards = {
            "financial-manager":"Gerencie suas finanças, transações e metas com agilidade.",
            "e-commence":"Encontre variadas ofertas, pesquise produtos diversos e visualize-os.",
            "diario-interativo":"Diário interativo online, estilize e compartilhe seus momentos.",
            "chat-anonimo":"Permite que múltiplos usuários se conectem e conversem em tempo real.",
            "landing-aura":"Back-end da landing page Aura, para o TAKEOFF 2024.2 (Squad 41, Accenture).",
            "agenda-contatos":"Sistema de agendamentos de contatos no terminal java, crie contatos.",
            "invasao-alienigena":"Elimine ordas de aliens ou eles chegarão a nossa base.",
            "apocalipse-zumbi":"Destrua os zumbis enquanto eles te perseguem, ou seja devorado.",
            "killeropil-escape":"Terror com personagens autênticos, corra ou lute com o monstro.",
        };
    }
    setBackCardImg(cardId) {
        const img = document.createElement('img');
        img.src = `img/back-card/${cardId}.png`
        img.alt = `Image for ${cardId}`
        img.classList.add(`back-card-img`)
        img.id = `img-${cardId}`

        img.addEventListener('click', () => {
            img.classList.toggle("showCard");
        });

        // Adiciona o evento de sair com o mouse
        img.addEventListener('mouseleave', () => {
            img.classList.remove("showCard");
        });
        return img;
    }
    // Function to restore the original content (backup)
    reRotateCard(target, div) {
        if (target && div) {
            var back = document.createElement("button");
            back.classList.add("back-button");
            back.innerHTML = "Rotate card";
            back.addEventListener('click', ()=> {
                div.classList.add("rotateCard");

                div.addEventListener('animationend', () => {
                    target.parentElement.removeChild(div);
                    
                    target.classList.remove("rotateCard");
                    target.classList.remove("hidden-card");
                }, { once: true });
            });
            div.appendChild(back);
        }
    }

    // Function to replace the card with the 'back-card'
    contentRotateCard(target) {
        if (!target) throw new Error('Error: Target nulling.');; // Guard clause

        // Get the ID of the card
        const cardId = target.getAttribute('id');

        // Validate the card ID
        if (!cardId || !this.cards[cardId]) {
            throw new Error('Error: Target does not have a valid ID or is not in the list of cards.');
        }

        // Adiciona a animação antes de ocultar o conteúdo original
        target.classList.add("rotateCard");

        // Espera a animação terminar antes de ocultar o elemento
        target.addEventListener('animationend', () => {
            target.classList.add("hidden-card"); // Adiciona a classe para ocultar o conteúdo
            
            // Cria um novo div para o 'back-card'
            const div = document.createElement('div');
            div.className = "back-card"; // Define uma única classe

            // Usa template literals para interpolar o ID e criar o conteúdo
            div.innerHTML = `
                <h3>${this.cards[cardId]}</h3>
            `;
            const img = this.setBackCardImg(cardId)
            div.appendChild(img)

            // Adiciona evento de clique para restaurar o conteúdo original
            this.reRotateCard(target, div);

            // Insere o novo div na mesma posição que o target
            target.parentElement.insertBefore(div, target.nextSibling);
            rotate.showCard();
        }, { once: true });
    }
    // Create events, rotate button and call back card
    createRotateCard() {
        const cards = document.querySelectorAll('.card')
        cards.forEach(card => {
            if (card.innerText != "") {
                var back = document.createElement("button");
                back.classList.add("back-button");
                back.innerHTML = "Rotate card";
                back.addEventListener('click', (e)=> {
                    console.log(e.currentTarget.parentElement);
                    this.contentRotateCard(e.currentTarget.parentElement);
                });
                card.appendChild(back);
            }
        });
    }
}
