# Participa DF – Ouvidoria Multimodal (PWA)

## Visão Geral

Este projeto apresenta uma **solução digital inovadora e acessível para a Ouvidoria do Participa DF**, desenvolvida no contexto do **1º Hackathon em Controle Social – Desafio Participa DF**.

A proposta consiste em uma **Progressive Web App (PWA)** que permite ao cidadão registrar manifestações por **texto, áudio, imagem e vídeo**, com **emissão automática de protocolo**, **opção de anonimato**, **acessibilidade plena conforme WCAG** e **integração conceitual com o sistema de inteligência artificial IZA da Ouvidoria-Geral do DF**.

---

## Objetivo do Projeto

Ampliar e democratizar o acesso à Ouvidoria do DF, reduzindo barreiras de uso associadas à escrita, conectividade e letramento digital, por meio de uma aplicação:

* Multimodal
* Inclusiva
* Acessível
* Compatível com LGPD
* Preparada para uso governamental real

---

## Base de Dados Utilizada

O desenvolvimento e a validação da solução utilizam como referência o conjunto de dados:

**`AMOSTRA_e-SIC.xlsx`**

Características da base:

* Manifestações reais anonimizadas
* Conteúdo textual em linguagem natural
* Dados mascarados conforme LGPD
* Adequados para treino, teste e demonstração

### Finalidade do uso dos dados

* Simulação do texto canônico gerado por áudio, imagem e vídeo
* Testes de classificação temática
* Avaliação de acessibilidade e usabilidade
* Demonstração de geração automática de protocolo
* Validação de compatibilidade com a IA IZA

> Nenhum dado pessoal identificável é utilizado ou exposto pela solução.

---

## Escopo do MVP (48h)

O MVP apresentado no hackathon foi deliberadamente definido para garantir **funcionalidade plena e demonstração ao vivo**.

### Funcionalidades implementadas

* PWA instalável (mobile e desktop)
* Registro de manifestações por **texto** e **áudio**
* Conversão automática de **áudio → texto (PT-BR)**
* Geração automática de **número de protocolo**
* Opção de **manifestação anônima**
* Consentimento explícito conforme LGPD
* Funcionamento **offline-first** com sincronização posterior

### Funcionalidades previstas (evolução)

* Registro por imagem (OCR)
* Registro por vídeo
* Classificação temática automática
* Detecção preliminar de conteúdo sensível
* Notificações de acompanhamento
* Integração plena com sistemas da Ouvidoria-Geral do DF

---

## Pipeline Multimodal da Solução

```
Entrada do cidadão
   ├── Texto digitado
   ├── Áudio gravado → Speech-to-Text
   ├── Imagem → OCR → Texto (previsto)
   ├── Vídeo → Áudio → Texto (previsto)
        ↓
Texto Canônico Unificado
        ↓
Geração de Protocolo + Metadados
        ↓
Classificação e Encaminhamento (IZA-ready)
```

O **texto canônico** torna-se a base oficial da manifestação, preservando os anexos como evidência.

---

## Acessibilidade (WCAG)

A solução foi concebida desde o início com foco em acessibilidade:

* Navegação por teclado
* Compatibilidade com leitores de tela
* Alternativa por áudio para cidadãos com baixa alfabetização
* Linguagem clara e institucional
* Contraste e tipografia adequados

Esses aspectos foram validados com base nos textos reais presentes na base `AMOSTRA_e-SIC.xlsx`.

---

## LGPD e Governança de Dados

* Consentimento explícito e informado
* Minimização de dados coletados
* Opção de anonimato
* Separação entre conteúdo e metadados
* Arquitetura preparada para auditoria

> A inteligência artificial atua como **apoio à triagem**, mantendo a decisão final sob responsabilidade humana.

---

## Integração com IA IZA (Ouvidoria-Geral do DF)

A arquitetura da solução foi desenhada para integração futura com a **IA IZA**, possibilitando:

* Classificação automática de manifestações
* Apoio à triagem e priorização
* Análise de tendências e recorrências

No MVP, essa integração é **simulada**, respeitando limites de acesso e segurança.
