$(function(){

    var tamanho = $('.galeria-wraper').width();

    console.log(tamanho);

    //SLIDER

        //Variáveis

        var indiceAtual = 0;
        var indiceMaximo = $('.slider img').length; //Contador de slider img
        var delay = 3000;

        //Iniciando funções

        initSlider();
        cliqueSlider();
        
        //Funções

        function initSlider(){ // Função Initial slider 
            $('.slider img').eq(0).fadeIn(); //A img posição 0 será a inicial 
            
            setInterval(function(){ //Nesse tempo execute
                alternarSlider(); //Execute essa função
            },delay); //tempo
        }

        function cliqueSlider(){// Função clique slider
            $('.bullets-nav span').click(function(){ //Se ocorrer a ação do clique no slider
                $('.slider img').eq(indiceAtual).stop().fadeOut(800); //Tire a imagem atual 
                indiceAtual = $(this).index(); //O indice atual vira o mesmo que estamos clicando
                $('.slider img').eq(indiceAtual).stop().fadeIn(800); //Coloque a imagem atual
                $('.bullets-nav span').css('background-color','rgb(250,250,250)'); //Tire a cor de todas as bolinhas
                $(this).css('background-color','rgb(82, 94, 85)'); //Menos a que clicamos, nela aplique:
                
            });
        }

        function alternarSlider(){ //Função altern ar slider
            $('.slider img').eq(indiceAtual).stop().fadeOut(800); //Retire a imagem do indice atual, pare a animação quando solicitado, em 2 ssegundos. 0
            indiceAtual+=1; //Incremente o índice
            
            if(indiceAtual == indiceMaximo){ //Se o índice atual for igual ao índice máximo 
                indiceAtual = 0; //zere o índice
            }    
            
            $('.bullets-nav span').css('background-color','#ccc');//Zere todas as bolihnhas
            $('.bullets-nav span').eq(indiceAtual).css('background-color','rgb(82, 94, 85)'); //Associe com o índice atual ( nova bolinha);
            $('.slider img').eq(indiceAtual).stop().fadeIn(800); //Apareça a nova foto
        }
    
        //section perfil e formulário

        var indicePerfil = 0;
        
        //Cria um índice, a cada indice ele coloca uma cor e um texto nessa sessão.
        



        
})