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

# Links:

## Top3-v1:

<ul>
    {% for file in collections.top3-v1 %}
        <li>[{{file.data.titulo}}]({{file.url}})</li> 
    {% endfor %}
</ul>

## Top3-v2:

<ul>
    {% for file in collections.top3-v2 %}
        <li>[{{file.data.titulo}}]({{file.url}})</li> 
    {% endfor %}
</ul>

## Top3-v3:

<ul>
    {% for file in collections.top3-v3 %}
        <li>[{{file.data.titulo}}]({{file.url}})</li> 
    {% endfor %}
</ul>

## Top5-v1:

<ul>
    {% for file in collections.top5-v1 %}
        <li>[{{file.data.titulo}}]({{file.url}})</li> 
    {% endfor %}
</ul>

## Top5-v2:

<ul>
    {% for file in collections.top5-v2 %}
        <li>[{{file.data.titulo}}]({{file.url}})</li> 
    {% endfor %}
</ul>

## Top5-v3:

<ul>
    {% for file in collections.top5-v3 %}
        <li>[{{file.data.titulo}}]({{file.url}})</li> 
    {% endfor %}
</ul>

## Top3-v3:

<ul>
    {% for file in collections.top3-v3 %}
        <li>[{{file.data.titulo}}]({{file.url}})</li> 
    {% endfor %}
</ul>

## Top3-v3:

<ul>
    {% for file in collections.top3-v3 %}
        <li>[{{file.data.titulo}}]({{file.url}})</li> 
    {% endfor %}
</ul>

## Top3-v3:

<ul>
    {% for file in collections.top3-v3 %}
        <li>[{{file.data.titulo}}]({{file.url}})</li> 
    {% endfor %}
</ul>