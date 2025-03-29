# SEPSE 2024 - Festival de Música Eletrônica

Um site moderno para venda de ingressos de um festival de música eletrônica, construído com Next.js, TypeScript e Tailwind CSS.

## Tecnologias Utilizadas

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Zustand
- QR Code React

## Pré-requisitos

- Node.js 18.17 ou superior
- npm ou yarn

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/emf-2024.git
cd emf-2024
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Crie um arquivo `.env.local` na raiz do projeto:
```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

5. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Estrutura do Projeto

```
src/
├── app/                    # Páginas e rotas
│   ├── page.tsx           # Página inicial
│   ├── lineup/            # Página de line-up
│   ├── ingressos/         # Página de ingressos
│   ├── checkout/          # Página de checkout
│   └── sucesso/           # Página de sucesso
├── components/            # Componentes reutilizáveis
│   ├── Navbar.tsx        # Barra de navegação
│   └── Footer.tsx        # Rodapé
└── store/                # Estado global
    └── cartStore.ts      # Gerenciamento do carrinho
```

## Funcionalidades

- Design responsivo e moderno
- Animações suaves com Framer Motion
- Gerenciamento de estado com Zustand
- Geração de QR Code para ingressos
- Formulário de checkout em múltiplas etapas
- Integração com métodos de pagamento

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

## Deploy

O projeto está configurado para deploy na Vercel. Para fazer o deploy:

1. Crie uma conta na [Vercel](https://vercel.com)
2. Conecte seu repositório
3. Configure as variáveis de ambiente
4. Deploy automático será feito a cada push

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes. 
