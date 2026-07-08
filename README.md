# FC Ecoturismo — Tarifário 2026

Site animado com o tarifário oficial 2026 da FC Ecoturismo pela Rota das Emoções
(Lençóis Maranhenses, Delta do Parnaíba, Barra Grande e Jericoacoara).

## Estrutura

- `index.html` — estrutura da página
- `styles.css` — todo o visual (cores da marca, animações, responsivo)
- `script.js` — dados dos trechos, filtros/busca, formulário de reserva e integração com WhatsApp
- `images/` — logo e fotos reais de cada destino (Barreirinhas, Caburé, Parnaíba, Barra Grande, Jericoacoara, Tutoia, Camocim, Fortaleza)

## Como usar

Basta abrir o `index.html` em qualquer navegador, ou publicar a pasta inteira
(os 3 arquivos + a pasta `images/`) em qualquer serviço de hospedagem estática
(GitHub Pages, Netlify, Vercel etc.). **Importante:** ao subir para o GitHub,
envie a pasta `images/` junto — se ela não for enviada, as fotos e a logo não aparecem.

### Publicar no GitHub Pages
1. Crie o repositório `FCECOTURISMO` no GitHub e envie estes arquivos (mantendo a pasta `images/`).
2. Vá em **Settings → Pages**.
3. Em "Branch", selecione `main` e a pasta `/root`, depois salve.
4. Em alguns minutos o site estará disponível em `https://SEU-USUARIO.github.io/FCECOTURISMO/`.

## Trocar ou adicionar fotos

Basta substituir o arquivo correspondente dentro de `images/` (mantendo o mesmo nome)
ou adicionar um novo destino no array `DESTINOS`, no início do `script.js`.

## Atualizar preços ou trechos

Todos os trechos e preços ficam no arquivo `script.js`, dentro do array `ROUTES`.
Basta editar os valores de `cd` (Cabine Dupla) e `sw4` (SW4) ou adicionar novas linhas
seguindo o mesmo formato.

## WhatsApp

O número que recebe as solicitações de reserva está na constante `WHATSAPP_NUMBER`
no início do arquivo `script.js`.
