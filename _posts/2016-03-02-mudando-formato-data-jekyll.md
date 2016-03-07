---
title: Traduzindo o formato da data dos posts no Jekyll
author: Rodrigo Teixeira
excerpt: 'Saiba como traduzir para o padrão português o formato da data para páginas criadas com Jekyll'
layout: post
permalink: blog/mudando-formato-data-jekyll/
dsq_thread_id:
  - 3279847937
categories:
  - Codigo
---

Com o intuito de realizar algumas correções de bugs e melhorias no código do template aqui do meu website (desenvolvido com [Jekyll](https://jekyllrb.com/)), fiz uma busca na web para tentar resolver a questão da formatação da datas nos posts do blog, trazindo-as do Inglês para o Português. 

Encontrei no blog do [Alan W. Smith](http://alanwsmith.com/jekyll-liquid-date-formatting-examples) um ótimo exemplo de como resolver essa questão. Para quem interessar, segue o snippet sugerido abaixo,
já com os nomes dos meses traduzidos para o Português: 

{% highlight ruby %}

{% assign m = page.date | date: "%-m" %}
&#123;&#123; page.date | date: "%-d" &#125;&#125;
{% case m %}
  {% when '1' %} Janeiro
  {% when '2' %} Fevereiro
  {% when '3' %} Mar&ccedil;o
  {% when '4' %} Abril
  {% when '5' %} Maio
  {% when '6' %} Junho
  {% when '7' %} Julho
  {% when '8' %} Agosto
  {% when '9' %} Setembro
  {% when '10' %} Outubro
  {% when '11' %} Novembro
  {% when '12' %}Dezembro
{% endcase %}
{{  page.date | date: "&#37;Y"  }}


{% endhighlight %}
