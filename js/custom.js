$(document).ready(function() {
    var items = ["Hackathons", "Talks"],
        $text = $('#replace-container'),
        delay = 2; //seconds
    
    function loop ( delay ) {
        $.each(items, function (i, elm ){
            $text.delay( delay*1E3).fadeOut();
            $text.queue(function(){
                $text.html( items[i] );
                $text.dequeue();
            });
            $text.fadeIn();
            $text.queue(function(){
                if (i == items.length -1) {
                    loop(delay);   
                }
                $text.dequeue();
            });
        });
    }
    loop( delay );
    // $('#replace-container').airport(['Talks','Hackathons']);
    
});