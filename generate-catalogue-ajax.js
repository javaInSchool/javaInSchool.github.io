function generateBlocks(blogPosts){
     // jquery зі звичайним циклом
                for (var i = 0; i < blogPosts.length; i++) {
                    var textBlock = $("<div />");
                    // jQuery-обгортка навколо <div />

                    textBlock.addClass('blog-post-text');
                    textBlock.text(blogPosts[i].body);
                    
                    var tile = $('<div />');
                    tile.addClass('blog-post');
                    tile.append('<h1>'+blogPosts[i].title+'</h1>');
                    tile.append(textBlock);

                    $('.js-box-catalog').append(tile);
                }
}

$(document).ready(
    function() {
        console.log('Document loaded!');

        $.get( 
            "https://jsonplaceholder.typicode.com/posts", 
            function( blogPosts ) {
                console.log("Server answer:", blogPosts);
                generateBlocks(blogPosts);
            }

        );

        // // jquery зі звичайним циклом
        // for (var i = 0; i < products.length; i++) {
        //     var img = $("<img />");
        //     // jQuery-обгортка навколо <img />

        //     img.attr('src', products[i].image);
        //     img.attr('alt', products[i].name);

        //     if(products[i].isSuper)
        //         img.addClass('super');

        //     var tile = $('<li class="tile"></li>');
        //     tile.append('<h1>'+products[i].name+'</h1>');
        //     tile.append(img);

        //     $('.products-list').append(tile);
        // }

        // // варіант з перебором через jQuery
        // $.each(products, function( index, value ) {
        //     var img = $("<img />");

        //     img.attr('src', value.image);
        //     img.attr('alt', value.name);

        //     if(value.isSuper)
        //         img.addClass('super');

        //     var tile = $('<li class="tile"></li>');
        //     tile.append('<h1>'+value.name+'</h1>');
        //     tile.append(img);

        //     $('.products-list').append(tile);
        // });
    }
);