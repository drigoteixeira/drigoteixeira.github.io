---
title: Traduzindo a data dos post com Jekyll
author: Rodrigo Teixeira
excerpt: 'Saiba como traduzir o formato data das postagens de seu blog/site usando Jekyll'
layout: post
permalink: blog/traduzindo-data-posts-jekyll/
dsq_thread_id:
  - 3279847937
categories:
  - Código
---

Ao desenvolver meu blog usando Jekyll, senti a necessidade de melhorar o formato da data das postagens, traduzindo-as para o Português.

Para traduzir este elemento - seja no loop das postagens ou na página do post (na posição onde está a data) - basta implementar o seguinte código: 


{% raw %}
<figure class="highlight">
<pre>
  <code class="language-css" style="ruby">
    {% assign m = page.date | date: "%-m" %}
    {{ page.date | date: "%-d" }}
    {% case m %}
      {% when '1'%} Janeiro
      {% when '2'%} Fevereiro
      {% when '3'%} Março
      {% when '4'%} Abril
      {% when '5'%} Maio
      {% when '6'%} Junho
      {% when '7'%} Julho
      {% when '8'%} Agosto
      {% when '9'%} Setembro
      {% when '10'%} Outubro
      {% when '11'%} Novembro
      {% when '12'%} Dezembro
    {% endcase %}
    {{ page.date | date: "%Y" }}
  </code>
</pre>
</figure>
{% endraw %}



No exemplo acima, estou usando o formato `D M Y`. Para traduzir o nome do mês, fizemos a comparação do numeral representativo de cada um associada ao seu respectivo nome em Português. Funcionou de forma excelente. 

Conhece algum outro formato ou boa prática? Compartilhe nos comentários! 

