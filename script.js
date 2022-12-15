const body = document.getElementsByTagName('body')[0]

function makeSquare(color){
    var div = document.createElement('div')
    div.className = `${color} square`
    div.style.width = '11.1%'
    div.style.height = '11.1%'
    div.style.float = 'left'
    div.style.paddingBottom = '11.1%'
    div.style.backgroundColor = color
    body.append(div)
}

function checkers(num){
    let i = 0
    let blk = true
    while (i < num){
        if (blk){
            makeSquare('black')
        } else makeSquare('white')
        i++
        blk = !blk
    }
}

checkers(81)