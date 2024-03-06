<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Sites</title>
</head>

{% for item in all %}
<article>
  <h2>{{ item.pageName }}</h2>
  <p>{{ item.Headline }}</p>
</article>
{% endfor %}