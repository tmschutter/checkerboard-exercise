const body = document.getElementsByTagName('body')[0]

function makeSquare(color){
    var div = document.createElement('div')
    div.className = `${color} square`
    div.style.width = '1%'
    div.style.height = '1%'
    div.style.float = 'left'
    div.style.paddingBottom = '1%'
    div.style.backgroundColor = color
    div.addEventListener('mouseover', randColorEvt)
    return div
}

function checkers(num){
    let i = 0
    let blk = true
    while (i < num){
        // let randColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        if (blk){
            body.append(makeSquare('white'))
        } else body.append(makeSquare('white'))
        i++
        blk = !blk
    }
}

checkers(5000)

function randColorEvt(e){
    e.target.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
}