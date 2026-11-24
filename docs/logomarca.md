# Logomarca J®

## Fonte única

O componente `src/components/BrandMark.tsx` é a fonte única do símbolo. Ele desenha o J e o caractere `®`. Para mudar o formato ou o conteúdo do símbolo, edite esse componente; as aplicações reutilizam a mesma marca.

O componente `src/components/Brand.tsx` combina o símbolo com o nome “Junta Solução Empresarial” e é usado no cabeçalho e no rodapé. A marca também aparece diretamente em `src/sections/Hero.tsx`, dentro das órbitas, e em `src/sections/About.tsx`, no selo circular.

## Tipografia e apresentação

- O J usa a fonte Manrope (`--display`), peso 800, mantendo a tipografia original da logomarca.
- O `®` usa DM Mono, peso 600, em tamanho reduzido e elevado em relação ao J.
- O ® usa coral como cor padrão. Na esfera coral do Hero, usa azul-marinho para permanecer visível.
- O CSS ajusta o tamanho conforme a aplicação e o breakpoint responsivo. Esses ajustes ficam em `src/styles/global.css`; não replique a marca como texto ou desenho independente nos componentes.

## Aplicações responsivas

| Aplicação | Tamanho do J |
| --- | ---: |
| Cabeçalho | 31 px; 27 px em telas estreitas |
| Rodapé | 28 px |
| Centro das órbitas no Hero | 85 px; 69 px em telas estreitas |
| Selo da seção Sobre | 100 px; 78 px em telas médias; 67 px em telas estreitas |

As menções textuais a “JSE” no conteúdo identificam a empresa; não são versões alternativas do símbolo da logomarca.
