$(document).ready(function () {
    carregarTarefas();


    $('#addTarefaBtn').on('click', function () {
        var tarefaText = $('#tarefaInput').val();
        if (tarefaText.length > 0 ) {
            addTarefa(tarefaText)
            salvarTarefas()
            $('#tarefaInput').val('');
        }    

    });


    function addTarefa(text) {
        $('#tarefaList').append('<li><span>&times;</span>' + text + '</li>');
        
    }

    $(document).on('click', 'li', function () {
        $(this).toggleClass('completed');
        salvarTarefas();

    });

    $(document).on('click', 'span', function (e) {
        e.stopPropagation();
        $(this).parent().fadeOut(100, function () {
            $(this).remove();
            salvarTarefas();
        });
    });

    function salvarTarefas() {
        var tarefa = $('#tarefaList').html();
        localStorage.setItem('tarefas', tarefas)
    }

    function carregarTarefas() {
        var tarefas = localStorage.getItem('tarefa');
        console.log(tarefas)

        if (tarefas) {

            $('#tarefaList').html(tarefas);
        }
    }


})