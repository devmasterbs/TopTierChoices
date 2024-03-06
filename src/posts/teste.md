---
produtos: ['Whey 1', '100% Whey ｜ 7899941201781']
---
<link rel="stylesheet" href="/assets/css/vendors/bootstrap/bootstrap.min.css">
<style>
    table {
        border-collapse: collapse;
        width: 100%;
    }
    th, td {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }
    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
    #iframe-container {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 9999;
            background-color: white;
            border: 1px solid #ccc;
            padding: 10px;
    }
</style>

<table id="dynamic-table">
    <thead>
        <tr>
            <th rowspan="2">Produtos</th>
            <th rowspan="2">Foto</th>
            <th rowspan="2">Ref.</th>
            <th rowspan="2">Clique para Comprar</th>
            <th rowspan="2">Destaque</th>
            <th colspan="9">Detalhes</th>
        </tr>
        <tr>
            <th>Tipo</th>
            <th>Porção</th>
            <th>Proteína</th>
            <th>BCAA</th>
            <th>Glutamina</th>
            <th>Carboidrato</th>
            <th>Sabor</th>
            <th>Sabores Disponíveis</th>
            <th>Quantidade</th>
        </tr>
    </thead>
    <tbody>
        {% if produtos %}
            {% for produto_slug in produtos %}
                {% for post in collections.produtos %}
                    {% if produto_slug == post.data.nomeProduto %}
                        <tr>
                            <td><a href="#" class="show-iframe" data-src="{{post.url}}">{{post.data.marcaProduto}} - {{post.data.nomeProduto}}</a></td>
                            <td><img src="{{post.data.imgProduto}}" alt="{{post.data.marcaProduto}} {{post.data.nomeProduto}}" width="40"></td>
                            <td>A partir de {{post.data.precoProduto}}</td>
                            <td><a href="{{post.data.linkProduto}}" target="_blank" class="btn btn-primary">Comprar</a></td>
                            <td>{{post.data.destaqueProduto}}</td>
                            <td>{{post.data.tipoProduto}}</td>
                            <td>{% if post.data.porcaoProduto == 'undefined' %}---{% else %}{{ post.data.porcaoProduto }}{% endif %}</td>
                            <td>{% if post.data.proteinaProduto == 'undefined' %}---{% else %}{{ post.data.proteinaProduto }}{% endif %}</td>
                            <td>{% if post.data.BCAAProduto == 'undefined' %}---{% else %}{{ post.data.BCAAProduto }}{% endif %}</td>
                            <td>{% if post.data.glutaminaProduto == 'undefined' %}---{% else %}{{ post.data.glutaminaProduto }}{% endif %}</td>
                            <td>{% if post.data.carboidratoProduto == 'undefined' %}---{% else %}{{ post.data.carboidratoProduto }}{% endif %}</td>
                            <td>{% if post.data.saborProduto == 'undefined' %}---{% else %}{{ post.data.saborProduto }}{% endif %}</td>
                            <td>{% if post.data.saboresProduto == 'undefined' %}---{% else %}{{ post.data.saboresProduto }}{% endif %}</td>
                            <td>{% if post.data.qtdGramasProduto == 'undefined' %}---{% else %}{{ post.data.qtdGramasProduto }}{% endif %}</td>
                        </tr>
                    {% endif %}
                {% endfor %}
            {% endfor %}
        {% endif %}
    </tbody>
</table>

<div id="iframe-container">
    <iframe id="my-iframe" src="" width="600" height="400"></iframe>
</div>

<script>
    const showIframeLinks = document.querySelectorAll('.show-iframe');
    const iframeContainer = document.getElementById('iframe-container');
    const myIframe = document.getElementById('my-iframe');

    showIframeLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const iframeSrc = this.getAttribute('data-src');
            iframeContainer.style.display = 'block';
            myIframe.src = iframeSrc;
        });
    });

    window.addEventListener('click', function(event) {
        if (!iframeContainer.contains(event.target) && !event.target.classList.contains('show-iframe')) {
            iframeContainer.style.display = 'none';
            myIframe.src = ''; // Limpa o src para parar de carregar o iframe
        }
    });
</script>
<script src="/assets/js/vendors/jquery/jquery.min.js"></script>
<script src="/assets/js/vendors/bootstrap/bootstrap.min.js"></script>