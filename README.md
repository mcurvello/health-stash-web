# Sobre

Bem-vindo ao Health Stash, um aplicativo web desenvolvido com React que oferece uma solução abrangente para gerenciamento de saúde, integração com o Firebase para autenticação e serviços do FHIR para informações de pacientes e médicos.

Este projeto foi desenvolvido como parte do FIAP Enterprise Challenge, um desafio acadêmico da FIAP.

# Screenshots

## Tela de login

![image](https://github.com/laerciodev/health-stash-web/assets/8559900/f81d8ab2-6afe-4cc2-b1ad-9c9ae6a89f3a)

## Tela de cadastro médico

![image](https://github.com/laerciodev/health-stash-web/assets/8559900/67be6054-e97e-437b-b7c0-bdda0a5711be)

## Tela de paciente

![image](https://github.com/laerciodev/health-stash-web/assets/8559900/5fc3bde9-40fb-48a5-af06-a4518ae6869e)


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
