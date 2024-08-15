# Apresentação do Projeto: Calculadora de Impostos de Importação

## Objetivo da Aplicação

O objetivo deste projeto é criar uma ferramenta web simples e eficaz para calcular impostos de importação. A aplicação permite que o usuário insira o valor do produto, escolha se a compra foi realizada através do "Remessa Conforme" e, com base nessas informações, calcula os impostos aplicáveis e o valor total a ser pago.

### Principais Funcionalidades:

- **Entrada de Dados:** O usuário pode informar o valor do produto e escolher se a compra foi feita no "Remessa Conforme".
- **Cálculo de Impostos:** O sistema calcula o ICMS, a taxa de importação e o valor total dos impostos com base nas regras definidas.
- **Responsividade:** A interface é otimizada para funcionar bem em dispositivos móveis e desktops, garantindo uma boa experiência de usuário em diferentes tamanhos de tela.

## Tecnologias Utilizadas

1. **HTML (HyperText Markup Language):**
   - Utilizado para estruturar o conteúdo da página, incluindo formulários e elementos de entrada.

2. **CSS (Cascading Style Sheets):**
   - Usado para estilizar a página e garantir que a interface seja atraente e responsiva. Inclui ajustes de layout e design para diferentes tamanhos de tela.

3. **JavaScript:**
   - Implementa a lógica de cálculo dos impostos e interação com o usuário. Permite o cálculo dinâmico e a atualização dos resultados com base nas entradas do usuário.

## Cálculo dos Impostos

### 1. Cálculo do Valor Aduaneiro:

O valor aduaneiro é a soma do valor do produto, valor do frete e valor do seguro.

Valor Aduaneiro = Valor do Produto + Valor do Frete + Valor do Seguro


### 2. Cálculo do Imposto de Importação (II):

- **Para compras no "Remessa Conforme":**
  - Se o valor aduaneiro for até 50 dólares (aproximadamente R$ 274,00 com taxa de câmbio de R$ 5,48):
    ```
    II = Valor Aduaneiro × 20%
    ```
  - Se o valor aduaneiro for acima de 50 dólares:
    ```
    II = (Valor Aduaneiro × 60%) - Desconto de US$ 20 em Reais
    ```
  O desconto é convertido para reais usando a taxa de câmbio (US$ 20 × R$ 5,48).

- **Para compras fora do "Remessa Conforme":**
II = Valor Aduaneiro × 60%


### 3. Cálculo do ICMS:

O ICMS é calculado com base na seguinte fórmula:

1. **Base de Cálculo do ICMS:**

BC ICMS = (Valor Aduaneiro + Imposto de Importação) / (1 - 0,17)


2. **Valor do ICMS:**

ICMS = BC ICMS × 17%


### 4. Cálculo do Valor Total dos Impostos:

O valor total dos impostos é a soma do Imposto de Importação e ICMS:

Valor Total dos Impostos = Imposto de Importação + ICMS


### 5. Cálculo do Valor Total a Pagar:

O valor total a pagar é a soma do valor do produto com os impostos:

Valor Total a Pagar = Valor do Produto + Valor Total dos Impostos


## Demonstração do Projeto

[Inclua aqui um link para a aplicação ao vivo ou uma demonstração do projeto, se disponível.]

## Conclusão

Este projeto é uma solução prática para calcular impostos de importação, proporcionando uma ferramenta útil para quem realiza compras internacionais. A combinação de HTML, CSS e JavaScript garante uma experiência de usuário intuitiva e responsiva. A aplicação está pronta para ser utilizada e aprimorada conforme necessário.
