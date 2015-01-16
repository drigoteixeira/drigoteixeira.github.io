---
title: Minha Experiência na Construção de um Protótipo em HTML
author: Rodrigo Teixeira
excerpt: Um pouco sobre a experiência e os aprendizados em desenvolver um protótipo usando HTML, CSS e JavaScript diretamente no navegador.
layout: post
permalink: /minha-experiencia-construcao-prototipo-html/
dsq_thread_id:
  - 2229689566
categories:
  - Arquitetura de Informação
  - Experimentos
  - Workflow
---
Quem trabalha com planejamento ou desenvolvimento de interfaces para web, conhece bem a importância dos protótipos. Quando mais cedo você consegue testá-lo, mais rápido você pode corrigi-lo e logo, aprimorá-lo.

As opções de ferramentas para construção de protótipos hoje é enorme. De todas elas, acredito que a preferida da maioria dos profissionais UX seja o Axure (eu me incluo nesse time). Mas, em conversas informais como time de design da [A2 Comunicação][1], notamos que essa adorável ferramenta está mostrando algumas limitações, principalmente em projetos com característica responsiva.

Todos nós sabemos da existência de muitos tipos de dispositivos com acesso à web &#8211; tablet, celular, GPS, TV e quem sabe, [sua futura geladeira][2]. Cada um deles conta com especificações diferentes: resolução, tamanho da tela, cores, navegador, renderização, etc. Com toda essa gama de opções, novas fronteiras foram descobertas, na questão da experiência. Novos jeitos de navegar apareceram. Interações ficaram mais complexas. Nesse contexto, reproduzir algumas interações ou comportamentos no Axure, tornou-se em alguns casos uma tarefa bem difícil.

Como profissional de UX, ao me deparar com esse novo cenário, percebi que era preciso testar uma nova abordagem dentro do workflow diário. Criar wireframes/protótipos no Axure não estava sendo bastante. Algumas decisões mais complexas de interação,estavam sendo tomadas diretamente na etapa de Front-End, ou seja, no código final. Isso não é ruim se pensarmos em um contexto iterativo, porém sabia que algumas decisões podem ser aprimoradas em um protótipo.

Por curiosidade, decidir de testar uma nova/velha abordagem, a prototipação direta no navegador, usando HTML, CSS e JavaScript. Digo velha pois a prática não é um movimento novo. Agências digitais como a [Eighshapes][3], [Zurb][4], e [R/GA][5] já utilizam essa metodologia para alguns de seus projetos.

### A transição

Por trabalhar em uma equipe multidisciplinar, montar páginas em HTML/CSS é um processo natural. Desse modo, não houve uma curva de aprendizado ao trocar a prototipação do Axure pelo código direto no navegador. No primeiro protótipo que fiz, usei um *framework* &#8211; uma biblioteca de estilos e padrões de interface que auxilia na construção de elementos e páginas web.  Os mais conhecidos atualmente são [Bootstrap][6], [Foundation][7] &#8211; o que usei em minha experiência-  e o [Gumby][8]. Todos eles possuem uma boa documentação e estão em constante atualização (além de terem sido projetados seguindo as boas práticas de desenvolvimento para mobile &#8211;  [*Mobile First*][9] &#8211; e serem responsivos).

Ao adotar a prototipação diretamente no browser usando como laboratório um projeto pequeno, pude notar alguns benefícios:

**Valorização dos KPI&#8217;s do projeto:** Se você acha que o primeiro passo para prototipar é abrir um editor de código e sair escrevendo HTML, está enganado. O primeiro passo antes de começar a colocar a mão na massa é estar alinhado com os objetivos de comunicação/negócios e saber os KPI’s do projeto. O protótipo HTML será meramente um laboratório em que podemos testar hipóteses, conceitos, elementos e estabelecer fluxos para atingir os objetivos propostos.

**Responsivo de verdade.** Com o auxílio do framework, já é possível prever o comportamento de elementos e da interface em telas menores, sem grandes esforços. Toda a estrutura é gerada a partir de um um único código o que, de certa forma, acelera o tempo de produção e possibilita testar ao mesmo tempo a versão do website em smartphones, tablets e a versão desktop.

**Mais rabiscos. **Antes de escrever o código, fui &#8220;obrigado&#8221; por muitas vezes planejar a estrutura da página ou de um elemento com uma interação mais complexa usando papel e lápis. Vejo isso como um benefício pois trabalhar no papel ajuda a [determinar o conceito base][10]. O protótipo será o momento em que você irá refinar o mesmo conceito. Aqui existe uma sutileza no processo, mas que no final, faz a diferença.

**Validação mais precisa.  **Ao meu ver, o maior ganho foi aqui. Construir um protótipo em HTML, responsivo e navegável no navegador, permitiu fazer uma validação interna com o time de desenvolvimento de forma mais rápida e ágil principalmente em páginas que possuíam funcionalidades mais complexas. Com relação ao cliente, essa abordagem ajudou no entendimento da função de cada página em relação aos objetivos traçados, refinamento do conteúdo tornando um feedback mais qualificado e bem mais perto do real.

### Protótipo em HTML: A técnica definitiva?

Minha resposta é categórica: Não. Usei esse tipo de técnica como uma experiência dentro de meu workflow, para que em algum momento, possa adotá-la de verdade. Claro que em alguns contextos de projeto (ex.: tipo de cliente, prazo de entrega), o mockup gerado pelo Axure ainda será a melhor ferramenta.

Tenho lido alguns textos e comentários em blogs e percebi muitos designers e profissionais UX possuem certa dúvida sobre essa metodologia. Alguns acreditam que código é coisa de programador/desenvolvedor (olha a polêmica). No entanto, acho que a prototipação direta no browser é uma abordagem válida e que garante algum aprendizado.

Creio que independente método escolhido (ou da ferramenta), o que importa no final é entregar um produto de qualidade, que atenda as expectativas do cliente e as necessidades do usuário.

 [1]: http://www.a2comunicacao.com.br/
 [2]: http://www1.folha.uol.com.br/folha/informatica/ult124u11230.shtml
 [3]: http://www.eightshapes.com/
 [4]: http://zurb.com/
 [5]: http://www.rga.com/
 [6]: http://getbootstrap.com/
 [7]: http://foundation.zurb.com/
 [8]: http://gumbyframework.com/
 [9]: httphttp://tableless.com.br/mobile-first-a-arte-de-pensar-com-foco/
 [10]: http://www.neuroniodigital.com.br/a-importancia-de-rabiscar-no-papel-antes-de-fazer-wireframes/