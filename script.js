$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "https://servicodados.ibge.gov.br/api/v1/localidades/distritos ",
        data: { orderBy: "nome" },
        dataType: "JSON",
        sucess: function(response) {
            $.each(response, function(indexInArray, valueOfElement) {
                var option = "<option>" + valueOfElement.nome + "</option>"
                $("#UF").append(option)
            })
        }
    })

    $('#UF').change(function(e) {
        e.preventDefault()

        var UF = $("#UF").val()
        if (UF == 'Estados') { return }

        $.ajax({
            type: "GET",
            url: "https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + uf + "/municipios",
            data: { orderBy: "nome" },
            dataType: 'JSON',
            sucess: function(response) {
                $.each(response, function(indexInArray, valueOfElement) {
                    var option = "<option>" + valueOfElement.nome + "</option>"
                    $("#UF").append(option)
                });

            }

        })
    })
})