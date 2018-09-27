$(document).ready(function(){
    $('[lang="ch"]').hide();
    $('#switch-lang').click(function() {
        var $this = $(this);
        $this.toggleClass('ch');
        if($this.hasClass('ch')){
            $this.text('English');         
        } else {
            $this.text('中文');
        }
        $('[lang="ch"]').toggle();
        $('[lang="en"]').toggle();
    });         
});