$(function() {
    let finalNum = Math.floor(Math.random() * 10 + 1);
    let chances = 3;
    let displayChances = $('#chances');
    let info = $('#display');
    let hit = $('#hit');
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
        hit.text(`Hit:`)
        $('input[type=number]').val('')
    })

    $('input[name=hit]').click(function() {
        chances++
        switch (finalNum) {
            case 1:
                hit.text(`Hit: Is a prime number`)
                break;
            case 2:
                hit.text(`Hit: Times 5 is 10`)
                break;
            case 3:
                hit.text(`Hit: There are 27 on your multiplication table`)
                break;
            case 4:
                hit.text(`Hit: "For u"`)
                break;
            case 5:
                hit.text(`Hit: Their multiples end at 0 and 5`)
                break;
            case 6:
                hit.text(`Hit: Multiple of 3`)
                break;
            case 7:
                hit.text(`Hit: `)
                break;
            case 8:
                hit.text(`Hit: Multiple of 4`)
                break;
            case 9:
                hit.text(`Hit: 63, 72, 81...`)
                break;
            case 10:
                hit.text(`Hit: Multiple of 5`)
                break;
        }
    })
})