# 🧱 Field Services de Datacenter — Checklist de Validação e Execução

**Período de validação:** 2026-11-14
**Foco:** Field Services de Datacenter (infraestrutura, envio de técnico, diagnóstico, diagnóstico, atendimento)
**Status:** Arquivo de verificação interna — ainda não publicado.
**Regra de produção:** Nenhum cliente, funcionário, dado de cobertura ou resultado é confirmado aqui. Tudo está em estado de validação interna.

---

## 1. Checklist de validação — Post A (mínimas para analisar um chamado)

| ID | Afirmação no rascunho | O que precisa ser comprovado | Dono do controle (sugerido) | Status |
|----|----------------------|----------------------------|-----------------------------|--------|
| R2-F01 | "mande: cidade, tipo de equipamento, sintoma ou impacto e a janela pretendida" | O fluxo de chamado aceita exatamente esses quatro campos no minímo atual? | Ops / Field Services | ⬜ Aberto |
| R2-F02 | "Restem para a avaliação os detalhes técnicos — IP, credenciais, ID do equipamento, dados de rede" | O processo de avaliação recebe esses dados apenas em canal direto (não no comentário público)? | Ops / Field Services | ⬜ Aberto |
| R2-F03 | "A conversa direta com a Zion é o canal certo" | Quais canais são reais (e-mail, telefone, formulário TI, chat de operação, support@ziontechgroup.com)? O texto deve ser consistente com o processo real. | Ops / Field Services | ⬜ Aberto |
| R2-F04 | "Para analisar um chamado ágil" | "Ágil" significa o que aqui? Tempo médio de resposta, tempo de diagnóstico, tempo de resolução? Definir métrica cognitiva. | Ops / Field Services | ⬜ Aberto |

---

## 2. Checklist de validação — Post B (alinhamento de escopo antes do atendimento)

| ID | Afirmação no rascunho | O que precisa ser comprovado | Dono do controle (sugerido) | Status |
|----|----------------------|----------------------------|-----------------------------|--------|
| R2-F05 | "Na avaliação, confirmamos escopo, preço e disponibilidade" | A avaliação formalmente gera confirmação de escopo, preço e disponibilidade? Quem responde? | Financeiro / Ops / Vendas | ⬜ Aberto |
| R2-F06 | "antes da liberação não há garantias" | Não há compromissos de preço, prazo ou acesso antes da liberação formal. Validar o controle para não emitir garantias informais. | Financeiro / Legal | ⬜ Aberto |
| R2-F07 | "Fale com a Zion e alinhem o atendimento" | CTA: consistente com a redação aprovada ("Converse com a Zion"). Não cria conflito com o fluxo de escopo. | Ops / Field Services | ⬜ Aberto |

---

## 3. Evidências necessárias para o plano

| Evidência | Fonte | Estado atual |
|-----------|-------|--------------|
| Canais de contato reais de field services de datacenter | E-mail/telefone/formulário/operação | ⬜ A definir |
| Fluxo de chamado e seus campos mínimos | Ticket de operação / field services | ⬜ A verificar |
| Processo de avaliação (quem aprova escopo/preço/disponibilidade) | Orçamento / ops / financeiro | ⬜ A verificar |
| Controle de garantias (anterior à liberação) | Contrato / checkbox de aprovação | ⬜ A verificar |
| Métrica de "chamada ágil" | SLA / operation metric | ⬜ A definir |

---

## 4. Próximas ações de campo

1. **Validar com operations** o fluxo de chamado e os campos mínimos (R2-F01, R2-F02).
2. **Validar com financeiro/legal** o controle de garantias antes da liberação (R2-F06).
3. **Validar canal de contato** com a operação (R2-F03).
4. **Definir métrica de "chamada ágil"** (R2-F04).
5. **Aplicar correções** ao texto apenas após aprovação.

---

## 5. Regra de produção

- Nenhum cliente, funcionário, dado de cobertura ou resultado é confirmado neste documento.
- Tudo relevante está em estado de validação interna.
- As afirmações de fato são verificáveis somente com a homologação da operação de field services + aprovação da direção editorial.
