# Demonstração – Emissão Automática de Protocolo

Esta demonstração ilustra o funcionamento da emissão automática de protocolo
na solução Participa DF – Ouvidoria Multimodal.

## Cenário
Um cidadão registra uma manifestação por texto ou áudio,
aceita o consentimento LGPD e envia a manifestação.

## Funcionamento
Ao submeter a manifestação, o backend gera automaticamente
um número de protocolo único no formato institucional:

DF-<timestamp>

Exemplo:
DF-1712609452

## Objetivo do protocolo
- Garantir rastreabilidade
- Permitir acompanhamento da manifestação
- Evitar exposição de dados pessoais

## Observação
No MVP do hackathon, o protocolo é gerado de forma simples,
mas a arquitetura está preparada para integração futura
com sistemas oficiais da Ouvidoria-Geral do DF.
