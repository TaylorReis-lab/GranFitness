import React from 'react'

import { Collapse } from '../../utilits'

import { Container } from './styled'

export function Questions() {
  return (
    <Container>
      <h1>PERGUNTAS FREQUENTES</h1>
      <Collapse title="QUANTO É A MENSALIDADE DA GRAN FITNESS?">
        <p>
          A Gran Fitness trabalha com planos de fidelidade de 4 e 12 meses.
          <br />
          <br />
          **Unidade Florianópolis, Santos, São Caetano e São Paulo:**
          <br />
          <br />
          **PLANO FIDELIDADE 4 MESES**
          <br />
          Mensalidade: R$ 400,00
          <br />
          Taxa única de matrícula: R$ 120,00
          <br />
          Primeira cobrança: R$ 520,00
          <br />
          Demais mensalidades: R$ 400,00
          <br />
          <br />
          **PLANO FIDELIDADE 12 MESES**
          <br />
          Mensalidade: R$ 299,00
          <br />
          Taxa única de matrícula: R$ 120,00
          <br />
          Primeira cobrança: R$ 419,00
          <br />
          Demais mensalidades: R$ 299,00
          <br />
          <br />
          **PLANO MENSAL**
          <br />
          Mensalidade: R$ 500,00
          <br />
          Taxa única de matrícula: R$ 120,00
        </p>
      </Collapse>
      {/* <!-- Pergunta 1 --> */}
      <Collapse title="QUAIS SÃO OS BENEFÍCIOS DOS PLANOS?">
        <p>
          Ao escolher um plano de fidelidade, você garante acesso a todas as
          unidades, equipamentos de última geração, aulas coletivas e
          acompanhamento com personal trainers.
        </p>
      </Collapse>
      {/* <!-- Pergunta 2 --> */}
      <Collapse title="QUAIS SÃO OS VALORES DOS PLANOS?">
        <p>
          <strong>Planos da Nossa Unidade</strong>
          <br />
          <br />
          PLANO FIDELIDADE 4 MESES
          <br />
          Mensalidade R$ 400,00
          <br />
          Taxa única de matrícula R$ 120,00
          <br />
          Primeira cobrança R$ 520,00
          <br />
          Demais mensalidade R$ 400,00
          <br />
          <br />
          PLANO FIDELIDADE 12 MESES
          <br />
          Mensalidade R$ 299,00
          <br />
          Taxa única de matrícula R$ 120,00
          <br />
          Primeira cobrança R$ 419,00
          <br />
          Demais mensalidade R$ 299,00
          <br />
          <br />
          O plano de recorrência não compromete o limite do seu cartão.
          <br />
          <br />
          PLANO MENSAL R$ 500,00
          <br />
          Taxa única de matrícula R$ 120,00
          <br />
          <br />
          <br />
          Unidade Maringá:
          <br />
          <br />
          PLANO FIDELIDADE 4 MESES
          <br />
          Mensalidade R$ 350,00
          <br />
          Taxa única de matrícula R$ 120,00.
          <br />
          Valor total do plano: R$ 1.500,00 - cobrança única
          <br />
          <br />
          PLANO FIDELIDADE 12 MESES
          <br />
          Mensalidade R$ 280,00
          <br />
          Taxa única de matrícula R$ 120,00
          <br />
          Primeira cobrança R$ 400,00
          <br />
          Demais mensalidades R$ 280,00
          <br />
          <br />
          PLANO MENSAL R$ 500,00
          <br />
          Taxa única de matrícula R$ 120,00
          <br />
        </p>
      </Collapse>
      {/* <!-- Pergunta 3 --> */}
      <Collapse title="COMO FAZER A MINHA ADESÃO/MATRÍCULA?">
        <p>
          Pode efetuar em nosso site: (Link do site oficial), pelo nosso
          whatsapp: (
          <a
            href="https://wa.me/5564992540287?text=Ol%C3%A1,%20gostaria%20de%20fazer%20algumas%20perguntas"
            target="_blank"
            rel="noreferrer"
          >
            5564992540287
          </a>
          ) ou em uma das nossas unidades.
        </p>
      </Collapse>
      {/* <!-- Pergunta 4 --> */}
      <Collapse
        title="QUAIS SÃO OS DIAS E HORÁRIOS DE FUNCIONAMENTO DA GRAN
                FITNESS?"
      >
        <p>
          Segunda-feira 06:00 - 22:00 <br /> Terça-feira 06:00 - 22:00 <br />
          Quarta-feira 06:00 - 22:00 <br /> Quinta-feira 06:00 - 22:00 <br />
          Sexta-feira 06:00 - 22:00 <br /> Sábado 09:00 - 12:00 <br /> Domingo
          Fechado
        </p>
      </Collapse>
    </Container>
  )
}
