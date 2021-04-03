$(function() {
    let finalNum = Math.floor(Math.random() * 10 + 1);
    let chances = 3;
    let displayChances = $('#chances');
    let info = $('#display');
    console.log(finalNum) //tests
    

    $('form').submit(function() {
        var userNum = $('input[type=number]').val()
        function Game() {
            if(userNum == finalNum) {
                $(this).css('display', 'none')
                $('.winDisplay').css('display', 'block')
            }

            if(userNum != finalNum) {
                chances--
                displayChances.text(`Chances: ${chances}`) 
                if(userNum > finalNum) {
                    info.text(`Enter a small number`)
                }
                if(userNum < finalNum) {
                    info.text(`Enter a larger number`)
                }
            }
            if(chances == 0) {
                $(this).css('display', 'none')
                $('.loseDisplay').css('display', 'block')
            }
        }
        Game()
        return false
    })
    $('input[name=again]').click(function() {
        $('form').css('display', 'block');
        $('.winDisplay').css('display', 'none');
        $('.loseDisplay').css('display', 'none');
        finalNum = Math.floor(Math.random() * 10 + 1);
        chances = 3
        displayChances.text(`Chances: ${chances}`)
        info.text(`Enter a number`) 
        $('input[type=number]').val('')
    })
})