---
title: WordCamp São Paulo 2013
author: Rodrigo Teixeira
excerpt: Minhas anotações e insights sobre o que foi discutido no WordCamp São Paulo, a conferência oficial da comunidade WordPress
layout: post
permalink: /wordcamp-sao-paulo-2013/
dsq_thread_id:
  - 1993459479
categories:
  - Eventos
---
Neste sábado, aconteceu em São Paulo a segunda edição do [WordCamp São Paulo][1]. O evento serviu para discutir boas práticas, conceitos, plugins e oportunidades de negócios utilizando o WordPress como plataforma, além de reunir evangelistas e entusiastas em um ambiente agradável, amistoso e informal.

Abaixo, segue uma compilação das minhas principais anotações durante as palestras que acompanhei no evento.

* * *

O WordPress é uma plataforma de publicação de conteúdo muito mais madura hoje. Sua composição atual consegue atender diversos tipos de site, que vão desde blogs, portais até sites de notícias e de música.

Como plataforma, o WP é uma ferramenta que atende perfeitamente as necessidades das startups que estão buscando atingir o MVP &#8211; Mínimo Produto Viável &#8211; e também, consegue auxiliar empresas e instituições que trabalham com o conceito de assinaturas, como por exemplo o website da [Torcida Fúria Alvinegra][2].

O mercado de sites de assinatura cresce em torno de 20% ao mês. É um modelo de negócio bastante sustentável e atrativo aos empreendedores que possuem como foco entregar produtos e serviços baseados em comodidade, preço e conveniência aos seus clientes. Dentro desse contexto, o uso do WordPress e de [bons plugins][3] que ajudem a viabilizar o cadastro de usuários, executar transações financeiras e possibilitar o cancelamento da assinatura de modo fácil, agrega muito mais valor ao negócio e permite estreitar o relacionamento com o cliente.

Com a previsão de publicação em Janeiro de 2014, o [CorreioWP][4] é um projeto de colaboradores da [Comunidade WordPress Brasil][5] para a divulgação de uma newsletter que irá trazer aos leitores notícias, artigos e dicas sobre WordPress, totalmente em português. O projeto é uma das grandes demonstrações de que a comunidade WordPress no Brasil é engajada, ativa e que visa o bem de todos os desenvolvedores.

O [WP-Cli ][6]é um conjunto de ferramentas para gerenciar o WordPress a partir da linha de comando, com o intuito de otimizar o workflow do desenvolvedor nas questões de rotinas de atualizações, backups e configurações.

Sobre boas práticas na manutenção do código do WP, uma das principais dicas é não editar nenhum código do core da plataforma. É perigoso e qualquer modificação não planejada pode onerar negativamente o desempenho e funcionamento do CMS.

Na questão da montagem dos temas usando HTML/PHP, JavaScript e CSS, o desenvolvedor precisa levar em consideração alguns padrões sugeridos pelo [WordPress Coding Standards][7]. São eles:

  * Legibilidade
  * Durabilidade
  * Compatibilidade
  * Segurança
  * Manutenibilidade (de fácil manutenção).

O WP possui algumas funções nativas que acabam não sendo utilizados pelos desenvolvedores. Isso pode acontecer talvez pela falta de tempo para resolver alguma questão (bug ou uma rápida funcionalide) ou mesmo, por desconhecimento. Um exemplo é a existência no core da tag condicional

<pre>wp_is_mobile ()</pre>

que possibilita maior controle sobre funcionalidades que irão existir somente na versão mobile de um site/blog.

Um dos grandes recados é o uso moderados de plugins dentro da plataforma. Quanto mais plugins um website utiliza, menor será sua performance. O uso de plugins é recomendável, desde que seja útil para funcionalidades extremamente exclusivas.

 [1]: http://2013.saopaulo.wordcamp.org
 [2]: http://furialvinegra.com/site/
 [3]: http://www.vindi.com.br
 [4]: http://correiowp.com
 [5]: http://wp-brasil.org
 [6]: http://wp-cli.org
 [7]: http://make.wordpress.org/core/handbook/coding-standards/