const printList = (head) => {
    let current = head;
    let print = ''
    while (current){
        print += String(current.val) + ' -> '
        current = current.next 
    }
    console.log(print) 
}

module.exports = {
    print : printList,
}