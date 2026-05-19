---

## 🟢 1. Criar o projeto
Hoje em 2026, o caminho mais comum é usar **Vite** (mais rápido e moderno que CRA):

```bash
npm create vite@latest meu-projeto -- --template react-ts
cd meu-projeto
npm install
```

---

## 🟢 2. Instalar dependências de lint e formatação

```bash
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-import prettier eslint-plugin-prettier eslint-config-prettier husky lint-staged
```

---

## 🟢 3. Configurar ESLint

Crie `.eslintrc.json`:

```json
{
  "parser": "@typescript-eslint/parser",
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended"
  ],
  "plugins": [
    "@typescript-eslint",
    "react",
    "react-hooks",
    "jsx-a11y",
    "import",
    "prettier"
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": ["warn"],
    "@typescript-eslint/no-explicit-any": "warn",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "prettier/prettier": ["error"]
  },
  "settings": {
    "react": {
      "version": "detect"
    },
    "import/resolver": {
      "typescript": {
        "project": "./tsconfig.json"
      }
    }
  }
}
```

---

## 🟢 4. Configurar TypeScript (`tsconfig.json`)

Em 2026, os valores recomendados são `node16` ou `nodenext` para `moduleResolution`.  
Exemplo:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "esnext",
    "moduleResolution": "node16",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "baseUrl": "./src",
    "paths": {
      "@components/*": ["components/*"],
      "@utils/*": ["utils/*"],
      "@hooks/*": ["hooks/*"],
      "@pages/*": ["pages/*"]
    }
  },
  "include": ["src"]
}
```

---

## 🟢 5. Configurar Prettier

Crie `.prettierrc`:

```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 100,
  "tabWidth": 2
}
```

---

## 🟢 6. Configurar EditorConfig

Crie `.editorconfig`:

```
root = true

[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
indent_style = space
indent_size = 2
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false
```

---

## 🟢 7. Scripts no `package.json`

Adicione:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "lint": "eslint src --ext .ts,.tsx",
  "lint:fix": "eslint src --ext .ts,.tsx --fix",
  "format": "prettier --write ."
}
```

---

## 🟢 8. Configurar Husky + lint-staged

Inicialize Husky:

```bash
npx husky init
```

No `package.json`, adicione:

```json
"lint-staged": {
  "src/**/*.{js,jsx,ts,tsx,json,css,md}": [
    "eslint --fix",
    "prettier --write"
  ]
}
```

Crie o hook:

```bash
npx husky add .husky/pre-commit "npx lint-staged"
```

---

## 🚀 Fluxo final em 2026

- `npm run lint` → verifica problemas.
- `npm run lint:fix` → corrige automaticamente.
- `npm run format` → aplica Prettier.
- Husky + lint-staged → garante que commits só entram se estiverem formatados e sem erros de lint.

---

👉 Esse é o **setup moderno em 2026**: React + Vite + TypeScript + ESLint + Prettier + EditorConfig + Husky.
