$(document).ready(function(e) {
    $.ajax({
        type: "get",
        url: "https://servicodados.ibge.gov.br/api/v1/localidades/estados",
        data: { orderBy: "nome" },
        dataType: "json",
        success: function(response) {
            $.each(response, function(indexInArray, valueOfElement) {
                var option = "<option>"+valueOfElement.sigla+"</option>"
                $("#UF").append(option)
            })
        }
    })

    $('#UF').change(function(e) {
        e.preventDefault()
        $("#local").empty()
        var UF = $("#UF").val()


        if (UF == 'Estados')  {
            var option = "<option>Cidades</option>"
            $("#local").append(option)
            return
        }

        $.ajax({
            type: "get",
            url: "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"+ UF + "/municipios",
            data: { orderBy: "nome" },
            dataType: 'json',
            success: function(response) {
                $.each(response, function(indexInArray, valueOfElement) {
                    var option = "<option>" + valueOfElement.nome + "</option>"
                    $("#local").append(option)
                });

            }

        })
    })
})